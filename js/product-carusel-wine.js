(function() {

    const wineProducts = [
            {
                id: 1,
                title: 'Cabernet',
                price: 17.00,
                image: 'img/wine-table-traditional/cabernet.jpeg',
                link: href="wine-separate-page.html"

            },
            {
                id: 2,
                title: 'Pinot Grigio',
                price: 10.00,
                image: 'img/wine-table-traditional/pinotGrigio.jpeg',
                link: href="wine-separate-page.html"


            },
            {
                id: 3,
                title: 'Pinot Noir',
                price: 12.00,
                image: 'img/wine-table-traditional/ponotNoir.jpeg',
                link: href="wine-separate-page.html"


            },
            {
                id: 4,
                title: 'Riesling',
                price: 16.00,
                image: 'img/wine-table-traditional/riesling.jpeg',
                link: href="wine-separate-page.html"

            },
            {
                id: 5,
                title: 'Sauvignon Blanc',
                price: 12.00,
                image: 'img/wine-table-traditional/sauvignonBlanc.jpeg',
                link: href="wine-separate-page.html"


            },
            {
                id: 6,
                title: 'Soave',
                price: 12.00,
                image: 'img/wine-table-traditional/soave.jpeg',
                link: href="wine-separate-page.html"


            },
            {
                id: 7,
                title: 'Syrah',
                price: 13.00,
                image: 'img/wine-table-traditional/syrah.jpeg',
                link: href="wine-separate-page.html"


            },
            {
                id: 8,
                title: 'Zifandel',
                price: 14.00,
                image: 'img/wine-table-traditional/zifandel.jpeg',
                link: href="wine-separate-page.html"


            }
            
    ];

    function renderWineBottles (wineProducts) {
        const wineProductsContainer = document.querySelector('.products-carusel');
            for (const wineProduct of wineProducts) {
            
            wineProductsContainer.innerHTML += `
            <div class="wine-picture-for-carusel">
                <img class="wine-image" src="${wineProduct.image}" alt="${wineProduct.title}">
                <div class="bold-main-text-center">${wineProduct.title}</div>
                <div class="bold-number-text-center">${wineProduct.price.toFixed(2)}USD</div>
                <a href="${wineProduct.link}"><button class="button-info">Info</button></a>

            </div>
            `;
            }
        
    }

   renderWineBottles (wineProducts);
     
        
    /*let currentSlideWine = 0;
   function showCurrentSlideWine () {
       const slideWineContainer = document.querySelector('.products-carusel .wine-picture-for-carusel');
       slideWineContainer.innerHTML = slideWine[currentSlideWine];
   }
   showCurrentSlideWine();*/
    

})();