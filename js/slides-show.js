(function() {

   const slideWine = [
       '<div class="whine-picture-for-carusel"><img class="wine-image" src="img/wine-table-traditional/cabernet.jpeg" alt="Cabernet"></div>'
   ]

   let currentSlideWine = 0;
   function showCurrentSlideWine () {
       const slideWineContainer = document.querySelector('.products-carusel .wine-picture-for-carusel');
       slideWineContainer.innerHTML = slideWine[currentSlideWine];
   }
   showCurrentSlideWine();


   
    
    
    

})();