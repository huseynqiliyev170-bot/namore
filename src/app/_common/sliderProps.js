import {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Parallax,
  FreeMode,
} from "swiper/modules";

const customModules = [
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
  Parallax,
  FreeMode,
]

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

export const SliderProps = {
  milCardSlider: {
    modules: customModules,
    slidesPerView: 1,
    spaceBetween: 0,
    parallax: true,
    effect: 'fade',
    speed: 600,
    pagination: {
        el: '.mil-card-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.mil-card-prev',
        nextEl: '.mil-card-next',
    },
  },
  milReviewsSlider: {
    modules: customModules,
    pagination: {
        el: '.mil-revi-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            let image;
            if ( document.querySelector('.mil-review-'+index) !== undefined && document.querySelector('.mil-review-'+index) !== null ) {
              image = document.querySelector('.mil-review-'+index).dataset.image;
            }
            return '<span class="' + className + '"><span class="mil-custom-dot mil-slide-' + (index+1) + '" style="background-image: url(' + image + ')"></span></span>';
        },
    },
    speed: 800,
    effect: 'fade',
    parallax: true,
    navigation: {
        nextEl: '.mil-revi-next',
        prevEl: '.mil-revi-prev',
    },
  },
  milRecoSlider: {
    modules: customModules,
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 600,
    navigation: {
        prevEl: '.mil-reco-prev',
        nextEl: '.mil-reco-next',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
    },
  },
  milRoomSlider: {
    modules: customModules,
    slidesPerView: 3,
    spaceBetween: 40,
    parallax: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 800,
    pagination: {
        el: '.mil-room-pagination',
        clickable: true,
        type: 'fraction',
    },
    navigation: {
        prevEl: '.mil-room-prev',
        nextEl: '.mil-room-next',
    },
  },
  milRoomsFsSlider2: {
    modules: customModules,
    parallax: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
        prevEl: '.mil-port-nav .mil-prev',
        nextEl: '.mil-port-nav .mil-next',
    },
    breakpoints: {
        992: {

        },
    },
    mousewheel: {
        sensitivity: 1,
    },
  }
};
