"use client";

import { useCallback } from "react";
import RoomItem from "@components/rooms/RoomItem";
import Pagination from "@components/page/Pagination";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { BasicContext } from "@context/basicContext";

const RoomsGrid = ({
  rooms,
  categories,
  title,
  filter = true,
  total,
  limit,
  page,
  text,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const { strings } = useContext(BasicContext);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("page");

      if (value === "*") {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleFilterKeyChange = (targetFilter, e) => {
    e.preventDefault();
    router.push(pathname + "?" + createQueryString("category", targetFilter));
  };

  const getBookingQuery = (item) => {
    return searchParams.get("checkInDate") && searchParams.get("checkOutDate")
      ? "/booking-confirmation?checkInDate=" +
          searchParams.get("checkInDate") +
          "&checkOutDate=" +
          searchParams.get("checkOutDate") +
          "&roomId=" +
          item.rooms[0].id +
          "&roomTypeId=" +
          item.id
      : false;
  };

  return (
    <section className="besmile-rooms-page">
      <div className="besmile-rooms-page__glow besmile-rooms-page__glow--one" />
      <div className="besmile-rooms-page__glow besmile-rooms-page__glow--two" />
      <div className="besmile-rooms-page__lines" />

      <div className="container">
        <div className="besmile-rooms-page__box">
          <div className="besmile-rooms-page__top">
            {title !== false && (
              <div>
                <span className="besmile-rooms-page__label">Каталог</span>
                <h2>
                  {strings.searchResults}
                  <small>{total}</small>
                </h2>
              </div>
            )}

            {filter === true && (
              <div className="besmile-rooms-page__filter">
                <a
                  href="#."
                  data-filter="*"
                  className={!category ? "is-active" : ""}
                  onClick={(e) => handleFilterKeyChange("*", e)}
                >
                  {strings.all}
                </a>

                {categories.map((item, key) => (
                  <a
                    href="#."
                    data-filter={item.slug}
                    className={category === item.slug ? "is-active" : ""}
                    onClick={(e) => handleFilterKeyChange(item.slug, e)}
                    key={`rooms-filter-item-${key}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="besmile-rooms-page__grid">
            {rooms.map((item, key) => (
              <div className="besmile-rooms-page__col" key={`rooms-grid-item-${key}`}>
                <RoomItem
                  item={item}
                  index={key}
                  bookQ={item.rooms.length > 0 ? getBookingQuery(item) : false}
                />
              </div>
            ))}
          </div>

          {(text || total > limit) && (
            <div className="besmile-rooms-page__bottom">
              {text && <p>{text}</p>}

              <div className="besmile-rooms-page__pagination">
                <Pagination total={total} limit={limit} currentPage={page} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RoomsGrid;