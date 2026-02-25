'use client';

import { useContext } from 'react';
import { BasicContext } from "@context/basicContext";

const FooterSubscribeForm = ( { layout = "footer" } ) => {
    const { strings } = useContext(BasicContext);

    return (
      <>
        <form className={layout == "section" ? "mil-subscribe-form mil-fade-up" : "mil-subscribe-form"} style={layout == "section" ? {"margin": "0 auto"} : {}} action={ process.env.NEXT_PUBLIC_MAILCHIMP_ACTION_URL }>
            <input type="email" name="EMAIL" placeholder={strings.enterOurEmail} required />
            <input type="hidden" name={ process.env.NEXT_PUBLIC_MAILCHIMP_PUBLIC_KEY } />
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </button>
        </form>
      </>
    );
  };
  export default FooterSubscribeForm;