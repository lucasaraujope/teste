const faq = document.querySelector(".faq");
const answer = document.querySelector(".answer");

const swiper = new Swiper(".swiper", {
  effect: "coverflow",
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
  on: {
    click(event) {
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
  let endValue = parseInt(
    valueDisplay.getAttribute("data-val").replace("data-val", "20.000")
  );
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const answer = button.nextElementSibling;
    const arrowIcon = button.querySelector(".arrow-icon");

    // Alterna a visibilidade da resposta e a troca de imagem
    if (faqItem.classList.contains("open")) {
      answer.style.display = "none";
      faqItem.classList.remove("open");
      arrowIcon.setAttribute("src", "Assets/seta-right.png"); // Seta para a direita
    } else {
      answer.style.display = "block";
      faqItem.classList.add("open");
      arrowIcon.setAttribute("src", "Assets/seta-down.png"); // Seta para baixo
    }
  });
});
