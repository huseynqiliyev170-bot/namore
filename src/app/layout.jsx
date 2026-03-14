import { Outfit } from 'next/font/google'
import ContactFloatButton from "./_components/ContactFloatButton";

export const dynamic = 'force-dynamic';

const primary_font = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
  adjustFontFallback: false,
})

import "./globals.css";

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import '@styles/scss/style.scss';

import { register } from "swiper/element/bundle";
register();

import { getConfigSettings } from "@library/config-apis";

export async function generateMetadata() {
  const configSettings = await getConfigSettings();

  return {
    title: {
      default: configSettings.siteName,
      template: "%s | " + configSettings.siteName,
    },
    description: configSettings.siteDescription,
  }
}

const Layouts = ({ children }) => {
  return (
    <html lang="en" className={`${primary_font.variable}`}>
      <body>
        <div className="mil-wrapper">
          {children}
          <ContactFloatButton />
        </div>
      </body>
    </html>
  );
};

export default Layouts;