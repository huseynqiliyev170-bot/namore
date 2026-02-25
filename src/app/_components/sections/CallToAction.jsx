import Link from "next/link";

const CallToActionSection = ( { subtitle, title, button1_label, button1_link, button2_label, button2_link } ) => {
  return (
    <>
        {/* call to action */}
        <div className="mil-content-pad mil-p-100-100 mil-fade-up">
            <div className="container">
                <div className="mil-text-center">
                    {subtitle &&
                    <div className="mil-suptitle mil-mb-20 mil-fade-up" dangerouslySetInnerHTML={{__html : subtitle}} />
                    }
                    {title &&
                    <h2 className="mil-h2-lg mil-mb-40 mil-fade-up" dangerouslySetInnerHTML={{__html : title}} />
                    }
                    <span className="mil-buttons-frame mil-center mil-fade-up">
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
        </div>
        {/* call to action end */}
    </>
  );
};

export default CallToActionSection;