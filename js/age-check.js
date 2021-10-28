const yes21 = document.querySelector('.yes21');
function yes21function() {
    document.getElementById('window-confirm-your-age-full-screen').style.display = 'none';
    document.body.classList.remove("lock");
    yes21.removeEventListener("click", yes21function);
}
yes21.addEventListener("click", yes21function);

const lessThan21 = document.querySelector('.lessThan21');
function lessThan21function() {
    window.location = 'sorry.html#';
    lessThan21.removeEventListener("click", lessThan21function);
}
lessThan21.addEventListener("click", lessThan21function);

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
