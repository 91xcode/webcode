var swiper = new Swiper('.swiper-container-lovezxy1', {
    pagination: '.swiper-pagination-lovezxy1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-lovezxy2', {
    pagination: '.swiper-pagination-lovezxy2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-lovezxy3', {
    pagination: '.swiper-pagination-lovezxy3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-lovezxy3',
    prevButton: '.swiper-button-prev-lovezxy3'
});