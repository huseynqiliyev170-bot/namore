"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import BookingSearchForm from "@components/forms/BookingSearchForm";
import { getDirectusImageURL } from "@library/directus-image";

const HeaderModule = ( { data } ) => {
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
        // close mobile menu
        setToggle(false);
    }, [asPath]);

    const menuOpen = () => {
        setToggle(!toggle);
    }

    const bookingOpen = (e) => {
        e.preventDefault();
        setToggleBooking(!toggleBooking);
    }

    return (
        <>
            {/* top panel */}
            {data &&
            <div className="mil-top-panel">
                <div className="container">
                    <div className="mil-top-panel-content">
                        <Link href={data.logo_link ? data.logo_link : '/'} className="mil-logo" title={data.logo_title}>
                            {data.logo_image &&
                            <img src={getDirectusImageURL(data.logo_image)} alt={data.logo_image.title}  />
                            }
                        </Link>
                        <div className={`mil-menu-btn ${toggle ? "mil-active" : ""}`} onClick={() => menuOpen() }>
                            <span></span>
                        </div>
                        <div className={`mil-mobile-menu ${toggle ? "mil-active" : ""}`}>
                            <nav className="mil-menu">
                                <ul>
                                    {data.main_menu.items.map((item, index) => (
                                    <li className={`menu-item ${item.submenu && item.submenu.length > 0 ? "menu-item-has-children" : ""} ${isPathActive(item.link) ? "mil-current" : ""}`} key={`header-menu-item-${index}`}>
                                        <Link href={item.link} target={item.new_window ? "_blank" : "_self"} download={item.download ? true : false} onClick={toggle && item.submenu && item.submenu.length > 0  ? (e) => handleSubMenuClick(index, e) : null}>{item.label}</Link>
                                        {item.submenu && item.submenu.length > 0 && (
                                        <ul className={activeSubMenu === index ? 'sub-menu mil-active' : 'sub-menu'}>
                                            {item.submenu.map((subitem, subIndex) => (
                                            <li key={`header-submenu-item-${subIndex}`} className={isPathActive(subitem.link) ? "menu-item mil-current" : "menu-item"}>
                                                <Link href={subitem.link}>{subitem.label}</Link>
                                            </li>
                                            ))}
                                        </ul>
                                        )}
                                    </li>
                                    ))}
                                </ul>
                            </nav>
                            <a href="#." className="mil-button mil-open-book-popup mil-top-panel-btn" onClick={(e) => bookingOpen(e) }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span>{data.button_label}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            }
            {/* top panel end */}

            {/* book popup */}
            <div className={`mil-book-popup-frame ${toggleBooking ? "mil-active" : ""}`}>
                <div className="mil-book-popup">
                    <div className="mil-popup-head mil-mb-40">
                        <h3 className="mil-h3-lg">Search</h3>
                        <div className="mil-close-button" onClick={(e) => bookingOpen(e) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                    </div>
                    <BookingSearchForm layoutType={'column'} />
                </div>
            </div>
            {/* book popup end */}
        </>
    );
};
export default HeaderModule;