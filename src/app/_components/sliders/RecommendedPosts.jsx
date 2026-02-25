"use client";

import BlogItem from '@components/blog/BlogItem';
import Link from "next/link";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const RecommendedPostsSlider = ( { posts, subtitle, title, text, button_label, button_link } ) => {
    return (
        <>

        {/* recommendation */}
        <div className="mil-rooms mil-p-100-100">
            <div className="container">
                <div className="row justify-content-between align-items-end mil-mb-100">
                    <div className="col-lg-7">
                        {subtitle &&
                        <div className="mil-suptitle mil-fade-up mil-mb-20">{subtitle}</div>
                        }
                        {title &&
                        <h2 className="mil-fade-up">{title}</h2>
                        }
                    </div>
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

                {posts !== undefined &&
                    <Swiper
                        {...SliderProps.milRecoSlider}
                        className="swiper-container mil-reco-slider mil-mb-40"
                    >
                            {posts.map((item, key) => (
                            <SwiperSlide className="swiper-slide" key={`recommended-posts-slider-item-${key}`}>

                                <BlogItem item={item} index={key} />

                            </SwiperSlide>
                            ))}
                    </Swiper>
                }


            </div>
        </div>
        {/* recommendation end */}

        </>
    );
};

export default RecommendedPostsSlider;