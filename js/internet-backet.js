(function () {

    const wineProduct = JSON.parse(localStorage.wineProduct);
    const wineProductsContainer = document.querySelector('.goodsFromLocalStorage');

    
    
    
    wineProductsContainer.innerHTML = `
        <div class="bold-main-text-dark">${wineProduct.title}</div>
        <p class="bold-main-text-dark">${wineProduct.price.toFixed(2)}USD</p>
    `;
   

}) ();