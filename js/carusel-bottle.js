(async function() {

    const response = await fetch('wine-products.json');
    const wineProducts = await response.json();

    const slides = wineProducts.map(wineProduct => `
    <div class="wine-picture-for-carusel">
        <img class="wine-image" src="${wineProduct.image}" alt="${wineProduct.title}">
        <div class="bold-main-text-center">${wineProduct.title}</div>
        <div class="bold-number-text-center">${wineProduct.price.toFixed(2)}USD</div>
        <a href="wine-separate-page.html" class="button-info wine-info-button" data-id="${wineProduct.id}">Info</a>

    </div>
    `);



    let currentSlide = 0;
    function showCurrentSlide() {
        const slideContainer = document.querySelector('.products-carusel .wine-carusel');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = currentSlide + 2 >= slides.length ? 0 : currentSlide + 2;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }
    function prewSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }
   
   
    document.querySelector('.products-carusel .nextWine').addEventListener('click', nextSlide);
    document.querySelector('.products-carusel .prewWine').addEventListener('click', prewSlide);

    window.addEventListener('resize', showCurrentSlide);

    showCurrentSlide();


    
      
        
  
})();