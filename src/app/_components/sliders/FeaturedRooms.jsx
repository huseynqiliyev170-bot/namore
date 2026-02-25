"use client";

import Link from "next/link";
import RoomItem from "@components/rooms/RoomItem";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const RoomsSlider = ( { rooms, subtitle, title, button_label, button_link, text } ) => {
    return (
        <>
            {/* recommendation */}
            <div className="mil-rooms mil-p-100-100">
                <img src="/img/shapes/4.png" className="mil-shape mil-fade-up" style={{"width": "110%", "bottom": "15%", "left": "-30%", "opacity": ".2"}} alt="shape" />

                <div className="container">
                    <div className="row justify-content-between align-items-end mil-mb-100">
                        {(subtitle || title) &&
                        <div className="col-lg-7">
                            {subtitle &&
                            <div className="mil-suptitle mil-fade-up mil-mb-20">{subtitle}</div>
                            }
                            {title &&
                            <h2 className="mil-fade-up">{title}</h2>
                            }
                        </div>
                        }
                        <div className="col-lg-5">
                            <div className="mil-desctop-right mil-fade-up">

                                <div className="mil-slider-nav mil-recommendation-nav mil-fade-up">
                                    <div className="mil-slider-arrow mil-prev mil-reco-prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </div>
                                    <div className="mil-slider-arrow mil-reco-next">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {rooms !== undefined &&
                    <Swiper
                        {...SliderProps.milRecoSlider}
                        className="swiper-container mil-reco-slider mil-mb-40"
                    >
                            {rooms.map((item, key) => (
                            <SwiperSlide className="swiper-slide" key={`rooms-slider-item-${key}`}>

                                <RoomItem item={item} index={key} />    

                            </SwiperSlide>
                            ))}
                    </Swiper>
                    }

                    <div className="row justify-content-between">
                        <div className="col-lg-7">
                            {text &&
                            <p className="mil-fade-up">{text}</p>
                            }
                        </div>
                        <div className="col-lg-5">
                            {button_label &&
                            <div className="mil-desctop-right mil-fade-up">
                                <Link href={button_link} className="mil-button">
                                    <span>{button_label}</span>
                                </Link>
                            </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
            {/* recommendation end */}
        </>
    );
};

export default RoomsSlider;
