const discountModalButton = document.querySelector('.discount-btn');
const discountModalBg = document.querySelector('.modal-discount-bg');
const discountModalClose = document.querySelector('.modal-discount-close');

discountModalButton.addEventListener('click', function () {
  discountModalBg.classList.add('modal-discount-bg-active');
});

discountModalClose.addEventListener('click', function () {
  discountModalBg.classList.remove('modal-discount-bg-active');
});