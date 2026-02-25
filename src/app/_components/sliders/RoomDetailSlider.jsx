"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import { getDirectusImageURL } from "@library/directus-image";

const RoomDetailSlider = ( { items, layout = 'default' } ) => {
  return (
    <>
        {/* room slider */}
        {layout == 'wide' ? (
        <div className="mil-slider-frame mil-mb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <Swiper
                            {...SliderProps.milRoomSlider}
                            className="swiper-container mil-room-slider"
                            style={{"overflow": "visible"}}
                        >
                            {items.map((item, key) => (
                            <SwiperSlide className="swiper-slide" key={`room-single-slider-item-${key}`}>
                                <div className="mil-image-frame">
                                    <Image src={getDirectusImageURL(item.image)} fill sizes="(max-width: 768px) 100vw, 100vw" priority alt={item.image.title} data-swiper-parallax="0" data-swiper-parallax-scale="1.2" />
                                </div>
                            </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="mil-room-nav">
                            <div className="mil-slider-btn mil-room-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                            <div className="mil-slider-btn mil-room-next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                        <div className="mil-room-pagination" style={{"bottom": "8px"}}></div>
                    </div>
                </div>
            </div>
        </div>
        ) : (
        <div className="mil-slider-frame mil-frame-2 mil-mb-100">
            <Swiper
                {...SliderProps.milRoomSlider}
                className="swiper-container mil-room-slider"
                style={{"overflow": "hidden"}}
            >
                {items.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`room-single-slider-item-${key}`}>
                    <div className="mil-image-frame">
                        <Image src={getDirectusImageURL(item.image)} fill sizes="(max-width: 768px) 100vw, 75vw" priority alt={item.image.title} data-swiper-parallax="0" data-swiper-parallax-scale="1.2" />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            <div className="mil-room-nav">
                <div className="mil-slider-btn mil-room-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
                <div className="mil-slider-btn mil-room-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
            <div className="mil-room-pagination" style={{"bottom": "8px"}}></div>
        </div>
        )}
        {/* room slider end */}
    </>
  );
};
export default RoomDetailSlider;