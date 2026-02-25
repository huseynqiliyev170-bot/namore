"use client";

import { useCallback } from "react";
import RoomItem from "@components/rooms/RoomItem";
import Pagination from "@components/page/Pagination";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import { BasicContext } from "@context/basicContext";

const RoomsGrid = ({ rooms, categories, title, filter = true, total, limit, page, text }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const { strings } = useContext(BasicContext);

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete('page');

            if ( value === '*' ) {
                params.delete(name);
            } else {
                params.set(name, value);
            }

            return params.toString()
        },
        [searchParams]
    );

    const handleFilterKeyChange = (targetFilter, e) => {
        e.preventDefault();
        router.push(pathname + '?' + createQueryString( 'category', targetFilter ));

        const filterLinks = document.querySelectorAll(".mil-filter a");
        filterLinks.forEach((filter) => {
            const filterValue = filter.getAttribute("data-filter");
            if (filterValue == targetFilter) {
                filter.classList.add("mil-active");
            } else {
                filter.classList.remove("mil-active");
            }
        });
    };

    const getBookingQuery = (item) => {
        return searchParams.get('checkInDate') && searchParams.get('checkOutDate') ? (
             '/booking-confirmation?checkInDate=' + searchParams.get('checkInDate') + '&checkOutDate=' + searchParams.get('checkOutDate') + '&roomId=' + item.rooms[0].id + '&roomTypeId=' + item.id
        ) : ( false )
    }

    return (
      <>
        {/* rooms */}
        <div className="mil-rooms mil-p-100-100">
            <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "110%", "bottom": "15%", "left": "-30%", "opacity": ".2"}} alt="shape" />
            <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "85%", "bottom": "-20%", "right": "-25%", "transform": "rotate(-30deg) scaleX(-1)"}} alt="shape" />
            
            <div className="container">

                <div className="row allign-items-center mil-mb-100">
                    {title !== false &&
                    <div className="col-xl-4">
                        <h2 className="mil-row-title mil-fade-up">{strings.searchResults} <span className="mil-badge">{total}</span></h2>
                    </div>
                    }
                    {filter === true &&
                    <div className="col-xl-8">

                        <div className="mil-desctop-right mil-fade-up">
                            <div className="mil-filter">
                                <a href="#." data-filter={`*`} className={!category ? "mil-active" : ""} onClick={ (e) => handleFilterKeyChange("*", e)}>{strings.all}</a>
                                {categories.map((item, key) => (
                                <a href="#." data-filter={`${item.slug}`} className={category == item.slug ? "mil-active": ""} onClick={(e) => handleFilterKeyChange(item.slug, e)} key={`rooms-filter-item-${key}`}>{item.name}</a>
                                ))}
                            </div>
                        </div>

                    </div>
                    }
                </div>

                <div className="row mil-mb-40">
                    {rooms.map((item, key) => (
                    <div className="col-md-6 col-xl-4" key={`rooms-grid-item-${key}`}>

                        <RoomItem item={item} index={key} bookQ={item.rooms.length > 0 ? getBookingQuery(item) : false} />

                    </div>
                    ))}
                </div>

                <div className="row justify-content-between">
                    <div className="col-lg-7">
                        {text &&
                        <p className="mil-fade-up">{text}</p>
                        }
                    </div>
                    <div className="col-lg-5">
                        <div className="mil-desctop-right mil-fade-up">
                            <Pagination total={total} limit={limit} currentPage={page} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* rooms end */}
      </>
    );
};
export default RoomsGrid;
  