import Image from 'next/image';
import { getDirectusImageURL } from "@library/directus-image";
import BookingSearchForm from "@components/forms/BookingSearchForm";

const HeroThree = ( { image, title, subtitle } ) => {
    return (
        <>
            {/* banner */}
            <div className="mil-banner">
                <div className="mil-banner-bg">
                    {image &&
                    <Image src={getDirectusImageURL(image)} alt={image.title} fill sizes="100vw" priority />
                    }
                    <div className="mil-image-gradient"></div>
                </div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-10">

                            <div className="mil-banner-content-frame">
                                <div className="mil-banner-content">
                                    {subtitle &&
                                    <div className="mil-suptitle mil-mb-40" dangerouslySetInnerHTML={{__html : subtitle}} />
                                    }
                                    {title &&
                                    <h1 className="mil-mb-40" dangerouslySetInnerHTML={{__html : title}} />
                                    }
                                    <div className="mil-search-panel mil-mb-20">
                                        <BookingSearchForm />
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
export default HeroThree;