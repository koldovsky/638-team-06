(function () {

const btns = document.querySelectorAll('.counter-btn');

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter-value');
        const currentValue = +inp.value;

        let newValue;

        if (direction === 'plus') {
            newValue = currentValue + 1;
        } else {

            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;

        }
        inp.value = newValue;
    })
})

   /* async updateBadge() {
        const {count} = await this.newValue();
        document.querySelector('#press-to-button').innerText = `${count}`;
    }*/

//document.querySelector('.button-big').addEventListener('click', addToCardNumber);

//    function addToCardNumber(event) {
//        const addToCardButton = event.target;
//        alert(newValue);
//    }

})();