(function () {

    const buttonBig = document.querySelector('.button-big');
    const orangeCircleContainer = document.querySelector('.number-of-bottles');
    
    buttonBig.addEventListener('click', (e) => {
        let currentCount = counter;
        orangeCircleContainer.innerHTML = `
        <div class="orange-circle"><span>${currentCount}</span></div>
        `;
    })


})();