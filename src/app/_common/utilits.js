export const AnchorScroll = () => {
    // anchor scroll
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        event.preventDefault();

        var target = document.querySelector(link.getAttribute('href'));
        var offset = 0;

        if ( window.innerWidth < 1200 ) {
          offset = 90;
        }
  
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
      });
    });
};

export const BackToTop = () => {
  /* -------------------------------------------

  back to top

  ------------------------------------------- */
  const btn = document.getElementById('mil-btt');

  if ( btn !== undefined ) {
      btn.addEventListener('click', function (e) {
          e.preventDefault();
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  }
}

export const FaqAccordion = () => {
  const faqItems = document.querySelectorAll(".mil-faq-item");

  faqItems.forEach(function (item) {
      item.addEventListener("click", function () {
          this.classList.toggle("active");
      });
  });
};