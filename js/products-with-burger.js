(async function() {

    const response = await fetch('wine-products.json');
    const wineProducts = await response.json();

    function renderWineBottles (wineProducts) {
        const wineProductsContainer = document.querySelector('.products');
            for (const wineProduct of wineProducts) {
            
            wineProductsContainer.innerHTML += `
            
            <article>
                <img class="wine-image" src="${wineProduct.image}" alt="${wineProduct.title}">
                <div class="bold-main-text">${wineProduct.title}</div>
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
    
    

    // создаем модальное окно

    const btn = document.querySelector('.btn');
    const modals = document.querySelector('.modals');

    btn.addEventListener('click', (e) => {
        
        modals.classList.add('modals--visible');
    });

    const closeBtn = document.querySelector('.closeModal');

    closeBtn.addEventListener('click', (e) => {
        modals.classList.remove('modals--visible');
    });


    const stepperOne = document.querySelector('.stepperOne');
    const stepperInput = document.querySelector('.stepper__input');
    const stepperBtnUp = stepperOne.querySelector('.stepper__btn--up');
    const stepperBtnDown = stepperOne.querySelector('.stepper__btn--down');

    let countOne = stepperInput.value;

    stepperBtnUp.addEventListener('click', (e) => {
        e.preventDefault();
        countOne++;
        stepperInput.value = countOne;

    });
    stepperBtnDown.addEventListener('click', (e) => {
        e.preventDefault();
        

        if (countOne - 1 > 1) {
           countOne--;
        } else { 
            countOne = 1;

        }


        stepperInput.value = countOne;

    });

    


    



        
  
})();

