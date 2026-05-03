"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { BasicContext } from "@context/basicContext";

const PageIntro = ({ title, short_title }) => {
  const asPath = usePathname();
  const { strings } = useContext(BasicContext);

  let clearBreadTitle;

  if (short_title !== undefined) {
    clearBreadTitle = short_title;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = title.replace(regex, "");
  }

  return (
    <section className="besmile-rooms-intro">
      <div className="besmile-rooms-intro__glow besmile-rooms-intro__glow--one" />
      <div className="besmile-rooms-intro__glow besmile-rooms-intro__glow--two" />
      <div className="besmile-rooms-intro__lines" />

      <div className="container">
        <div className="besmile-rooms-intro__content">
          <div className="besmile-rooms-intro__eyebrow">
            <span />
            Номера
            <span />
          </div>

          <h1 dangerouslySetInnerHTML={{ __html: title }} />

          <div className="besmile-rooms-intro__breadcrumbs">
            <ul>
              <li>
                <Link href="/">{strings.home}</Link>
              </li>

              {asPath.indexOf("/blog/") !== -1 &&
                asPath.indexOf("/blog/page/") === -1 && (
                  <li>
                    <Link href="/blog">{strings.blog}</Link>
                  </li>
                )}

              {asPath.indexOf("/rooms/") !== -1 && (
                <li>
                  <Link href="/rooms">{strings.rooms}</Link>
                </li>
              )}

              {asPath.indexOf("/services/") !== -1 && (
                <li>
                  <Link href="/services">{strings.services}</Link>
                </li>
              )}

              <li>
                <span dangerouslySetInnerHTML={{ __html: clearBreadTitle }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;