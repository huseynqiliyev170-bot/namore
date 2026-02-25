import Link from "next/link";
import Image from 'next/image';
import { getDirectusImageURL } from "@library/directus-image";

const ServicesSection = ( { subtitle, title, button_link, button_label, services_count, text, items } ) => {
    return (
        <>
            {/* services */}
            <div className="mil-content-pad mil-p-100-100">
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
                    <div className="row mil-mb-40">
                        {items.slice(0, services_count).map((item, key) => (
                        <div className="col-md-6 col-xl-3" key={`services-item-${key}`}>
                            <Link href={`/services/${item.slug}`} className={(key+1)%2 ? "mil-service-card mil-mb-40-adapt mil-fade-up" : "mil-service-card mil-offset mil-mb-40-adapt mil-fade-up"}>
                                <div className="mil-img-frame">
                                    <img src={getDirectusImageURL(item.image)} alt={item.name} />
                                </div>
                                <div className="mil-description">{item.name}</div>
                            </Link>
                        </div>
                        ))}
                    </div>
                    }
                    <div className="row justify-content-between">
                        <div className="col-lg-7">
                            {text &&
                            <p className="mil-fade-up" dangerouslySetInnerHTML={{__html : text}} />
                            }
                        </div>
                        <div className="col-lg-5">
                            {button_label &&
                            <div className="mil-desctop-right mil-fade-up">
                                <Link href={button_link} className="mil-button">
                                    <span>{button_label}</span>
                                </Link>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* services end */}
        </>
    );
};
export default ServicesSection;