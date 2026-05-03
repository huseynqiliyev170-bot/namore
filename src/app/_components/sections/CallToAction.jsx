import Link from "next/link";

const CallToActionSection = ({
  subtitle,
  title,
  button1_label,
  button1_link,
  button2_label,
  button2_link,
}) => {
  return (
    <section className="besmile-cta-lux mil-fade-up">
      <div className="container">
        <div className="besmile-cta-lux__card">
          <div className="besmile-cta-lux__ambient besmile-cta-lux__ambient--one" />
          <div className="besmile-cta-lux__ambient besmile-cta-lux__ambient--two" />
          <div className="besmile-cta-lux__lines" />

          <div className="besmile-cta-lux__content">
            {subtitle && (
              <div
                className="besmile-cta-lux__eyebrow mil-fade-up"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            {title && (
              <h2
                className="besmile-cta-lux__title mil-fade-up"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            <div className="besmile-cta-lux__actions mil-fade-up">
              {button1_label && (
                <Link href={button1_link} className="besmile-cta-lux__button besmile-cta-lux__button--primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{button1_label}</span>
                </Link>
              )}

              {button2_label && (
                <Link href={button2_link} className="besmile-cta-lux__button besmile-cta-lux__button--secondary">
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

export default CallToActionSection;