import { getDirectusImageURL } from "@library/directus-image";

const FeaturesSection = ( { subtitle, title, items } ) => {
    return (
        <>
            {/* features */}
            <div className="mil-features mil-p-100-60">
                <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "85%", "top": "-20%", "left": "-30%", "transform": "rotate(35deg)"}} alt="shape" />
                
                <div className="container">
                    <div className="mil-text-center">
                        {subtitle &&
                        <div className="mil-suptitle mil-mb-20 mil-fade-up">{subtitle}</div>
                        }
                        {title &&
                        <h2 className="mil-mb-100 mil-fade-up" dangerouslySetInnerHTML={{__html : title}} />
                        }
                    </div>
                    {items &&
                    <div className="row">
                        {items.map((item, key) => (
                        <div className="col-md-6 col-xl-4" key={`features-item-${key}`}>
                            <div className="mil-iconbox mil-mb-40-adapt mil-fade-up">
                                <div className="mil-bg-icon"></div>
                                <div className="mil-icon">
                                    <img src={getDirectusImageURL(item.icon)} alt={item.title} />
                                </div>
                                <h3 className="mil-mb-20">{item.title}</h3>
                                <p dangerouslySetInnerHTML={{__html : item.text}} />
                            </div>
                        </div>
                        ))}
                    </div>
                    }
                </div>
            </div>
            {/* features end */}
        </>
    );
};
export default FeaturesSection;