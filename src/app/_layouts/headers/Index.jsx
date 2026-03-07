"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import BookingSearchForm from "@components/forms/BookingSearchForm";
import { getDirectusImageURL } from "@library/directus-image";

const HeaderModule = ({ data }) => {
    const [toggle, setToggle] = useState(false);
    const [toggleBooking, setToggleBooking] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const asPath = usePathname();

    const isPathActive = (path) => {
        return (asPath.indexOf(path) !== -1) && asPath === path;
    };

    const handleSubMenuClick = (index, e) => {
        e.preventDefault();
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    useEffect(() => {
        setToggle(false);
    }, [asPath]);

    const menuOpen = () => {
        setToggle(!toggle);
    };

    const bookingOpen = (e) => {
        e.preventDefault();
        setToggleBooking(!toggleBooking);
    };

    return (
        <>
            {data && (
                <div className="mil-top-panel">
                    <div className="container">
                        <div className="mil-top-panel-content">
                            <Link
                                href={data.logo_link ? data.logo_link : "/"}
                                className="mil-logo"
                                title={data.logo_title}
                            >
                                {data.logo_image && (
                                    <img
                                        src={getDirectusImageURL(data.logo_image)}
                                        alt={data.logo_image.title}
                                    />
                                )}
                            </Link>

                            <div
                                className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
                                onClick={menuOpen}
                            >
                                <span></span>
                            </div>

                            <div className={`mil-mobile-menu ${toggle ? "mil-active" : ""}`}>
                                <nav className="mil-menu">
                                    <ul>
                                        {data.main_menu.items.map((item, index) => (
                                            <li
                                                className={`menu-item ${
                                                    item.submenu && item.submenu.length > 0
                                                        ? "menu-item-has-children"
                                                        : ""
                                                } ${isPathActive(item.link) ? "mil-current" : ""}`}
                                                key={`header-menu-item-${index}`}
                                            >
                                                <Link
                                                    href={item.link}
                                                    target={item.new_window ? "_blank" : "_self"}
                                                    download={item.download ? true : false}
                                                    onClick={
                                                        toggle &&
                                                        item.submenu &&
                                                        item.submenu.length > 0
                                                            ? (e) => handleSubMenuClick(index, e)
                                                            : null
                                                    }
                                                >
                                                    {item.label}
                                                </Link>

                                                {item.submenu && item.submenu.length > 0 && (
                                                    <ul
                                                        className={
                                                            activeSubMenu === index
                                                                ? "sub-menu mil-active"
                                                                : "sub-menu"
                                                        }
                                                    >
                                                        {item.submenu.map((subitem, subIndex) => (
                                                            <li
                                                                key={`header-submenu-item-${subIndex}`}
                                                                className={
                                                                    isPathActive(subitem.link)
                                                                        ? "menu-item mil-current"
                                                                        : "menu-item"
                                                                }
                                                            >
                                                                <Link href={subitem.link}>
                                                                    {subitem.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                                <div className="mil-top-panel-info">
                                    <a href="tel:+79780000000" className="mil-info-link">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.2a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                        <span>+7 (978) 766-81-30</span>
                                    </a>

                                    <div className="mil-info-divider"></div>

                                    <div className="mil-info-link mil-info-static">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span>Песчаное, ул.Набережная, 7/49</span>
                                    </div>
                                </div>

                                <a
                                    href="#."
                                    className="mil-button mil-open-book-popup mil-top-panel-btn"
                                    onClick={(e) => bookingOpen(e)}
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
                                        className="feather feather-bookmark"
                                    >
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <span>{data.button_label}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className={`mil-book-popup-frame ${toggleBooking ? "mil-active" : ""}`}>
                <div className="mil-book-popup">
                    <div className="mil-popup-head mil-mb-40">
                        <h3 className="mil-h3-lg">Search</h3>
                        <div className="mil-close-button" onClick={(e) => bookingOpen(e)}>
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
                                className="feather feather-x"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>

                    <BookingSearchForm layoutType={"column"} />
                </div>
            </div>
        </>
    );
};

export default HeaderModule;