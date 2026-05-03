import Image from "next/image";
import { getDirectusImageURL } from "@library/directus-image";
import BookingSearchForm from "@components/forms/BookingSearchForm";

const HeroOne = ({
  image = false,
  title,
  subtitle,
  imgLayout = 2,
  info_text,
}) => {
  return (
    <section className="mil-lux-hero">
      <div className={`mil-lux-hero__media mil-banner-img-${imgLayout}`}>
        {image && (
          <Image
            src={getDirectusImageURL(image)}
            alt={image?.title || "Boutique seaside hotel"}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        )}

        {!image && <div className="mil-lux-hero__fallback-bg" />}

        <div className="mil-lux-hero__overlay" />
      </div>

      <div className="mil-lux-hero__grain" />
      <div className="mil-lux-hero__line mil-lux-hero__line--left" />
      <div className="mil-lux-hero__line mil-lux-hero__line--right" />

      <div className="mil-lux-hero__orb mil-lux-hero__orb--gold" />
      <div className="mil-lux-hero__orb mil-lux-hero__orb--sea" />
      <div className="mil-lux-hero__orb mil-lux-hero__orb--cream" />

      <div className="container">
        <div className="mil-lux-hero__shell">
          <div className="mil-lux-hero__content">
            <div className="mil-lux-hero__copy">
              {subtitle && (
                <div className="mil-lux-hero__eyebrow">
                  <span />
                  <div dangerouslySetInnerHTML={{ __html: subtitle }} />
                </div>
              )}

              {title && (
                <h1
                  className="mil-lux-hero__title"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}

              <div className="mil-lux-hero__description">
                {info_text ? (
                  <div dangerouslySetInnerHTML={{ __html: info_text }} />
                ) : (
                  <p>
                    Тихий отдых у моря, продуманный сервис и атмосфера частного
                    бутик-отеля для тех, кто выбирает спокойствие, эстетику и
                    комфорт.
                  </p>
                )}
              </div>

              <div className="mil-lux-hero__actions">
                <a href="#booking" className="mil-lux-hero__primary">
                  Забронировать
                  <i>→</i>
                </a>

                <a href="/rooms" className="mil-lux-hero__secondary">
                  Смотреть номера
                </a>
              </div>
            </div>

            <aside className="mil-lux-hero__card" aria-label="Hotel highlights">
              <div className="mil-lux-hero__card-top">
                <span>РЯДОМ С МОРЕМ</span>
                <strong>Премиальный отдых</strong>
              </div>

              <div className="mil-lux-hero__card-divider" />

              <div className="mil-lux-hero__facts">
                <div>
                  <span>Море</span>
                  <p>У моря</p>
                </div>
                <div>
                  <span>ТИШИНА</span>
                  <p>Тихая атмосфера</p>
                </div>
                <div>
                  <span>СЕМЬЯ</span>
                  <p>Для отдыха с близкими</p>
                </div>
              </div>
            </aside>
          </div>

          <div id="booking" className="mil-lux-hero__booking">
            <BookingSearchForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOne;