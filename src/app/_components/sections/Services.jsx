import Link from "next/link";
import { getDirectusImageURL } from "@library/directus-image";

const ServicesSection = ({
  subtitle,
  title,
  button_link,
  button_label,
  services_count,
  text,
  items,
}) => {
  return (
    <section className="besmile-services-lux">
      <div className="besmile-services-lux__ambient besmile-services-lux__ambient--one" />
      <div className="besmile-services-lux__ambient besmile-services-lux__ambient--two" />
      <div className="besmile-services-lux__lines" />

      <div className="container">
        <div className="besmile-services-lux__box">
          <div className="besmile-services-lux__head">
            {subtitle && (
              <div className="besmile-services-lux__eyebrow mil-fade-up">
                <span />
                {subtitle}
                <span />
              </div>
            )}

            {title && (
              <h2
                className="besmile-services-lux__title mil-fade-up"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </div>

          {items && (
            <div className="besmile-services-lux__grid">
              {items.slice(0, services_count).map((item, key) => (
                <Link
                  href={`/services/${item.slug}`}
                  className={`besmile-service-card besmile-service-card--${key + 1} mil-fade-up`}
                  key={`services-item-${key}`}
                >
                  <div className="besmile-service-card__media">
                    <img src={getDirectusImageURL(item.image)} alt={item.name} />
                    <div className="besmile-service-card__shade" />
                  </div>

                  <div className="besmile-service-card__content">
                    <span className="besmile-service-card__number">
                      {String(key + 1).padStart(2, "0")}
                    </span>

                    <h3>{item.name}</h3>

                    <div className="besmile-service-card__more">
                      Подробнее
                      <i>→</i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {(text || button_label) && (
            <div className="besmile-services-lux__bottom">
              {text && (
                <div
                  className="besmile-services-lux__text mil-fade-up"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}

              {button_label && (
                <Link
                  href={button_link}
                  className="besmile-services-lux__button mil-fade-up"
                >
                  <span>{button_label}</span>
                  <i>→</i>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;