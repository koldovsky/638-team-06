(async function() {

    const response = await fetch('wine-products.json');
    const wineProducts = await response.json();

    function renderWineBottles (wineProducts) {
        const wineProductsContainer = document.querySelector('.products-carusel');
            for (const wineProduct of wineProducts) {
            
            wineProductsContainer.innerHTML += `
            <div class="wine-picture-for-carusel">
                <img class="wine-image" src="${wineProduct.image}" alt="${wineProduct.title}">
                <div class="bold-main-text-center">${wineProduct.title}</div>
                <div class="bold-number-text-center">${wineProduct.price.toFixed(2)}USD</div>
                <a href="wine-separate-page.html" class="button-info wine-info-button" data-id="${wineProduct.id}">Info</a>

            </div>
            `;
            }
            document.querySelectorAll('.wine-info-button')
                .forEach(wineInfoButton => wineInfoButton.addEventListener('click', wineInfoClick));
                
        
    }

    function wineInfoClick(event) {
        const bottleInfoButton = event.target;
        const wineProductId = bottleInfoButton.dataset.id;
        const wineProduct = wineProducts.filter(wineProduct => wineProduct.id === wineProductId)[0];
        localStorage.wineProduct = JSON.stringify(wineProduct);
    }

 

       
        
  
})();