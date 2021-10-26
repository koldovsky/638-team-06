// onclick="document.getElementById('window-confirm-your-age-full-screen').style.display = 'none'"
// onclick="document.getElementById('window-confirm-your-age-full-screen').window.location='sorry.html#'"
// document.getElementsById('yes, I`m 21+') = ".style.display = 'none'"
function yes21() {
    document.getElementById('window-confirm-your-age-full-screen').style.display = 'none';
}

function lessThan21() {
    window.location = 'sorry.html#';
}

(function () {
    const productsOurWines = [
        {
            id: "1",
            title: 'Pinot noir',
            price: 12.00,
            image: 'img/imagine-wine-bottle/pinot-noir.jpeg',
            classForCssAndHrefAndImg: 'pinot-noir'
        },

        {
            id: "2",
            title: 'Riesling',
            price: 14.00,
            image: 'img/imagine-wine-bottle/riesling.jpeg',
            classForCssAndHrefAndImg: 'riesling'
        },

        {
            id: "3",
            title: 'Zifandel',
            price: 16.00,
            image: 'img/imagine-wine-bottle/zifandel.jpeg',
            classForCssAndHrefAndImg: 'zifandel'
        },

        {
            id: "4",
            title: 'Soave',
            price: 12.00,
            image: 'img/imagine-wine-bottle/soave.jpeg',
            classForCssAndHrefAndImg: 'soave'
        }
    ];

    function renderProductsOurWines(productsOurWines) {
        const productsConatainer = document.querySelector('.assortment');
        for (const product of productsOurWines) {
            productsConatainer.innerHTML +=
            `
            <div class="card-wine-shop ${product.classForCssAndHrefAndImg}-assortment-index">
                <a href="${product.classForCssAndHrefAndImg}.html">
                    <img class="assortment-bottle-image" src="img/imagine-wine-bottle/${product.classForCssAndHrefAndImg}.jpeg"
                        alt="imagine bottle of ${product.classForCssAndHrefAndImg}">
                </a>
                <span class="name-wine-font">${product.title}</span>
                <span class="price-font">${product.price.toFixed(2)} USD</span>
                <input class="button-add-to-card" type="button" value="Add to cart">
            </div>
            `
        }
    };

    renderProductsOurWines(productsOurWines);

})();
