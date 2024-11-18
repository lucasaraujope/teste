const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    speed: 600,
    preventClicks: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
    on:{
        click(event){
            swiper.slideTo(this.clickedIndex);
        },
    }, 
    pagination: {
        el: ".swiper-pagination",
    },

});



let valueDisplays = document.querySelectorAll(".alunos__number");
let interval = 20000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val").replace("data-val", "20.000"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
