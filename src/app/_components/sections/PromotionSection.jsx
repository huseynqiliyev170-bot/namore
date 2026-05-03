const PromotionSection = () => {
  return (
    <section className="mil-promo-section">
      <div className="container">
        <div className="mil-promo-card">
          <div className="mil-promo-card__ambient" />
          <div className="mil-promo-card__grain" />

          <div className="mil-promo-card__content">
            <div className="mil-promo-card__main">
              <div className="mil-promo-card__eyebrow">
                <span />
                Акция месяца
              </div>

              <h2>
                Отдых с трёхразовым питанием{" "}
                <br />
                по специальной цене
              </h2>

              <p>
                С 01.05.2026 по 31.05.2026 успейте забронировать номер
                с трёхразовым питанием — всего{" "}
                <strong>2 850 ₽ за одного гостя</strong>.
              </p>

              <div className="mil-promo-card__bottom">
                <div className="mil-promo-card__info">
                  <span>Период акции</span>
                  <p>01.05 — 31.05.2026</p>
                </div>

                <div className="mil-promo-card__info">
                  <span>Стоимость</span>
                  <p>2 850 ₽ / гость</p>
                </div>

                <a href="/contact" className="mil-promo-card__button">
                  Забронировать
                  <i>→</i>
                </a>
              </div>
            </div>

            <div className="mil-promo-card__badge" aria-hidden="true">
              <span>от</span>
              <strong>2 850 ₽</strong>
              <small>за гостя</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;