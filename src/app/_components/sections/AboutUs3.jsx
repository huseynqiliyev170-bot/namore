import Image from 'next/image';
import { getDirectusImageURL } from "@library/directus-image";

const AboutUs3Section = ( { subtitle, title, text, text2, author_image, author_name, author_role, author_signature } ) => {
  return (
    <>
        {/* about 3 */}
        <div className="mil-content-pad mil-p-100-60">
          <div className="container">
              <div className="row justify-content-between">
                  <div className="col-xl-12">
                      <div className="mil-suptitle mil-mb-20 mil-fade-up">{subtitle}</div>
                      <h2 className="mil-mb-60-adapt mil-fade-up">{title}</h2>
                  </div>
                  <div className="col-xl-6">
                    <div className="mil-text mil-fade-up mil-mb-20" dangerouslySetInnerHTML={{__html : text}} />
                  </div>
                  <div className="col-xl-5">
                      <div className="mil-text mil-fade-up mil-mb-40" dangerouslySetInnerHTML={{__html : text2}} />

                     
                  </div>
              </div>
          </div>
        </div>
        {/* about 3 end */}
    </>
  );
};

export default AboutUs3Section;