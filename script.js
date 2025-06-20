  document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
      type      : 'loop',
      drag      : 'free',
      focus     : 'center',
      perPage   : 3,
      gap       : '1rem',
      autoScroll: {
        speed: 1,
      },
      extensions: {
        AutoScroll: window.Splide.Extensions.AutoScroll,
      },
    }).mount();
  });