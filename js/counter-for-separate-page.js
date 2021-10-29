(function () {

    const stepper = document.querySelector('.stepper');
    const stepperInput = document.querySelector('.stepper__input');
    const stepperBtnUp = document.querySelector('.stepper__btnUp');
    const stepperBtnDown = document.querySelector('.stepper__btnDown');

    let count = stepperInput.value;

   
    stepperBtnUp.addEventListener('click', (e) => {
        e.preventDefault();
        count++;
        stepperInput.value = count;

    });

    stepperBtnDown.addEventListener('click', (e) => {
        e.preventDefault();
        

        if (count - 1 > 0) {
           count--;
        } else { 
            count = 0;

        }


        stepperInput.value = count;

    });


    const buttonBig = document.querySelector('.button-big');
    const orangeCircleContainer = document.querySelector('.number-of-bottles');
    
    buttonBig.addEventListener('click', (e) => {
        let currentCount = count;

        if (count > 0) {
            orangeCircleContainer.innerHTML = `
                <div class="orange-circle"><span>${currentCount}</span></div>
            `;

            // function reactionOnButton () {
            //     if (currentCount == 0) {
            //         document.body.remove(orangeCircleContainer);
            //     }
                
            // }
            
        } 
        
        
    })
   
    
   
   
})();