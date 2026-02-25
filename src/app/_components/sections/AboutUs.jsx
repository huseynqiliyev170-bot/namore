import Image from 'next/image';
import { getDirectusImageURL } from "@library/directus-image";

const AboutUsSection = ( { subtitle, title, items, image1, image2, image3, image4 } ) => {
  return (
    <>
        {/* about */}
        <div className="mil-about mil-p-100-0">
            <img src="/img/shapes/4.png" className="mil-shape" style={{"width": "180%", "bottom": "-100%", "left": "-20%", "opacity": ".2"}} alt="shape" />
            
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-5 mil-mb-100">

                        <div className="mil-text-frame">
                            {subtitle &&
                            <div className="mil-suptitle mil-mb-20 mil-fade-up" dangerouslySetInnerHTML={{__html : subtitle}} />
                            }
                            {title &&
                            <h2 className="mil-mb-60 mil-fade-up" dangerouslySetInnerHTML={{__html : title}} />
                            }
                            {items &&
                            <ul className="mil-about-list">
                                {items.map((item, key) => (
                                <li className="mil-fade-up" key={`about-us-item-${key}`}>
                                    <div className="mil-item-head">
                                        <span>{item.num}</span>
                                        <h4>{item.label}</h4>
                                    </div>
                                    <p dangerouslySetInnerHTML={{__html : item.text}} />
                                </li>
                                ))}
                            </ul>
                            }
                        </div>

                    </div>
                    <div className="col-xl-5 mil-mb-100">

                        <div className="mil-illustration-1">
                            <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" alt="shape" />
                            
                            {image1 &&
                            <div className="mil-circle mil-1 mil-fade-up">
                                <img src={getDirectusImageURL(image1)} alt={image1.title} />
                            </div>
                            }
                            {image2 &&
                            <div className="mil-circle mil-2 mil-fade-up">
                                <img src={getDirectusImageURL(image2)} alt={image2.title} />
                            </div>
                            }
                            {image3 &&
                            <div className="mil-circle mil-3 mil-fade-up">
                                <img src={getDirectusImageURL(image3)} alt={image3.title} />
                            </div>
                            }
                            {image4 &&
                            <div className="mil-circle mil-4 mil-fade-up">
                                <img src={getDirectusImageURL(image4)} alt={image4.title} />
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
        {/* about end */}
    </>
  );
};

export default AboutUsSection;