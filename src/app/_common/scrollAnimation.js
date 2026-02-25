import Sticky from "sticky-js";

export const ScrollAnimation = () => {
    /* -------------------------------------------
    scroll animation
    ------------------------------------------- */
    function addRemoveClass() {
        const fadeUp = document.querySelectorAll('.mil-fade-up');
        fadeUp.forEach(function (item) {
            var bottom_of_object = item.getBoundingClientRect().top;
            var bottom_of_window = window.innerHeight;

            var isDesktop = window.innerWidth > 768;

            if ((isDesktop && bottom_of_window > bottom_of_object) || (!isDesktop)) {
                item.classList.add('mil-active');
            } else {
                item.classList.remove('mil-active');
            }
        });
    }

    window.addEventListener("scroll", function () {
        addRemoveClass();
        progressIndicator();
    });

    addRemoveClass();

    /* -------------------------------------------
    top panel scroll animation
    ------------------------------------------- */
    window.addEventListener("scroll", function () {
        const topPanel = document.querySelector('.mil-top-panel');
        let scroll = document.scrollingElement.scrollTop;
        let isDesktop = window.innerWidth > 768;

        if ((isDesktop && scroll >= 60) || (!isDesktop)) {
            topPanel.classList.add("mil-active");
        } else {
            topPanel.classList.remove("mil-active");
        }
    });

    /* -------------------------------------------
    progress bar animation
    ------------------------------------------- */
    function progressIndicator() {
        var winScroll = window.scrollY;
        var height = document.body.clientHeight - window.innerHeight;
        var scrolled = (winScroll / height) * 100;
        const progressBar = document.querySelector('.mil-progressbar');
        console.log(height);
        progressBar.style.height = scrolled+'%';
    }

    /* -------------------------------------------
    counters animation
    ------------------------------------------- */
    const animatedCounters = document.querySelectorAll(".mil-counter-number h2");

    if ( animatedCounters !== undefined ) {
        window.addEventListener("scroll", (e) => {
            animatedCounters.forEach((element) => {
                if ( element.innerText == 0 ) {
                    let bottom_of_object = element.getBoundingClientRect().top + window.scrollY - 140;
                    let bottom_of_window = window.scrollY + window.innerHeight/2;

                    if (bottom_of_window > bottom_of_object) {
                        var countTo = element.getAttribute('data-number');
                        numberAnimate(function(newValue) {
                            element.innerText = Math.floor(newValue);
                        }, 0, countTo, 3000, x => x);
                    }
                }
            });
        });
    }

    /* -------------------------------------------
    sticky animation
    ------------------------------------------- */
    const sticky = new Sticky('.mil-sticky');
    if ( window.innerWidth < 992 ) {
        sticky.destroy();
    }
}

const numberAnimate = (render, from, to, duration, timeFx) => {
    let startTime = performance.now();
    requestAnimationFrame(function step(time) {
        let pTime = (time - startTime) / duration;
        if (pTime > 1) pTime = 1;
        render(from + (to - from) * timeFx(pTime));
        if (pTime < 1) {
        requestAnimationFrame(step);
        }
    });
}