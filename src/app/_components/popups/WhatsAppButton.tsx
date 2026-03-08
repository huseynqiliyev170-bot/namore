
"use client";

export default function WhatsAppButton() {
  const phone = "9940704210204"; // твой номер без +
  const url = `https://wa.me/${phone}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed bottom-6 right-6 z-50   
      w-14 h-14
      flex items-center justify-center
      rounded-full
      bg-[#14B8A6]
      hover:bg-[#0EA5A5]
      text-white
      shadow-xl
      transition
      hover:scale-105
      active:scale-95
      "
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
        <path d="M16 .4C7.2.4 0 7.6 0 16.4c0 2.8.7 5.5 2 7.9L.1 32l7.8-2A16 16 0 0016 32c8.8 0 16-7.2 16-16S24.8.4 16 .4zm0 29.2c-2.2 0-4.4-.6-6.3-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A13.2 13.2 0 012.8 16c0-7.3 5.9-13.2 13.2-13.2S29.2 8.7 29.2 16 23.3 29.6 16 29.6zm7.2-9.8c-.4-.2-2.3-1.1-2.7-1.2-.3-.1-.6-.2-.8.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.6s-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.7c.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.2.8.9.3 1.7.2 2.3.2.7-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5z"/>
      </svg>
    </a>
  );
}