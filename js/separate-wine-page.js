(function() {

    const wineSeparateProducts = [
            {
                id: 1,
                title: 'Cabernet',
                price: 17.00,
                image: 'img/wine-table-traditional/cabernet.jpeg',
                link: href="wine-separate-page.html",
                description: 'If you do not want which red wine to buy, think of this Cabernet. It has a very deep dark purple color and opens with boysenberry, bourbon, and vanilla aromas. Then you will feel brown sugar, cocoa, spices, and currants. It is a wine with a really rich taste.'


            },
            {
                id: 2,
                title: 'Pinot Grigio',
                price: 10.00,
                image: 'img/wine-table-traditional/pinotGrigio.jpeg',
                link: href="wine-separate-page.html",
                description: 'Bright golden color. Gentle aromas and flavors of peach cobbler, honeydew, and apple with a silky, fruity-yet-dry medium body, and lemon and nut in the finish.'


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

    function renderWineSeparate (wineSeparateProducts) {
        const wineSeparateContainer = document.querySelector('.products-separate');
            for (const wineSeparateProduct of wineSeparateProducts) {
            
            wineSeparateContainer.innerHTML += `

            <div class="description-separate-image">
                <div class="name-of-article">${wineSeparateProduct.title}</div>
                <div class="decor-text-wine-white">Product code 18</div>
                <div class="bold-number-text">${wineSeparateProduct.price}USD</div>
                <div class="white-line"></div>
                <div class="count-and-card">
                    <div class="count-plus-minus"></div>
                    <div>
                        <input class="button-big" type="button" value="Add to card"> 
                    </div>
                 
                    
                    
                </div>
                    
                <div class="text-uppercase">description</div>
                <div class="white-line"></div>
                <div class="bold-main-text">${wineSeparateProduct.description}</div>
                    
            </div>
            `;
            }
        
    }

   renderWineSeparate (wineSeparateProducts);
     
        
  
})();