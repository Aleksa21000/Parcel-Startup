import Swiper, { Navigation, Pagination } from 'swiper';

const slider = () => {
    const testSlider = new Swiper(".js-t-slider", {
        modules: [Pagination, Navigation],
        spaceBetween: 100,
        slidesPerView: 1,
        pagination: {
            el: ".t_pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

export default slider;