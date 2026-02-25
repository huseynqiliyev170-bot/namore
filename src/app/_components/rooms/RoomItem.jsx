"use client";

import Link from "next/link";
import Image from 'next/image';
import RoomItemSlider from "@components/rooms/RoomItemSlider";
import { useContext } from 'react';
import { BasicContext } from "@context/basicContext";

const RoomItem = ({ item, index, bookQ }) => {
  const { strings, settings } = useContext(BasicContext);

  return (
    <>
      <div className="mil-card mil-mb-40-adapt mil-fade-up">
        {item.gallery !== undefined &&
        <RoomItemSlider images={item.gallery} />
        }
        <ul className="mil-parameters">
            <li>
                <div className="mil-icon">
                    <img src="/img/icons/adults.svg" alt="icon" />
                </div>
                <div>{strings.adults}: {item.capacity}</div>
            </li>
            <li>
                <div className="mil-icon">
                    <img src="/img/icons/area.svg" alt="icon" />
                </div>
                <div>{strings.size}: {item.area}{" "}{settings.areaUnits}</div>
            </li>
        </ul>
        <div className="mil-descr">
            <h3 className="mil-mb-20"><Link href={`/rooms/${item.slug}`}>{item.name}</Link></h3>
            {item.short !== undefined &&
            <p className="mil-mb-40" dangerouslySetInnerHTML={{__html : item.short}} />
            }
            <div className="mil-divider"></div>
            <div className="mil-card-bottom">
                <div className="mil-price">
                  {settings.currencyPosition === 'left' &&
                  <span className="mil-symbol">{settings.currencySymbol}</span>
                  }
                  <span className="mil-number">{item.price}</span>
                  {settings.currencyPosition === 'right' &&
                  <span className="mil-symbol">{settings.currencySymbol}</span>
                  }
                  {settings.currencyAafterText}
                </div>
                {item.rooms.length > 0 &&
                <Link href={bookQ ? bookQ : `/rooms/${item.slug}`} className="mil-button mil-icon-button mil-accent-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </Link>
                }
            </div>
        </div>
      </div>
    </>
  );
};
export default RoomItem;
