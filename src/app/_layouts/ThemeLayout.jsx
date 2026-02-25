import ThemeLayoutAnimation from "@layouts/ThemeLayoutAnimation";
import ThemeContext from "@layouts/ThemeContext";

import Footer from "@layouts/footers/Index";
import Header from "@layouts/headers/Index";
import ScrollProgress from "@layouts/scroll-progress/Index";

const ThemeLayout = ({ children, headerData, footerData, strings, settings }) => {
    return (
        <ThemeLayoutAnimation>
            <ThemeContext stringsData={strings} settingsData={settings} />

            <ScrollProgress />

            {headerData !== "none" &&
            <Header data={headerData} />
            }

            {/* content */}
            <div id="smooth-content" className="mil-content">
                {children}

                {footerData !== "none" &&
                <Footer data={footerData} />
                }
            </div>
            {/* content end */}
        </ThemeLayoutAnimation>
    );
};
export default ThemeLayout;