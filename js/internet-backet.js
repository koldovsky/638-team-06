(function () {

    

    const wineProduct = JSON.parse(localStorage.wineProduct);
    const wineProductsContainer = document.querySelector('.choiceProduct');
    const wineQuantity = JSON.parse(localStorage.counter);

      

    

    wineProductsContainer.innerHTML = `
        <div class="goodsFromLocalStorage">
            <div class="bold-main-text-dark">${wineProduct.title}</div>
            <p class="bold-main-text-dark">${wineProduct.price.toFixed(2)}USD</p>
        </div>

        <div class="stepperOne quantityBottles bold-main-text-dark">
        <div class="stepper__fieldOne items__current" data-count>${wineQuantity.counter}</div>
            <div class="stepper__btnsOne">
                <button class="stepper__btn stepper__btn--up" data-action="plus">+</button>
                <button class="stepper__btn stepper__btn--down" data-action="minus">-</button>
            </div>
            
        </div>
        <div class="totalPrice total-main-text-dark">${(wineProduct.price * wineQuantity.counter).toFixed(2)}USD</div>
    `;
    
    const counterSum = document.querySelector('.totalPrice');

    const btnMinusWin = document.querySelector('[data-action="minus"]');

    const btnPlusWin = document.querySelector('[data-action="plus"]');
    const counterWin = document.querySelector('[data-count]');
        
    
    btnMinusWin.addEventListener('click', function () {
        if (parseInt(counterWin.innerText) > 1)  {
            counterWin.innerText = --counterWin.innerText;
           
        }
        updateCartCounter();
        
        
        
    });

    btnPlusWin.addEventListener('click', function () {
        
        counterWin.innerText = ++counterWin.innerText;
        updateCartCounter();
        
    });





    const orangeCircleContainer = document.querySelector('.number-of-bottles');
    

    function updateCartCounter() {
        let currentCount = counterWin.innerText;
        orangeCircleContainer.innerHTML = `
        <div class="orange-circle"><span>${currentCount}</span></div>
        `;
    }


    

    
    function orangeElement(wineQuantity) {
        if (counterWin > 0) {
            orangeCircleContainer.innerHTML = `
        <div class="orange-circle"><span>${counterWin}</span></div>
        `;
        }
    }
    orangeElement();
       
    

    const btn = document.querySelector('.btn');
    const modals = document.querySelector('.modals');

    btn.addEventListener('click', () => {
        
        modals.classList.add('modals--visible');
    });

    const closeBtn = document.querySelector('.closeModal');

    closeBtn.addEventListener('click', () => {
        modals.classList.remove('modals--visible');
    });





    

})();
    
    
    
    
    
   

