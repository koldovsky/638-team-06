(function () {

    const wineProduct = JSON.parse(localStorage.wineProduct);
    const wineProductsContainer = document.querySelector('.wine-for-backet');

    
    
    
    wineProductsContainer.innerHTML = `
        <div class="chioce-wine">
                <img class="wine-image" src="${wineProduct.image}" alt="${wineProduct.title}"> 
            </div>
            <div class="description-separate-wine">
                <div class="name-of-article">${wineProduct.title}</div>
                <div class="decor-text-wine-white">${wineProduct.code}</div>
                <div class="bold-number-text">${wineProduct.price.toFixed(2)}USD</div>
                
                <div class="count-and-card">
                    <div class="counter">
                        
                        <button class="counter-btn" data-direction="minus">-</button>
                        <input type="text" value="1" class="counter-value">
                        <button class="counter-btn" data-direction="plus">+</button>
                    </div>
                    <div>Sum</div>
                </div>
                    
                
                
            </div>
                    
        </div>
    `;
   

}) ();