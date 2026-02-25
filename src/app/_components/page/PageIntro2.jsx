"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { BasicContext } from "@context/basicContext";

const PageIntro = ({ pageTitle, breadTitle }) => {
  const asPath = usePathname();
  const { strings } = useContext(BasicContext);

  let clearBreadTitle;

  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  return (
    
    <>
      {/* banner */}
      <div className="mil-p-100-60">
          <img src="/img/shapes/4.png" className="mil-shape" style={{"width": "70%", "top": "-5%", "right": "-12%", "transform": "rotate(180deg)"}} alt="shape" />

          <div className="container">
              <div className="mil-banner-head">
                  <div className="row align-items-center">
                      <div className="col-lg-6 col-xl-6">
                          <h1 className="mil-h2-lg mil-mb-40" dangerouslySetInnerHTML={{__html : pageTitle}} />
                      </div>
                      <div className="col-lg-6 col-xl-6">
                          <div className="mil-desctop-right mil-right-no-m mil-fade-up mil-mb-40">
                              <div className="mil-suptitle mil-breadcrumbs mil-light">
                                  <ul>
                                    <li><Link href="/">{strings.home}</Link></li>
                                    {asPath.indexOf('/blog/') != -1 && asPath.indexOf('/blog/page/') == -1 &&
                                    <li>
                                      <Link href="/blog">{strings.blog}</Link>
                                    </li>
                                    }
                                    {asPath.indexOf('/rooms/') != -1 &&
                                    <li>
                                      <Link href="/rooms">{strings.rooms}</Link>
                                    </li>
                                    }
                                    {asPath.indexOf('/services/') != -1 &&
                                    <li>
                                      <Link href="/services">{strings.services}</Link>
                                    </li>
                                    }
                                    <li><a dangerouslySetInnerHTML={{__html : clearBreadTitle}} /></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* banner end */}
    </>
  );
};
export default PageIntro;
