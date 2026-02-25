import directus from "@library/directus-rest-api";
import { readItems, readItem, readSingleton, createItem } from "@directus/sdk";

export const getAllPageSlugs = async () => {
    try {
        const slugs = await directus.request(
            readItems("pages", {
                fields: ["slug"],
            } )
        );
        //console.log(slugs);
        return slugs;
    } catch (error) {
        console.log(error);
        return []
    }
};

export const getPage = async (slug) => {
    try {
        const pageData = await directus.request(
            readItem("pages", slug, {
                fields: [
                    "title", 
                    "slug",
                    {
                        blocks: [
                            '*',
                            {
                                item: {
                                    block_hero: ['*.*'],
                                    block_services: ['*.*'],
                                    block_features: [
                                        '*', 
                                        {
                                            items: [
                                                '*',
                                                'icon.*'
                                            ]
                                        }
                                    ],
                                    block_featured_rooms: ["*.*"],
                                    block_call_to_action: ["*.*"],
                                    block_call_to_action: ["*.*"],
                                    block_about_us: ["*.*"],
                                    block_about_us2: ["*.*"],
                                    block_testimonials: [
                                        '*', 
                                        {
                                            items: [
                                                '*',
                                                'image.*'
                                            ]
                                        }
                                    ],
                                    block_latest_posts: ["*.*"],
                                    block_hero2: [
                                        '*',
                                        'image.*',
                                        'image2.*', 
                                        {
                                            items: [
                                                '*',
                                                'image.*'
                                            ]
                                        }
                                    ],
                                    block_hero3: ['*.*'],
                                    block_intro: ['*.*'],
                                    block_counters: ['*.*'],
                                    block_about_us3: ["*.*"],
                                    block_contact_form: ["*.*"],
                                    block_contacts_info: [
                                        '*', 
                                        {
                                            items: [
                                                '*',
                                                'icon.*'
                                            ]
                                        }
                                    ],
                                    block_contact_map: ["*.*"],
                                    block_text: ["*.*"],
                                },
                            },
                        ],
                    },
                ]
            } )
        );
        //console.log(pageData);
        return pageData;
    } catch (error) {
        console.log(error);
    }
};

export const getBlock = async (block_id, block_slug) => {
    try {
        const blockData = await directus.request(
            readItem(block_slug, block_id, {
                fields: ["*.*.*"]
            } )
        );
        //console.log(blockData);
        return blockData;
    } catch (error) {
        console.log(error);
        return false
    }
};

export const getPageServices = async () => {
    try {
        const pageData = await directus.request(
            readSingleton("page_services", {
                fields: [
                    "title",
                    {
                        blocks: [
                            '*',
                            {
                                item: {
                                    block_hero: ['*.*'],
                                    block_services: ['*.*'],
                                    block_features: [
                                        '*', 
                                        {
                                            items: [
                                                '*',
                                                'icon.*'
                                            ]
                                        }
                                    ],
                                    block_featured_rooms: ["*.*"],
                                    block_call_to_action: ["*.*"],
                                    block_call_to_action: ["*.*"],
                                    block_about_us: ["*.*"],
                                    block_about_us2: ["*.*"],
                                    block_testimonials: [
                                        '*', 
                                        {
                                            items: [
                                                '*',
                                                'image.*'
                                            ]
                                        }
                                    ],
                                    block_latest_posts: ["*.*"],
                                    block_hero2: [
                                        '*',
                                        'image.*',
                                        'image2.*', 
                                        {
                                            items: [
                                                '*',
                                                'image.*'
                                            ]
                                        }
                                    ],
                                    block_hero3: ['*.*'],
                                    block_intro: ['*.*'],
                                    block_counters: ['*.*'],
                                    block_about_us3: ["*.*"],
                                    block_contact_form: ["*.*"],
                                    block_contacts_info: [
                                        '*', 
                                        {
                                            items: [
                                                '*',
                                                'icon.*'
                                            ]
                                        }
                                    ],
                                    block_contact_map: ["*.*"],
                                    block_text: ["*.*"],
                                },
                            },
                        ],
                    },
                    "singleServiceCallToAction",
                    "singleServiceFeaturedRooms",
                    "singleServiceFaq",
                ]
            } )
        );
        //console.log(pageData);
        return pageData;
    } catch (error) {
        console.log(error);
    }
};

export const getPageRooms = async () => {
    try {
        const pageData = await directus.request(
            readSingleton("page_rooms", {
                fields: [
                    "title",
                    "intro_title",
                    "singleRoomCallToAction",
                    "singleRoomFeaturedRooms",
                ]
            } )
        );
        //console.log(pageData);
        return pageData;
    } catch (error) {
        console.log(error);
    }
};

export const getPageBlog = async () => {
    try {
        const pageData = await directus.request(
            readSingleton("page_blog", {
                fields: [
                    "title",
                    "intro_title",
                    "short_title",
                    "grid_title",
                    "grid_subtitle",
                    "grid_text",
                    "featuredPosts",
                    "subscribe",
                    "recommendedPosts",
                    "singleRecommendedPosts",
                ]
            } )
        );
        //console.log(pageData);
        return pageData;
    } catch (error) {
        console.log(error);
    }
};

export const getPageBookingConfirm = async () => {
    try {
        const pageData = await directus.request(
            readSingleton("page_booking_confirmation", {
                fields: [
                    "title",
                    "intro_title",
                    "short_title",
                    "form_title",
                    "contacts_info",
                ]
            } )
        );
        //console.log(pageData);
        return pageData;
    } catch (error) {
        console.log(error);
    }
};

export const getPageBookingSuccess = async () => {
    try {
        const pageData = await directus.request(
            readSingleton("page_booking_success", {
                fields: [
                    "title",
                    "intro_title",
                    "short_title",
                    "result_title",
                    "result_text",
                    "button_label",
                    "button_link",
                    "contacts_info",
                ]
            } )
        );
        //console.log(pageData);
        return pageData;
    } catch (error) {
        console.log(error);
    }
};

export const sendFeedback = async (formData) => {
    try {
      const data = await directus.request(
        createItem("feedback", {
          ...formData,
        })
      );
      return {
        status: data,
        error: false
      };
    } catch (error) {
      console.error("Error creating a feedback submission:", error);
      return {
        status: 500,
        error: error
      };
    }
};

export const postComment = async (formData) => {
    try {
      if ( formData.reply_id ) {
        const data = await directus.request(
            createItem("post_comments", {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                post: {
                    id: formData.post_id
                },
                related: "comment",
                parent_key: formData.reply_id,
            })
        );
      } else {
        const data = await directus.request(
            createItem("post_comments", {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                post: {
                    id: formData.post_id
                },
                related: "post",
            })
        );
      }
      return {
        status: data,
        error: false
      };
    } catch (error) {
      console.error("Error creating a feedback submission:", error);
      return {
        status: 500,
        error: error
      };
    }
};