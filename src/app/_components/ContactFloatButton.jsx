"use client";

import { useState } from "react";

export default function ContactFloatButton() {
  const [open, setOpen] = useState(false);

  const whatsappUrl = "https://wa.me/79787668130";
  const telegramUrl = "https://t.me/+79787668130";
  const maxDesktopUrl = "https://web.max.ru/61596249";
  const maxMobileUrl = "tel:+79787668130";

  const handleMaxClick = (e) => {
    e.preventDefault();

    if (typeof window === "undefined") return;

    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

    const isMobileOrTabletByUA =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(
        ua
      );

    const isSmallScreen = window.innerWidth <= 1024;

    if (isMobileOrTabletByUA || isSmallScreen) {
      window.location.href = maxMobileUrl;
      return;
    }

    window.open(maxDesktopUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className={`contact-float-lux ${open ? "is-open" : ""}`}>
        <div className="contact-float-lux__menu">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="contact-float-lux__item"
          >
            <span className="contact-float-lux__label">
              <small>Написать</small>
              WhatsApp
            </span>

            <span className="contact-float-lux__icon contact-float-lux__icon--wa">
              <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                <path d="M16 .4C7.2.4 0 7.6 0 16.4c0 2.8.7 5.5 2 7.9L.1 32l7.8-2A16 16 0 0016 32c8.8 0 16-7.2 16-16S24.8.4 16 .4zm0 29.2c-2.2 0-4.4-.6-6.3-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A13.2 13.2 0 012.8 16c0-7.3 5.9-13.2 13.2-13.2S29.2 8.7 29.2 16 23.3 29.6 16 29.6zm7.2-9.8c-.4-.2-2.3-1.1-2.7-1.2-.3-.1-.6-.2-.8.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.7c.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.2.8.9.3 1.7.2 2.3.2.7-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5z" />
              </svg>
            </span>
          </a>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в Telegram"
            className="contact-float-lux__item"
          >
            <span className="contact-float-lux__label">
              <small>Открыть чат</small>
              Telegram
            </span>

            <span className="contact-float-lux__icon contact-float-lux__icon--tg">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M9.04 15.47 8.9 19.4c.52 0 .75-.22 1.03-.49l1.98-1.89 4.1 3c.75.42 1.28.2 1.47-.7l2.66-12.5c.24-1.1-.4-1.53-1.13-1.26L3.3 11.6c-1.07.42-1.05 1.02-.18 1.29l4.02 1.25 9.34-5.9c.44-.27.84-.12.5.18l-7.94 7.05z" />
              </svg>
            </span>
          </a>

          <a
            href={maxDesktopUrl}
            onClick={handleMaxClick}
            aria-label="Открыть MAX"
            className="contact-float-lux__item"
          >
            <span className="contact-float-lux__label">
              <small>Связаться</small>
              MAX
            </span>

            <span className="contact-float-lux__icon contact-float-lux__icon--max">
              <svg viewBox="0 0 42 42" width="20" height="20" aria-hidden="true">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21.47 41.88c-4.11 0-6.02-.6-9.34-3-2.1 2.7-8.75 4.81-9.04 1.2 0-2.71-.6-5-1.28-7.5C1 29.5.08 26.07.08 21.1.08 9.23 9.82.3 21.36.3c11.55 0 20.6 9.37 20.6 20.91a20.6 20.6 0 0 1-20.49 20.67Zm.17-31.32c-5.62-.29-10 3.6-10.97 9.7-.8 5.05.62 11.2 1.83 11.52.58.14 2.04-1.04 2.95-1.95a10.4 10.4 0 0 0 5.08 1.81 10.7 10.7 0 0 0 11.19-9.97 10.7 10.7 0 0 0-10.08-11.1Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Закрыть контакты" : "Открыть контакты"}
          className="contact-float-lux__toggle"
        >
          <span className="contact-float-lux__pulse" />

          <svg
            className="contact-float-lux__phone"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
          </svg>

          <svg
            className="contact-float-lux__close"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .contact-float-lux {
          position: fixed;
          right: 22px;
          bottom: calc(22px + env(safe-area-inset-bottom, 0px));
          z-index: 999999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          font-family: inherit;
        }

        .contact-float-lux__menu {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          pointer-events: none;
        }

        .contact-float-lux__item {
          position: relative;
          min-width: 210px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 8px 8px 8px 18px;
          overflow: hidden;

          border-radius: 999px;
          text-decoration: none;

          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.82),
              rgba(248, 246, 241, 0.56)
            );

          border: 1px solid rgba(255, 255, 255, 0.76);

          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);

          box-shadow:
            0 18px 52px rgba(17, 17, 17, 0.12),
            0 8px 24px rgba(201, 174, 123, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.92);

          color: #111;

          opacity: 0;
          transform: translateY(14px) scale(0.94);
          transform-origin: bottom right;

          transition:
            opacity 0.42s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.42s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.42s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.42s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-float-lux__item::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          border: 1px solid rgba(217, 199, 162, 0.12);
        }

        .contact-float-lux__item::after {
          content: "";
          position: absolute;
          top: 0;
          left: -70%;
          width: 52%;
          height: 100%;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.62),
              transparent
            );
          transform: skewX(-18deg);
          transition: left 0.72s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-float-lux.is-open .contact-float-lux__menu {
          pointer-events: auto;
        }

        .contact-float-lux.is-open .contact-float-lux__item {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .contact-float-lux.is-open .contact-float-lux__item:nth-child(1) {
          transition-delay: 0.04s;
        }

        .contact-float-lux.is-open .contact-float-lux__item:nth-child(2) {
          transition-delay: 0.08s;
        }

        .contact-float-lux.is-open .contact-float-lux__item:nth-child(3) {
          transition-delay: 0.12s;
        }

        .contact-float-lux__item:hover {
          transform: translateY(-4px) scale(1.015);
          border-color: rgba(217, 199, 162, 0.28);
          box-shadow:
            0 24px 70px rgba(17, 17, 17, 0.16),
            0 12px 30px rgba(201, 174, 123, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        .contact-float-lux__item:hover::after {
          left: 124%;
        }

        .contact-float-lux__label {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
          color: #111;
          font-size: 13px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }

        .contact-float-lux__label small {
          color: rgba(36, 70, 83, 0.66);
          font-size: 8px;
          font-weight: 950;
          line-height: 1;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .contact-float-lux__icon {
          position: relative;
          z-index: 1;
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f8f6f1;

          background:
            linear-gradient(135deg, #111 0%, #181512 52%, #2a2115 100%);

          box-shadow:
            0 14px 32px rgba(17, 17, 17, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.14);
        }

        .contact-float-lux__icon--wa {
          color: #ffffff;
          background:
            linear-gradient(135deg, #1f8f55 0%, #25d366 100%);
          box-shadow:
            0 14px 32px rgba(37, 211, 102, 0.26),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .contact-float-lux__icon--tg {
          color: #ffffff;
          background:
            linear-gradient(135deg, #176b96 0%, #229ed9 100%);
          box-shadow:
            0 14px 32px rgba(34, 158, 217, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .contact-float-lux__icon--max {
          color: #ffffff;
          background:
            linear-gradient(135deg, #111 0%, #29231b 100%);
          box-shadow:
            0 14px 32px rgba(17, 17, 17, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.16);
        }

        .contact-float-lux__toggle {
          position: relative;
          width: 62px;
          height: 62px;
          border: none;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;

          color: #f8f6f1;

          background:
            radial-gradient(circle at 32% 22%, rgba(255, 255, 255, 0.18), transparent 30%),
            linear-gradient(135deg, #111 0%, #181512 48%, #2a2115 100%);

          border: 1px solid rgba(255, 255, 255, 0.18);

          box-shadow:
            0 22px 58px rgba(17, 17, 17, 0.28),
            0 10px 28px rgba(201, 174, 123, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.16);

          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-float-lux__toggle::before {
          content: "";
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          border: 1px solid rgba(217, 199, 162, 0.16);
        }

        .contact-float-lux__toggle::after {
          content: "";
          position: absolute;
          top: 0;
          left: -80%;
          width: 58%;
          height: 100%;
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
          transform: skewX(-18deg);
          transition: left 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-float-lux__toggle:hover {
          transform: translateY(-4px) scale(1.035);
          box-shadow:
            0 28px 76px rgba(17, 17, 17, 0.34),
            0 14px 36px rgba(201, 174, 123, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .contact-float-lux__toggle:hover::after {
          left: 126%;
        }

        .contact-float-lux.is-open .contact-float-lux__toggle {
          transform: rotate(90deg) scale(1.02);
          background:
            radial-gradient(circle at 32% 22%, rgba(255, 255, 255, 0.18), transparent 30%),
            linear-gradient(135deg, #f8f6f1 0%, #ffffff 48%, #e8dfcf 100%);
          color: #111;
          box-shadow:
            0 28px 76px rgba(17, 17, 17, 0.22),
            0 14px 36px rgba(201, 174, 123, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.98);
        }

        .contact-float-lux__phone,
        .contact-float-lux__close {
          position: absolute;
          z-index: 2;
          transition:
            opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-float-lux__phone {
          opacity: 1;
          transform: rotate(0deg) scale(1);
        }

        .contact-float-lux__close {
          opacity: 0;
          transform: rotate(-90deg) scale(0.7);
        }

        .contact-float-lux.is-open .contact-float-lux__phone {
          opacity: 0;
          transform: rotate(90deg) scale(0.7);
        }

        .contact-float-lux.is-open .contact-float-lux__close {
          opacity: 1;
          transform: rotate(-90deg) scale(1);
        }

        .contact-float-lux__pulse {
          position: absolute;
          inset: -7px;
          border-radius: inherit;
          pointer-events: none;
          border: 1px solid rgba(217, 199, 162, 0.32);
          opacity: 0.72;
          animation: contactLuxPulse 2.6s ease-out infinite;
        }

        .contact-float-lux.is-open .contact-float-lux__pulse {
          display: none;
        }

        @keyframes contactLuxPulse {
          0% {
            transform: scale(0.86);
            opacity: 0.58;
          }

          70% {
            transform: scale(1.32);
            opacity: 0;
          }

          100% {
            transform: scale(1.32);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .contact-float-lux {
            right: 14px;
            bottom: calc(14px + env(safe-area-inset-bottom, 0px));
          }

          .contact-float-lux__item {
            min-width: 184px;
            height: 54px;
          }

          .contact-float-lux__icon {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }

          .contact-float-lux__toggle {
            width: 56px;
            height: 56px;
          }
        }

        @media (max-width: 480px) {
          .contact-float-lux__item {
            min-width: auto;
            width: 54px;
            height: 54px;
            padding: 7px;
            justify-content: center;
          }

          .contact-float-lux__label {
            display: none;
          }

          .contact-float-lux__icon {
            width: 40px;
            height: 40px;
          }

          .contact-float-lux__toggle {
            width: 54px;
            height: 54px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-float-lux *,
          .contact-float-lux *::before,
          .contact-float-lux *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}