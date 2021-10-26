(function() {

    const wineProduct = JSON.parse(localStorage.wineProduct);
    const wineSeparateContainer = document.querySelector('.products-separate');

    wineSeparateContainer.innerHTML = `
            <div class="separate-image">
                <img class="wine-image" src="${wineProduct.image}" alt="Cabernet"> 
            </div>
            

            <div class="description-separate-image">
                <div class="name-of-article">${wineProduct.title}</div>
                <div class="decor-text-wine-white">${wineProduct.code}</div>
                <div class="bold-number-text">${wineProduct.price}USD</div>
                <div class="white-line"></div>
                <div class="count-and-card">
                    <div class="count-plus-minus"></div>
                    <div>
                        <input class="button-big" type="button" value="Add to card"> 
                    </div>
                 
                    
                    
                </div>
                    
                <div class="text-uppercase">description</div>
                <div class="white-line"></div>
                <div class="bold-main-text">${wineProduct.description}</div>
                    
            </div>
            `;
            
   
     
        
  
})();