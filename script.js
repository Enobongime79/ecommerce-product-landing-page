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

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeSidebar");

function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
}

function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
}

hamburger.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

const thumbnailOne = document.getElementById("thumbnailOne");
const thumbnailTwo = document.getElementById("thumbnailTwo");
const thumbnailThree = document.getElementById("thumbnailThree");
const thumbnailFour = document.getElementById("thumbnailFour");

thumbnailOne.addEventListener("click", () => {
  index = 0;
  updateCarousel();
  thumbnailOne.setAttribute("class", "cursor-pointer h-19 rounded-lg opacity-60 border-amber-500 border-2")
  thumbnailTwo.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
  thumbnailThree.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
  thumbnailFour.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
})

thumbnailTwo.addEventListener("click", () => {
  index = 1 % slides.length;
  updateCarousel();
  thumbnailTwo.setAttribute("class", "cursor-pointer h-19 rounded-lg opacity-60 border-amber-500 border-2")
  thumbnailOne.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
  thumbnailThree.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
  thumbnailFour.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
})

thumbnailThree.addEventListener("click", () => {
  index = 2 % slides.length;
  updateCarousel();
  thumbnailThree.setAttribute("class", "cursor-pointer h-19 rounded-lg opacity-60 border-amber-500 border-2")
  thumbnailTwo.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
  thumbnailOne.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
  thumbnailFour.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
})

thumbnailFour.addEventListener("click", () => {
  index = 3 % slides.length;
  updateCarousel();
  thumbnailFour.setAttribute("class", "cursor-pointer h-19 rounded-lg opacity-60 border-amber-500 border-2")
  thumbnailTwo.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
  thumbnailThree.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
  thumbnailOne.setAttribute("class", "cursor-pointer h-19 rounded-lg hover:opacity-60")
})

document.addEventListener("DOMContentLoaded", () => {
  thumbnailOne.setAttribute("class", "cursor-pointer h-19 rounded-lg opacity-60 border-amber-500 border-2")
})