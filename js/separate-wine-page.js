(function() {

    const wineProduct = JSON.parse(localStorage.wineProduct);
    const wineProductsContainer = document.querySelector('.products-separate');
    
    
    wineProductsContainer.innerHTML = `
        <div class="separate-image">
                <img class="wine-image" src="${wineProduct.image}" alt="${wineProduct.title}"> 
            </div>
            <div class="description-separate-image">
                <div class="name-of-article">${wineProduct.title}</div>
                <div class="decor-text-wine-white">${wineProduct.code}</div>
                <div class="bold-number-text">${wineProduct.price.toFixed(2)}USD</div>
                <div class="white-line"></div>
                <div class="count-and-card">
                    <div class="counter">
                        
                        <button class="counter-btn" data-direction="minus">-</button>
                        <input type="text" value="0" class="counter-value">
                        <button class="counter-btn" data-direction="plus">+</button>
                    </div>
                    <div>
                        <button class="button-big" id="pressToButton">Add to card</button>
                    </div>
                </div>
                    
                <div class="text-uppercase">description</div>
                <div class="white-line"></div>
                <div class="bold-main-text">${wineProduct.description}</div>
            </div>
                    
        </div>
    `;

    


})();

