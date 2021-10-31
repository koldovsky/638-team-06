const yes21 = document.querySelector('.yes21');
const yes21function = () => {
    document.getElementById('window-confirm-your-age-full-screen').style.display = 'none';
    document.body.classList.remove("lock");
}
yes21.addEventListener("click", yes21function, { "once": true });
//option eventListener


const lessThan21 = document.querySelector('.lessThan21');
const lessThan21function = () => window.location = 'sorry.html#';
lessThan21.addEventListener('click', lessThan21function, { 'once': true });

// function lessThan21function() {
//     window.location = 'sorry.html#';}


(async function () {
    const responce = await fetch('wine-products.json');
    const productsOurWines = await responce.json();

    function renderProductsOurWines(productsOurWines) {
        const productsConatainer = document.querySelector('.assortment');
        const filterProductsContainer = productsOurWines.filter(wine => ["3", "4", "8", "6"].includes(wine.id));
        for (const product of filterProductsContainer) {
            productsConatainer.innerHTML +=
                `
                <div class="card-wine-shop ${product.classForCssAndHrefAndImg}-assortment-index">
                    <a class="image-bottle-to-info" href="wine-separate-page.html" data-id="${product.id}">
                        <img class="assortment-bottle-image" src="${product.image}"
                            alt="imagine bottle of ${product.title}">
                    </a>
                    <span class="name-wine-font">${product.title}</span>
                    <span class="price-font">${product.price.toFixed(2)} USD</span>
                    <input class="button-add-to-card" type="button" value="Add to cart">
                </div>
                `
        };
        //wine-separate-page.html
        // const imageBottleToInfofunction = () => alert("3");
        // infoWineImage.addEventListener('click', imageBottleToInfofunction);
    };
    // const infoWineImage = document.querySelector('.image-bottle-to-info');
    renderProductsOurWines(productsOurWines);

    document.querySelectorAll('.image-bottle-to-info')
        .forEach(wineInfoButton => wineInfoButton.addEventListener('click', wineInfoClick));

    window.open(a);

    function wineInfoClick(event) {
        const bottleInfoButton = event.currentTarget;
        const productId = bottleInfoButton.dataset.id;
        const product = productsOurWines.filter(product => product.id === productId)[0];
        localStorage.wineProduct = JSON.stringify(product);
    };

    // const imageBottleToInfofunction = () => localStorage.wineProduct = JSON.stringify("product.id");
})();