const carousel = document.getElementById("carousel");
const slides = carousel.children;
let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  }

const orderAmt = document.getElementById("orderAmt");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

const cart = document.getElementById("cart");

plusBtn.addEventListener("click", () => {
  let value = Number(orderAmt.textContent);
  value++;
  orderAmt.textContent = value;
})


minusBtn.addEventListener("click", () => {
  let value = Number(orderAmt.textContent);

  if (value > 0){
    value--;
    orderAmt.textContent = value;
  }
})

cart.addEventListener("click", () => {
  cart.setAttribute("shadow", "none")
})
