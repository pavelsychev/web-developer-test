/* Импортируем webpack */
 import * as flsFunctions from "./modules/function.js";

 flsFunctions.isWebp();


 //  /*плагин Swiper*/

  import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';
Swiper.use([Pagination, Navigation, Autoplay]);
const swiper = new Swiper(".swiper", {
     spaceBetween: 30,
     autoHeight: true,
     slidesPerView: 1,
     loop: true,
     autoplay: {
      delay: 2000,
  },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
