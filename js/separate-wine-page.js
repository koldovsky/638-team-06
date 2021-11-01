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
                    <div class="stepperOneTwo quantityBottles bold-main-text-dark">
                        <div class="stepper__fieldOneTwo items__current" data-counter>1</div>
                        <div class="stepper__btnsOneTwo">
                            <button class="stepper__btnTwo stepper__btnTwo--up" data-action="plus">+</button>
                            <button class="stepper__btnTwo stepper__btnTwo--down" data-action="minus">-</button>
                        </div>
                
                    </div>
                    <div class="orange-button">
                        <button class="button-big" id="pressToButton" data-cart>Add to cart</button>
                    </div>
                </div>
                    
                <div class="text-uppercase">description</div>
                <div class="white-line"></div>
                <div class="bold-main-text">${wineProduct.description}</div>
            </div>
                    
        </div>
    `;

    const btnMinus = document.querySelector('[data-action="minus"]');

    const btnPlus = document.querySelector('[data-action="plus"]');
    const counter = document.querySelector('[data-counter]');
    const btnAddToCard = document.querySelector('[data-cart]');
    
    
    btnMinus.addEventListener('click', function () {
        if (parseInt(counter.innerText) > 1)  {
            counter.innerText = --counter.innerText;

        }

        
    });

    btnPlus.addEventListener('click', function () {
        
        counter.innerText = ++counter.innerText;
        
    });

    


    btnAddToCard.addEventListener('click', function(event) {

        if  (event.target.hasAttribute('data-cart')) {
            event.target.closest('.count-and-card');



            
            const productInfo = {
                
                counter: counter.innerText,

            };
            localStorage.setItem('counter', JSON.stringify(productInfo));
            
                
        } 
           
        
    });
    

    const buttonBig = document.querySelector('.button-big');
    const orangeCircleContainer = document.querySelector('.number-of-bottles');
    
    buttonBig.addEventListener('click', (e) => {
        let currentCount = counter.innerText;
        orangeCircleContainer.innerHTML = `
        <div class="orange-circle"><span>${currentCount}</span></div>
        `;
    })
     
    
            


})();

