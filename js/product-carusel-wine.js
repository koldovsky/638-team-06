(function() {

    const wineProducts = [
            {
                id: 1,
                title: 'Cabernet',
                price: 17.00,
                image: 'img/wine-table-traditional/cabernet.jpeg'


            },
            {
                id: 2,
                title: 'Pinot Grigio',
                price: 10.00,
                image: 'img/wine-table-traditional/pinotGrigio.jpeg'


            },
            {
                id: 3,
                title: 'Pinot Noir',
                price: 12.00,
                image: 'img/wine-table-traditional/ponotNoir.jpeg'


            },
            {
                id: 4,
                title: 'Riesling',
                price: 16.00,
                image: 'img/wine-table-traditional/riesling.jpeg'


            },
            {
                id: 5,
                title: 'Sauvignon Blanc',
                price: 12.00,
                image: 'img/wine-table-traditional/sauvignonBlanc.jpeg'


            },
            {
                id: 6,
                title: 'Soave',
                price: 12.00,
                image: 'img/wine-table-traditional/soave.jpeg'


            },
            {
                id: 7,
                title: 'Syrah',
                price: 13.00,
                image: 'img/wine-table-traditional/syrah.jpeg'


            },
            {
                id: 8,
                title: 'Zifandel',
                price: 14.00,
                image: 'img/wine-table-traditional/zifandel.jpeg'


            }
            
    ];

    function renderWineBottles (wineProducts) {
        const wineProductsContainer = document.querySelector('.products-carusel');
        for (const wineProduct of wineProducts) {
            wineProductsContainer.innerHTML += `
            <article>
                <img class="wine-image" src="${wineProduct.image}" alt="${wineProduct.title}">
                <div class="bold-main-text-center">${wineProduct.title}</div>
                <div class="bold-number-text-center">${wineProduct.price.toFixed(2)}USD</div>
                <input class="button-info" type="button" value="Info">
            </article>
            `;
        }
    }

    renderWineBottles(wineProducts);    

})();