(async function() {

    const response = await fetch('wine-products.json');
    const wineProducts = await response.json();

    const wineSlides = wineProducts.map(wineProduct => `
    <div class="wine-picture-for-carusel">
        <img class="wine-image" src="${wineProduct.image}" alt="${wineProduct.title}">
        <div class="bold-main-text-center">${wineProduct.title}</div>
        <div class="bold-number-text-center">${wineProduct.price.toFixed(2)}USD</div>
        <a href="wine-separate-page.html" class="button-info wine-info-button" target="_blank" data-id="${wineProduct.id}">Info</a>
        

    </div>

        
    `);

    
        

    let currentWineSlide = 0;
    function showCurrentWineSlide() {
        const slideContainer = document.querySelector('.products-carusel .wine-carusel');
        slideContainer.innerHTML = wineSlides[currentWineSlide];

        
        if (window.innerWidth > 700) {
            const secondSlideIdx = currentWineSlide + 1 >= wineSlides.length ? 0 : currentWineSlide + 1;
            slideContainer.innerHTML += wineSlides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= wineSlides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += wineSlides[thirdSlideIdx];
            }
        }


        document.querySelectorAll('.wine-info-button')
            .forEach(wineInfoButton => wineInfoButton.addEventListener('click', wineInfoClick));

        window.open(a);
    };

    function nextSlide() {
        currentWineSlide++;
        if (currentWineSlide >= wineSlides.length) currentWineSlide = 0;
        showCurrentWineSlide();
    };

    function prewSlide() {
        currentWineSlide--;
        if (currentWineSlide < 0) currentWineSlide = wineSlides.length - 1;
        showCurrentWineSlide();
    };
   
   
    document.querySelector('.products-carusel .nextWine').addEventListener('click', nextSlide);
    document.querySelector('.products-carusel .prewWine').addEventListener('click', prewSlide);

    window.addEventListener('resize', showCurrentWineSlide);

    showCurrentWineSlide();


    function wineInfoClick(event) {
        const bottleInfoButton = event.target;
        const wineProductId = bottleInfoButton.dataset.id;
        const wineProduct = wineProducts.filter(wineProduct => wineProduct.id === wineProductId)[0];
        localStorage.wineProduct = JSON.stringify(wineProduct);
    };
 

    
  
})();