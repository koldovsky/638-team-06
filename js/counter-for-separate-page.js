(function () {

    


// const btns = document.querySelectorAll('.counter-btn');

// btns.forEach(btn => {
//     btn.addEventListener('click', function() {
//         const direction = this.dataset.direction;
//         const inp = this.parentElement.querySelector('.counter-value');
//         const currentValue = +inp.value;

//         let newValue;

//         if (direction === 'plus') {
//             newValue = currentValue + 1;
//         } else {

//             newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;

//         }
//         inp.value = parseInt(newValue);

        const orangeBucket = document.querySelector('.number-of-bottles');
        

        document.querySelector('.button-big').addEventListener('click', addToCardNumber);

        function addToCardNumber () {
            const cart = document.querySelector('.number-of-bottlees');
            const cartIcon = document.querySelector('.orange-circle');
            const cartQuantity = cartIcon.querySelector('span');
                   
            
            cartIcon.insertAdjacentHTML('beforeend', `<span>${newValue}</span>`);

        }

    })
})

    


    // function addToCardNumber (event) {
       
    //     const addToCardButton = event.target;

    //     const circleContainer = document.querySelector('.number-of-bottles');

    //     circleContainer.innerHTML = `
        
    //     <div class="orange-circle">${newValue}</div>
        
    //     `;

     
    // }

    

   
})();