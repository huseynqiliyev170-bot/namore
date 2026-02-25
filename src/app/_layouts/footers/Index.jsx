"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

import { useContext } from 'react';
import { BasicContext } from "@context/basicContext";

import FooterSubscribeForm from "@/src/app/_components/forms/SubscribeForm";
import { getDirectusImageURL } from "@library/directus-image";

const DefaultFooter = ( { data } ) => {
    const asPath = usePathname();

    const isPathActive = (path) => {
        return (asPath.indexOf(path) !== -1) && asPath === path;
    };

    const { strings, settings } = useContext(BasicContext);

  return (
    <>
        {/* footer */}
        <footer>
            <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "85%", "top": "-15%", "left": "-40%", "transform": "rotate(-50deg)"}} alt="shape" />
            <div className="mil-footer-content mil-fade-up">
                <div className="container">
                    <div className="row justify-content-between mil-p-100-40">
                        <div className="col-md-4 col-lg-4 mil-mb-60">
                            <Link href={data.logo_link ? data.logo_link : '/'} className="mil-logo mil-mb-40">
                                {data.logo_image &&
                                <img src={getDirectusImageURL(data.logo_image)} alt={data.logo_title} />
                                }
                            </Link>

                            <p className="mil-mb-20">{strings.subscribeOurNewsletter}:</p>

                            <FooterSubscribeForm />

                        </div>
                        <div className="col-md-7 col-lg-6">
                            <div className="row justify-content-end">
                                <div className="col-md-6 col-lg-7 mil-mb-60">
                                    {data.primary_menu &&
                                    <nav className="mil-footer-menu">
                                        <ul>
                                            {data.primary_menu.items.map((item, key) => (
                                            <li className={isPathActive(item.link) ? "mil-active" : ""} key={`footer-menu-item-${key}`}>
                                                <Link href={item.link} target={item.new_window ? "_blank" : "_self"} download={item.download ? true : false}>{item.label}</Link>
                                            </li>
                                            ))}
                                        </ul>
                                    </nav>
                                    }

                                </div>
                                <div className="col-md-6 col-lg-5 mil-mb-60">
                                    {data.secondary_menu &&
                                    <ul className="mil-menu-list">
                                        {data.secondary_menu.items.map((item, key) => (
                                        <li key={`footer-links-item-${key}`}>
                                            <Link href={item.link} target={item.new_window ? "_blank" : "_self"} download={item.download ? true : false} className="mil-light-soft">{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mil-divider"></div>

                    <div className="row justify-content-between flex-sm-row-reverse mil-p-100-40">
                        <div className="col-md-7 col-lg-6">

                            <div className="row justify-content-between">

                                <div className="col-md-6 col-lg-5 mil-mb-40">

                                    <h5 className="mil-mb-20">{data.address1_label}</h5>
                                    <p>{data.address1_value}</p>

                                </div>
                                <div className="col-md-6 col-lg-5 mil-mb-40">

                                    <h5 className="mil-mb-20">{data.address2_label}</h5>
                                    <p>{data.address2_value}</p>

                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 col-lg-6 mil-mb-60">

                            <div className="mil-mb-20">
                                <ul className="mil-social-icons">
                                    {data.social.map((item, key) => (
                                    <li key={`footer-social-item-${key}`}>
                                        <a href={item.link} target="_blank" className="social-icon">
                                            <img src={process.env.NEXT_PUBLIC_ASSETS+item.icon.key} alt={item.title} />
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="mil-light-soft" dangerouslySetInnerHTML={{__html : data.copyright}} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* footer end */}
    </>
  );
};
export default DefaultFooter;
