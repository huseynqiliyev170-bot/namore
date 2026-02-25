import { getDirectusImageURL } from "@library/directus-image";

const HeroTwo = ( { image, image2, title, items } ) => {

    return (
        <>
            {/* banner */}
            <div className="mil-banner">
                <img src="/img/shapes/4.png" className="mil-shape" style={{"width": "110%", "top": "-5%", "left": "-30%", "opacity": ".2"}} alt="shape" />

                <div className="container">

                    <div className="mil-banner-content-frame">
                        <div className="mil-banner-content">

                            <div className="mil-illustration-4">
                                <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" alt="shape" />

                                {image2 &&
                                <div className="mil-main-img mil-fade-up">
                                    <img src={getDirectusImageURL(image2)} alt={image2.title} />
                                </div>
                                }
                            </div>
                            
                            {title &&
                            <div className="row">
                                <div className="col-12">
                                    <div className="mil-banner-head mil-text-center">
                                        <h1 className="mil-h1-lg mil-mb-100" dangerouslySetInnerHTML={{__html : title}} />
                                    </div>
                                </div>
                            </div>
                            }

                            <div className="row justify-content-between flex-sm-row-reverse">
                                <div className="col-xl-6">
                                    {items &&
                                    <ul className="mil-banner-list">
                                        {items.map((item, key) => (
                                        <li className="mil-fade-up" key={`hero2-item-${key}`}>
                                            <img src={getDirectusImageURL(item.image)} alt={item.title} />
                                            <div className="mil-item-text">
                                                <h4>{item.title}</h4>
                                                <p>{item.text}</p>
                                            </div>
                                        </li>
                                        ))}
                                    </ul>
                                    }
                                </div>
                                <div className="col-xl-5">

                                    <div className="mil-illustration-3">
                                        <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" alt="shape" />
                                        
                                        {image &&
                                        <div className="mil-main-img mil-fade-up">
                                            <img src={getDirectusImageURL(image)} alt={image.title} />
                                        </div>
                                        }

                                        <img src="/img/shapes/1.png" alt="object" className="mil-figure mil-1 mil-fade-up" />
                                        <img src="/img/shapes/2.png" alt="object" className="mil-figure mil-2 mil-fade-up" />
                                        <img src="/img/shapes/3.png" alt="object" className="mil-figure mil-3 mil-fade-up" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* banner end */}
        </>
    );
}
export default HeroTwo;