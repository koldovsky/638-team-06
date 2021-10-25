(function () {
    const slides = [
        ` <p class="carousel-reviews">"I really like to please myself with good wine with a rich taste.
        Therefore,
        from
        time tj time, I
        order wine directly from the CaliWines winery. I also buy Chardonnay and
        Cabarnet for family
        holidays. We are completely delighted with the amazing taste of these wines,
        which we want
        to
        enjoy
        endlessly"
        </p>`,
        `<p class="carousel-reviews">"We were to hold a responsible event with a buffet table and
        wanted to
        surprise
        our
        guests with some
        local products. I recalled that we have the CaliWines winary in California and
        ordered 10
        bottles of
        Chardonnay. Our guests were delighted and asked for the name of the producer!"
        </p>`,
        `<p class="carousel-reviews">"Our restaurant has been cooperating with this winery for
        over 10 years. We
        order
        the
        whole range of
        wine from them. We are completely satisfied with the quality of the wine
        supplied to us. And
        our
        guests often choose CaliWines from our wine menu."
        </p>`,
    ]

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector(`.carousel .slide`);
        slideContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slide.length -1;
        showCurrentSlide();
    }

    setInterval(nextSlide, 1000);

    document.querySelector(`.carousel .carousel-next`).addEventListener(`click`, nextSlide);
    document.querySelector(`.carousel .carousel-prev`).addEventListener(`click`, prevSlide);

    showCurrentSlide();

})();