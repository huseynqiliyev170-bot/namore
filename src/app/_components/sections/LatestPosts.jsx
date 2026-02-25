import Link from "next/link";
import BlogItem from "@components/blog/BlogItem";

const LatestPostsSection = ( { subtitle, title, posts, text, button_label, button_link } ) => {    
    return (
        <>
            {/* blog */}
            <div className="mil-rooms mil-p-100-100">
                <img src="/img/shapes/4.png" className="mil-shape" style={{"width": "85%", "top": "-20%", "right": "-30%", "transform": "rotate(-30deg) scaleX(-1)"}} alt="shape" />
                
                <div className="container">
                    <div className="mil-text-center">
                        {subtitle &&
                        <div className="mil-suptitle mil-mb-20 mil-fade-up" dangerouslySetInnerHTML={{__html : subtitle}} />
                        }
                        {title &&
                        <h2 className="mil-mb-100 mil-fade-up" dangerouslySetInnerHTML={{__html : title}} />
                        }
                    </div>
                    {posts &&
                    <div className="row mil-mb-40">
                        {posts.map((item, key) => (
                        <div className="col-xl-4" key={`latest-posts-item-${key}`}>
                            <BlogItem item={item} index={key} />
                        </div>
                        ))}
                    </div>
                    }
                    <div className="row justify-content-between">
                        {text &&
                        <div className="col-lg-7">
                            <p className="mil-fade-up" dangerouslySetInnerHTML={{__html : text}} />
                        </div>
                        }
                        {button_label &&
                        <div className="col-lg-5">
                            <div className="mil-desctop-right mil-fade-up">
                                <Link href={button_link} className="mil-button">
                                    <span>{button_label}</span>
                                </Link>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
            {/* blog end */}
        </>
    );
};

export default LatestPostsSection;
