import directus2 from "@library/directus-graphql";

export const getAllServicesSlugs = async () => {
    try {
        const slugs = await directus2.query(`
            query {
                services {
                    slug,
                    id
                }
            }
        `);
        //console.log(slugs);
        return slugs.services;
    } catch (error) {
        console.log(error);
        return []
    }
};

export const getAllServices = async () => {
    try {
        const allServices = await directus2.query(`
            query {
                services {
                    id, 
                    name,
                    slug, 
                    image {
                        id,
                        filename_download
                    }
                }
            }
        `);
        //console.log(allServices);
        return allServices.services;
    } catch (error) {
        console.error("Error fetching available room types:", error);
    }
};

export const getServiceData = async (id) => {
    try {
        const serviceData = await directus2.query(`
            query {
                services (filter: {
                    _or: [
                        {
                            slug: { _eq: "${id}" }
                        },
                        {
                            id: { _eq: "${id}" }
                        }
                    ]
                }, limit: 1, sort: ["sort", "id"] ) {
                    id, 
                    name,
                    slug,
                    image {
                        id,
                        filename_download
                    }, 
                    content,
                    features {
                        room_features_id {
                            name,
                            icon {
                                id,
                                filename_download
                            }
                        }
                    }
                }
            }
        `);
        //console.log(serviceData);
        return serviceData.services[0];
    } catch (error) {
        console.log(error);
    }
};