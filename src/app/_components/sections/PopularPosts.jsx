import Link from "next/link";
import BlogItem from "@components/blog/BlogItem";

const PopularPostsSection = ( { posts, subtitle, title, text, button_label, button_link, paddingTop = 100, paddingBottom = 100 } ) => {    
    return (
        <>
            {/* popular */}
            <div className={`mil-content-pad mil-p-${paddingTop}-${paddingBottom}`}>
                <div className="container">
                    {(subtitle || title) &&
                    <div className="mil-text-center">
                        {subtitle &&
                        <div className="mil-suptitle mil-mb-20 mil-fade-up" dangerouslySetInnerHTML={{__html : subtitle}} />
                        }
                        {title &&
                        <h2 className="mil-mb-100 mil-fade-up" dangerouslySetInnerHTML={{__html : title}} />
                        }
                    </div>
                    }

                    {posts &&
                    <div className="row mil-mb-40">
                        {posts.slice(0, 2).map((item, key) => (
                        <div className="col-md-6 col-xl-6" key={`popular-posts-item-${key}`}>

                            <BlogItem item={item} index={key} />

                        </div>
                        ))}
                    </div>
                    }
{/* 
                    <div className="row justify-content-between">
                        <div className="col-lg-7">
                            {text &&
                            <p className="mil-fade-up" dangerouslySetInnerHTML={{__html : text}} />
                            }
                        </div>
                        <div className="col-lg-5">
                            <div className="mil-desctop-right mil-fade-up">
                                {button_label &&
                                <Link href={button_link} className="mil-button">
                                    <span>{button_label}</span>
                                </Link>
                                }
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* popular end */}
        </>
    );
};

export default PopularPostsSection;
