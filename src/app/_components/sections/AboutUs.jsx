import { getDirectusImageURL } from "@library/directus-image";

const AboutUsSection = ({ subtitle, title, items, image1, image2, image3, image4 }) => {
  const mainImage = image2 || image1 || image3 || image4;

  return (
    <section className="besmile-about-clean">
      <div className="besmile-about-clean__glow besmile-about-clean__glow--one" />
      <div className="besmile-about-clean__glow besmile-about-clean__glow--two" />

      <div className="container">
        <div className="besmile-about-clean__card">
          <div className="besmile-about-clean__media mil-fade-up">
            {mainImage && (
              <img
                src={getDirectusImageURL(mainImage)}
                alt={mainImage.title || "About"}
              />
            )}

            <div className="besmile-about-clean__media-label">
              <span>Crimea</span>
              <p>Семейный отдых у моря</p>
            </div>
          </div>

          <div className="besmile-about-clean__content">
            {subtitle && (
              <div
                className="besmile-about-clean__eyebrow mil-fade-up"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            {title && (
              <h2
                className="besmile-about-clean__title mil-fade-up"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            {items && (
              <div className="besmile-about-clean__list">
                {items.map((item, key) => (
                  <div
                    className="besmile-about-clean__item mil-fade-up"
                    key={`about-us-item-${key}`}
                  >
                    <span>{item.num || String(key + 1).padStart(2, "0")}</span>

                    <div>
                      <h3>{item.label}</h3>
                      <p dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;