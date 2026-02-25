"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import { getDirectusImageURL } from "@library/directus-image";

const RoomItemSlider = ({ images }) => {
  return (
    <>
        <Swiper
            {...SliderProps.milCardSlider}
            className="swiper-container mil-card-slider"
        >
            {images && (
                <>
                    {images.map((item, key) => (
                    <SwiperSlide className="swiper-slide" key={`room-item-slider-item-${key}`}>
                        <div className="mil-card-cover">
                            <Image src={getDirectusImageURL(item.image)} fill sizes="(max-width: 768px) 100vw, 25vw" alt={item.image.title} data-swiper-parallax="-100" data-swiper-parallax-scale="1.1" />
                        </div>
                    </SwiperSlide>
                    ))}
                </>
            )}
            <div className="mil-card-nav">
                <div className="mil-slider-btn mil-card-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
                <div className="mil-slider-btn mil-card-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
            <div className="mil-card-pagination"></div>
        </Swiper>
    </>
  );
};
export default RoomItemSlider;
