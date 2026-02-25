import Link from "next/link";
import Image from 'next/image';
import { getDirectusImageURL } from "@library/directus-image";

const AboutUs2Section = ( { image, subtitle, title, text, imgLayout = 2, button1_label, button1_link, button2_label, button2_link, paddingTop = 0, paddingBottom = 0 } ) => {
  return (
    <>
        {/* about 2 */}
        <div className={`mil-about mil-p-${paddingTop}-${paddingBottom}`}>
            <div className="container">
                <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                    <div className="col-xl-5 mil-mb-100">

                        <div className="mil-text-frame">
                            <div className="mil-suptitle mil-mb-20 mil-fade-up" dangerouslySetInnerHTML={{__html : subtitle}} />
                            <h2 className="mil-mb-40 mil-fade-up" dangerouslySetInnerHTML={{__html : title}} />
                            <div className="mil-mb-40 mil-fade-up mil-text" dangerouslySetInnerHTML={{__html : text}} />

                            <span className="mil-buttons-frame mil-fade-up">
                                {button1_label &&
                                <Link href={button1_link} className="mil-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <span>{button1_label}</span>
                                </Link>
                                }
                                {button2_label &&
                                <Link href={button2_link} className="mil-link mil-open-book-popup">
                                    <span>{button2_label}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </Link>
                                }
                            </span>
                        </div>

                    </div>
                    <div className="col-xl-6 mil-mb-100">

                        <div className={`mil-illustration-${imgLayout}`}>
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
        {/* about 2 end */}
    </>
  );
};

export default AboutUs2Section;