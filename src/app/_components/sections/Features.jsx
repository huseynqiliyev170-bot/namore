import { getDirectusImageURL } from "@library/directus-image";

const FeaturesSection = ({ subtitle, title, items }) => {
  return (
    <section className="besmile-features-lux">
      <div className="besmile-features-lux__ambient besmile-features-lux__ambient--one" />
      <div className="besmile-features-lux__ambient besmile-features-lux__ambient--two" />
      <div className="besmile-features-lux__lines" />

      <div className="container">
        <div className="besmile-features-lux__head">
          {subtitle && (
            <div className="besmile-features-lux__eyebrow mil-fade-up">
              <span />
              {subtitle}
              <span />
            </div>
          )}

          {title && (
            <h2
              className="besmile-features-lux__title mil-fade-up"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
        </div>

        {items && (
          <div className="besmile-features-lux__grid">
            {items.map((item, key) => (
              <div
                className="besmile-feature-card mil-fade-up"
                key={`features-item-${key}`}
              >
                <div className="besmile-feature-card__top">
                  <div className="besmile-feature-card__number">
                    {String(key + 1).padStart(2, "0")}
                  </div>

                  <div className="besmile-feature-card__icon">
                    <img src={getDirectusImageURL(item.icon)} alt={item.title} />
                  </div>
                </div>

                <div className="besmile-feature-card__body">
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;