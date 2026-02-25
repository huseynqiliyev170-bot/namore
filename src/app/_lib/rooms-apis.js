import directus2 from "@library/directus-graphql";
import { formatISO, endOfDay } from "date-fns";

export const checkRoomAvailability = async (id, checkInDate, checkOutDate) => {
    try {
        const roomData = await directus2.query(`
            query {
                room_types (filter: {
                    slug : { _eq: "${id}" }
                }) {
                    rooms(filter: {
                        _and: [
                            { is_available: { _eq: true } },
                            {
                                _or: [
                                    {
                                        reservations: {
                                            check_in_date: { _null: true },
                                        },
                                    },
                                    {
                                        reservations: {
                                            check_out_date: { _null: true },
                                        },
                                    },
                                    {
                                        reservations: {
                                            check_out_date: { _lt: "${checkInDate}" },
                                        },
                                    },
                                    {
                                        reservations: {
                                            check_in_date: { _gt: "${checkOutDate}" },
                                        },
                                    },
                                ],
                            }
                        ]
                    }, limit: 1 ) {
                        id,
                        reservations {
                            check_in_date,
                            check_out_date
                        }
                    }
                }
            }
        `);
        //console.log(roomData);
        return roomData[0].room_types;
    } catch (error) {
        console.log(error);
    }
};

export const getRoomData = async (id) => {
    try {
        const roomData = await directus2.query(`
            query {
                room_types (filter: {
                    _or: [
                        {
                            slug: { _eq: "${id}" }
                        },
                        {
                            id: { _eq: "${id}" }
                        }
                    ]
                }, limit: 1 ) {
                    id, 
                    name,
                    slug, 
                    price, 
                    gallery {
                        image {
                            id,
                            filename_download,
                            title
                        }
                    },
                    gallery_type, 
                    capacity, 
                    short, 
                    area,
                    map_embed_url,
                    content,
                    category {
                        name,
                        slug
                    },
                    features {
                        room_features_id {
                            name,
                            icon {
                                id,
                                filename_download,
                                title
                            }
                        }
                    },
                    amenities {
                        room_amenities_id {
                            name,
                            icon {
                                id,
                                filename_download,
                                title
                            },
                            text
                        }
                    },
                    rooms(filter: {
                        is_available: { _eq: true }
                    }) {
                        id,
                        reservations {
                            check_in_date,
                            check_out_date
                        }
                    }
                }
            }
        `);
        //console.log(roomData);
        return roomData.room_types[0];
    } catch (error) {
        console.log(error);
    }
};

export const getAllRoomSlugs = async () => {
    try {
        const slugs = await directus2.query(`
            query {
                room_types {
                    slug,
                    id
                }
            }
        `);
        //console.log(slugs);
        return slugs.room_types;
    } catch (error) {
        console.log(error);
        return []
    }
};

export const getAllRoomCategories = async () => {
    try {
        const categories = await directus2.query(`
            query {
                room_categories {
                    slug,
                    name
                }
            }
        `);
        //console.log(categories);
        return categories.room_categories;
    } catch (error) {
        console.log(error);
    }
};

export const getTotalRoomTypesCount = async ( capacity, checkInDate, checkOutDate, category ) => {
    let roomsAvailableQ = '';
    if ( checkInDate && checkOutDate ) {
        roomsAvailableQ = `
            {
                rooms: {
                    _or: [
                        {
                            reservations: {
                                check_in_date: { _null: true },
                            },
                        },
                        {
                            reservations: {
                                check_out_date: { _null: true },
                            },
                        },
                        {
                            reservations: {
                                check_out_date: { _lt: "${checkInDate}" },
                            },
                        },
                        {
                            reservations: {
                                check_in_date: { _gt: "${checkOutDate}" },
                            },
                        },
                    ],
                },
            },
        `;
    }

    let capacityQ = '';
    if ( capacity ) {
        capacityQ = `
            {
                capacity: { _gte: "${Number(capacity)}" }
            }
        `;
    }

    let categoryQ = '';
    if ( category ) {
        categoryQ = `
            {
                category: {
                    slug: { _eq: "${category}" }
                }
            }
        `;
    }
    
    const totalCount = await directus2.query(`
        query {
            room_types_aggregated(filter: {
                _and: [
                    {
                        rooms: {
                            is_available: { _eq: true }
                        }
                    },
                    `+capacityQ+`
                    `+roomsAvailableQ+`
                    `+categoryQ+`
                ]
            }, groupBy: ["id"]) {
                group
                count {
                    id
                }
            }
        }
    `);
    //console.log(totalCount);
    return totalCount.room_types_aggregated.length;
};

export const getFeaturedRoomTypes = async ( limit ) => {
    try {
        const featured = await directus2.query(`
            query ( $limit: Int ){
                room_types (filter: {
                    featured: { _eq: true }
                }, limit: $limit ) {
                    id, 
                    name,
                    slug, 
                    price, 
                    gallery {
                        image {
                            id,
                            filename_download,
                            title
                        }
                    }, 
                    capacity, 
                    short, 
                    area,
                    rooms (filter: {
                        is_available: { _eq: true }
                    }, limit: 1 ) {
                        is_available
                    },
                    category {
                        slug,
                        name
                    }
                }
            }
        `, {limit: limit});
        //console.log(featured);
        return featured.room_types;
    } catch (error) {
        console.log(error);
    }
};

export const getRoomTypes = async ( checkInDate, checkOutDate, capacity, category, limit, page ) => {
    let roomsAvailableQ = '';
    if ( checkInDate && checkOutDate ) {
        roomsAvailableQ = `
            {
                rooms: {
                    _or: [
                        {
                            reservations: {
                                check_in_date: { _null: true },
                            },
                        },
                        {
                            reservations: {
                                check_out_date: { _null: true },
                            },
                        },
                        {
                            reservations: {
                                check_out_date: { _lt: "${checkInDate}" },
                            },
                        },
                        {
                            reservations: {
                                check_in_date: { _gt: "${checkOutDate}" },
                            },
                        },
                    ],
                },
            },
        `;
    }

    let capacityQ = '';
    if ( capacity ) {
        capacityQ = `
            {
                capacity: { _gte: "${Number(capacity)}" }
            }
        `;
    }

    let categoryQ = '';
    if ( category ) {
        categoryQ = `
            {
                category: {
                    slug: { _eq: "${category}" }
                }
            }
        `;
    }

    try {
        const availableRooms = await directus2.query(`
            query {
                room_types (filter: {
                    _and: [
                        {
                            rooms: {
                                is_available: { _eq: true }
                            }
                        },
                        `+capacityQ+`
                        `+roomsAvailableQ+`
                        `+categoryQ+`
                    ]
                }, limit: ${limit}, page: ${page} ) {
                    id, 
                    name,
                    slug, 
                    price, 
                    gallery {
                        image {
                            id,
                            filename_download,
                            title
                        }
                    }, 
                    capacity, 
                    short, 
                    area, 
                    rooms(filter: {
                        _and: [
                            { is_available: { _eq: true } },
                            {
                                _or: [
                                    {
                                        reservations: {
                                            check_in_date: { _null: true },
                                        },
                                    },
                                    {
                                        reservations: {
                                            check_out_date: { _null: true },
                                        },
                                    },
                                    {
                                        reservations: {
                                            check_out_date: { _lt: "${checkInDate}" },
                                        },
                                    },
                                    {
                                        reservations: {
                                            check_in_date: { _gt: "${checkOutDate}" },
                                        },
                                    },
                                ],
                            }
                        ]
                    }, limit: 1 ) {
                        id,
                        is_available,
                        reservations {
                            check_in_date,
                            check_out_date
                        }
                    },
                    category {
                        slug,
                        name,
                    }
                }
            }
        `);
        //console.log(JSON.stringify(availableRooms, null, 4));
        return availableRooms.room_types;
    } catch (error) {
        console.error("Error fetching available room types:", error);
    }
};

export const makeReservation = async ( reservationData ) => {
    try {
        const data = await directus2.query(`
            mutation {
                create_reservations_item (
                    data: {
                        first_name: "${reservationData.first_name}",
                        last_name: "${reservationData.last_name}",
                        email: "${reservationData.email}",
                        phone_number: "${reservationData.phone_number}",
                        check_in_date: "${formatISO(endOfDay(new Date(reservationData.check_in_date)))}",
                        check_out_date: "${formatISO(endOfDay(new Date(reservationData.check_out_date)))}",
                        room_id: {id: ${reservationData.room_id}},
                        nights: "${reservationData.nights}",
                        total_price: "${reservationData.total_price}",
                        payment_id: "${reservationData.payment_id}"
                    }
                ) {
                    first_name,
                    last_name,
                    email,
                    phone_number,
                    check_in_date,
                    check_out_date,
                    room_id {
                        id
                    },
                    nights,
                    total_price,
                    payment_id
                }
            }
        `);
        return "Booking Successful";
    } catch (error) {
        console.log("Error creating a reservation:", error);
    }
};