"use client";

import { useState } from "react";

export default function ContactFloatButton() {
    const [open, setOpen] = useState(false);

    const whatsappUrl = "https://wa.me/79787668130";
    const telegramUrl = "https://t.me/+79787668130";

    return (
        <>
            <div className="contact-float">
                <div className={`contact-float__menu ${open ? "is-open" : ""}`}>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Написать в WhatsApp"
                        className="contact-float__item"
                    >
                        <span className="contact-float__label">WhatsApp</span>
                        <span className="contact-float__icon contact-float__icon--wa">
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
                        className="contact-float__item"
                    >
                        <span className="contact-float__label">Telegram</span>
                        <span className="contact-float__icon contact-float__icon--tg">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M9.04 15.47 8.9 19.4c.52 0 .75-.22 1.03-.49l1.98-1.89 4.1 3c.75.42 1.28.2 1.47-.7l2.66-12.5c.24-1.1-.4-1.53-1.13-1.26L3.3 11.6c-1.07.42-1.05 1.02-.18 1.29l4.02 1.25 9.34-5.9c.44-.27.84-.12.5.18l-7.94 7.05z" />
                            </svg>
                        </span>
                    </a>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Открыть контакты"
                    className={`contact-float__toggle ${open ? "is-open" : ""}`}
                >
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
  19.79 19.79 0 0 1-8.63-3.07 
  19.5 19.5 0 0 1-6-6 
  19.79 19.79 0 0 1-3.07-8.63 
  A2 2 0 0 1 4.11 2h3 
  a2 2 0 0 1 2 1.72 
  c.12.9.33 1.78.63 2.62 
  a2 2 0 0 1-.45 2.11L8.09 9.91 
  a16 16 0 0 0 6 6 
  l1.46-1.46 
  a2 2 0 0 1 2.11-.45 
  c.84.3 1.72.51 2.62.63 
  A2 2 0 0 1 22 16.92z"/>
                    </svg>
                </button>
            </div>

            <style jsx>{`
        .contact-float {
          position: fixed;
          right: 16px;
          bottom: calc(16px + env(safe-area-inset-bottom, 0px));
          z-index: 999999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .contact-float__menu {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          opacity: 0;
          transform: translateY(16px) scale(0.96);
          transform-origin: bottom right;
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .contact-float__menu.is-open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .contact-float__item {
          min-width: 172px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 12px 10px 16px;
          border-radius: 999px;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
          color: #334155;
        }

        .contact-float__label {
          font-size: 14px;
          font-weight: 700;
          line-height: 1;
          white-space: nowrap;
        }

        .contact-float__icon {
          width: 42px;
          height: 42px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }

        .contact-float__icon--wa {
          background: #25d366;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.35);
        }

        .contact-float__icon--tg {
          background: #229ed9;
          box-shadow: 0 8px 20px rgba(34, 158, 217, 0.35);
        }

        .contact-float__toggle {
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          background: linear-gradient(135deg, #14b8a6, #0ea5a5);
          box-shadow: 0 12px 35px rgba(20, 184, 166, 0.3);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .contact-float__toggle.is-open {
          transform: rotate(45deg);
          box-shadow: 0 14px 40px rgba(20, 184, 166, 0.45);
        }

      @media (max-width: 768px) {
  .contact-float {
    right: 12px;
    bottom: 20px;
    gap: 8px;
  }

          .contact-float__item {
            min-width: 148px;
            padding: 8px 8px 8px 12px;
          }

          .contact-float__label {
            font-size: 13px;
          }

          .contact-float__icon {
            width: 38px;
            height: 38px;
          }

          .contact-float__toggle {
            width: 54px;
            height: 54px;
          }
        }

        @media (max-width: 480px) {
          .contact-float {
            right: 10px;
            bottom: calc(10px + env(safe-area-inset-bottom, 0px));
          }

          .contact-float__item {
            min-width: auto;
            padding: 8px;
            gap: 8px;
          }

          .contact-float__label {
            display: none;
          }

          .contact-float__icon {
            width: 40px;
            height: 40px;
          }

          .contact-float__toggle {
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
        </>
    );
}