import Image from "next/image";
import { getDirectusImageURL } from "@library/directus-image";
import BookingSearchForm from "@components/forms/BookingSearchForm";

const HeroOne = ({ image = false, title, subtitle, imgLayout = 2, info_text }) => {
  return (
    <>
      <div className="mil-banner">

        {/* background image */}
        <div className={`mil-banner-img-${imgLayout}`}>
          {image && (
            <Image
              src={getDirectusImageURL(image)}
              alt={image.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              
            />
          )}

          <img src="/img/shapes/1.png" alt="object" className="mil-figure mil-1" />
          <img src="/img/shapes/2.png" alt="object" className="mil-figure mil-2" />
          <img src="/img/shapes/3.png" alt="object" className="mil-figure mil-3" />
        </div>

        {/* shapes */}
        <img src="/img/shapes/4.png" className="mil-shape" style={{ width: "70%", top: "0", right: "-12%", transform: "rotate(180deg)" }} alt="shape" />
        <img src="/img/shapes/4.png" className="mil-shape" style={{ width: "80%", bottom: "-12%", right: "-22%", transform: "rotate(0deg) scaleX(-1)" }} alt="shape" />
        <img src="/img/shapes/4.png" className="mil-shape" style={{ width: "110%", top: "-5%", left: "-30%", opacity: ".2" }} alt="shape" />

        {/* content */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-10">

              <div className="mil-banner-content-frame">
                <div className="mil-banner-content">

                  <div className="mil-suptitle mil-mb-40" dangerouslySetInnerHTML={{ __html: subtitle }} />

                  <h1 className="mil-mb-40" dangerouslySetInnerHTML={{ __html: title }} />

                  <div className="mil-search-panel mil-mb-20">
                    <BookingSearchForm />
                  </div>

                  {info_text && (
                    <p>
                      <span className="mil-accent-2">*</span>
                      {info_text}
                    </p>
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default HeroOne;