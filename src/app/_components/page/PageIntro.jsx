"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { BasicContext } from "@context/basicContext";

const PageIntro = ({ title, short_title }) => {
  const asPath = usePathname();
  const { strings } = useContext(BasicContext);
  
  let clearBreadTitle;

  if ( short_title != undefined ) {
    clearBreadTitle = short_title;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = title.replace(regex, "");
  }

  return (
    
    <>
      {/* banner */}
      <div className="mil-banner-sm">
          <img src="/img/shapes/4.png" className="mil-shape" style={{"width": "70%", "top": "0", "right": "-35%", "transform": "rotate(190deg)"}} alt="shape" />
          <img src="/img/shapes/4.png" className="mil-shape" style={{"width": "70%", "bottom": "-12%", "left": "-30%", "transform": "rotate(40deg)"}} alt="shape" />
          <img src="/img/shapes/4.png" className="mil-shape" style={{"width": "110%", "top": "-5%", "left": "-30%", "opacity": ".3"}} alt="shape" />

          <div className="container">
              <div className="mil-banner-img-4">
                  <img src="/img/shapes/1.png" alt="object" className="mil-figure mil-1" />
                  <img src="/img/shapes/2.png" alt="object" className="mil-figure mil-2" />
                  <img src="/img/shapes/3.png" alt="object" className="mil-figure mil-3" />
              </div>
              <div className="row align-items-center justify-content-center">
                  <div className="col-xl-6">

                      <div className="mil-banner-content-frame">
                          <div className="mil-banner-content mil-text-center">
                              <h1 className="mil-mb-40" dangerouslySetInnerHTML={{__html : title}} />
                              <div className="mil-suptitle mil-breadcrumbs">
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
