const swiper = new Swiper('.meus-projetos', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 4
        }
    },
    on: {
        init: function () {
            // Define a largura de cada slide para 300px
            var slides = document.querySelectorAll('.swiper-slide');
            slides.forEach(function (slide) {
                slide.style.width = '300px'; // Definir largura
            });
        },
        resize: function () {
            // Garantir que a largura permaneça 300px ao redimensionar
            var slides = document.querySelectorAll('.swiper-slide');
            slides.forEach(function (slide) {
                slide.style.width = '300px';
            });
        }
    }

  });