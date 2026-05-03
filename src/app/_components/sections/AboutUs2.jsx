import Link from "next/link";
import { getDirectusImageURL } from "@library/directus-image";

const AboutUs2Section = ({
  image,
  subtitle,
  title,
  text,
  button1_label,
  button1_link,
  button2_label,
  button2_link,
  paddingTop = 0,
  paddingBottom = 0,
}) => {
  return (
    <section className={`besmile-about-story-premium besmile-about-story-premium--pt-${paddingTop} besmile-about-story-premium--pb-${paddingBottom}`}>
      <div className="container">
        <div className={`besmile-about-story-premium__card ${!image ? "besmile-about-story-premium__card--no-image" : ""}`}>
          {image && (
            <div className="besmile-about-story-premium__media mil-fade-up">
              <img src={getDirectusImageURL(image)} alt={image.title || "About"} />
            </div>
          )}

          <div className="besmile-about-story-premium__content">
            {subtitle && (
              <div
                className="besmile-about-story-premium__eyebrow mil-fade-up"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            {title && (
              <h2
                className="besmile-about-story-premium__title mil-fade-up"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            {text && (
              <div
                className="besmile-about-story-premium__text mil-fade-up"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}

            <div className="besmile-about-story-premium__actions mil-fade-up">
              {button1_label && (
                <Link href={button1_link} className="besmile-about-story-premium__button besmile-about-story-premium__button--primary">
                  <span>{button1_label}</span>
                  <i>→</i>
                </Link>
              )}

              {button2_label && (
                <Link href={button2_link} className="besmile-about-story-premium__button besmile-about-story-premium__button--secondary">
                  <span>{button2_label}</span>
                  <i>→</i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2Section;