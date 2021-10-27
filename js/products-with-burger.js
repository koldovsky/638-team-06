(async function() {

    const response = await fetch('wine-products.json');
    const wineProducts = await response.json();

    function renderWineBottles (wineProducts) {
        const wineProductsContainer = document.querySelector('.products');
            for (const wineProduct of wineProducts) {
            
            wineProductsContainer.innerHTML += `
            
            <article>
                    <img class="wine-image" src="${wineProduct.image}" alt="${wineProduct.title}">
                    <div class="bold-main-text">${wineProduct.title}Cabernet</div>
                    <p class="bold-number-text">${wineProduct.price.toFixed(2)}USD</p>
                    <input class="button" type="button" value="Buy" data-id="${wineProduct.id}">
                </article>
            `;
            }
            document.querySelectorAll('.button')
                .forEach(wineBuyButton => wineBuyButton.addEventListener('click', wineBuyClick));
                
        
    }

    function wineBuyClick(event) {
        const bottleInfoButton = event.target;
        const wineProductId = bottleInfoButton.dataset.id;
        const wineProduct = wineProducts.filter(wineProduct => wineProduct.id === wineProductId)[0];
        localStorage.wineProduct = JSON.stringify(wineProduct);
    }

 

    renderWineBottles(wineProducts);       
        
  
})();

