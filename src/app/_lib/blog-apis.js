import directus2 from "@library/directus-graphql";

export const getAllPostSlugs = async () => {
    try {
        const slugs = await directus2.query(`
            query {
                posts {
                    slug,
                    id
                }
            }
        `);
        //console.log(slugs);
        return slugs.posts;
    } catch (error) {
        console.log(error);
        return []
    }
};

export const getPosts = async ( page, limit ) => {
    try {
        const allPosts = await directus2.query(`
            query ( $page: Int, $limit: Int ) {
                posts ( sort: ["-published_date", "id"], limit: $limit, page: $page ) {
                    id, 
                    name,
                    slug, 
                    image {
                        id,
                        filename_download
                    },
                    published_date,
                    short,
                    author {
                        name,
                        image {
                            id,
                            filename_download
                        }
                    }
                }
            }
        `, {page: page, limit: limit});
        //console.log(JSON.stringify(allServices, null, 4));
        return allPosts.posts;
    } catch (error) {
        console.error("Error fetching available room types:", error);
    }
};

export const getTotalPostsCount = async () => {    
    const totalCount = await directus2.query(`
        query {
            posts_aggregated ( groupBy: ["id"] ) {
                group
                count {
                    id
                }
            }
        }
    `);
    //console.log(totalCount);
    return totalCount.posts_aggregated.length;
};

export const getTotalPostCommentsCount = async (post_id) => {    
    const totalCount = await directus2.query(`
        query {
            post_comments_aggregated (filter: {
                post: {
                    id : { _eq: "${post_id}" }
                }
            } groupBy: ["id"] ) {
                group
                count {
                    id
                }
            }
        }
    `);
    //console.log(totalCount.post_comments_aggregated);
    return totalCount.post_comments_aggregated.length;
};

export const getPopularPosts = async ( limit ) => {
    try {
        const popular = await directus2.query(`
            query ( $limit: Int ){
                posts (filter: {
                    featured: { _eq: true }
                }, limit: $limit, sort: ["-published_date", "id"] ) {
                    id, 
                    name,
                    slug, 
                    image {
                        id,
                        filename_download
                    },
                    published_date,
                    short,
                    author {
                        name,
                        image {
                            id,
                            filename_download
                        }
                    }
                }
            }
        `, {limit: limit});
        //console.log(popular);
        return popular.posts;
    } catch (error) {
        console.log(error);
    }
};

export const getRecommendedPosts = async ( limit ) => {
    try {
        const recommended = await directus2.query(`
            query ( $limit: Int ){
                posts (filter: {
                    recommended: { _eq: true }
                }, limit: $limit, sort: ["-published_date", "id"] ) {
                    id, 
                    name,
                    slug, 
                    image {
                        id,
                        filename_download
                    },
                    published_date,
                    short,
                    author {
                        name,
                        image {
                            id,
                            filename_download
                        }
                    }
                }
            }
        `, {limit: limit});
        //console.log(featured);
        return recommended.posts;
    } catch (error) {
        console.log(error);
    }
};

export const getPostData = async (id) => {
    try {
        const postData = await directus2.query(`
            query {
                posts (filter: {
                    _or: [
                        {
                            slug: { _eq: "${id}" }
                        },
                        {
                            id: { _eq: "${id}" }
                        }
                    ]
                }, limit: 1, sort: ["-published_date", "id"] ) {
                    id, 
                    name,
                    slug,
                    image {
                        id,
                        filename_download
                    }, 
                    full_image {
                        id,
                        filename_download
                    },
                    content,
                }
            }
        `);
        //console.log(postData);
        return postData.posts[0];
    } catch (error) {
        console.log(error);
    }
};

export const getPostComments = async (post_id) => {
    try {
        const comments = await directus2.query(`
            query {
                post_comments (filter: {
                    post: {
                        id: { 
                            _eq: "${post_id}" 
                        }
                    },
                    related: { _eq: "post" },
                }, sort: ["-date_created", "id"] ) {
                    ...commentFields,
                    children {
                        ...commentFields,
                        children {
                            ...commentFields,
                            children {
                                ...commentFields,
                            },
                        }
                    },
                }
            }
            
            fragment commentFields on post_comments {
                id,
                name,
                message,
                date_created,
            }
        `);
        //console.log(comments);
        return comments.post_comments;
    } catch (error) {
        console.log(error);
    }
};