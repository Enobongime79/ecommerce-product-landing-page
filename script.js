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

const cart = document.getElementById("cart");
const cartContent = document.getElementById("cartContent")
let cartState = false;

cart.addEventListener("click", () => {

  if (!cartState){
    cartContent.classList.remove("hidden");
    cartContent.classList.add("flex");
    cartState = true;
  }

  else if (cartState){
    cartContent.classList.add("hidden");
    cartState = false;
    cartContent.classList.remove("flex");
  }

})

const addToCart = document.getElementById("addToCart");
const cartContainer = document.getElementById("cartContainer");

const cartClose = document.getElementById("cartClose");
cartClose.addEventListener("click", () => {
  cartContent.classList.add("hidden");
  cartState = false;
})

const cartItemEmpty = false;

addToCart.addEventListener("click", () => {

  if (!cartItemEmpty){
    const cartView = document.getElementById("cartView");
    cartView.parentNode.removeChild(cartView);

    cartContainer.classList.remove("items-center", "justify-center");
    cartContainer.classList.add("flex-col", "pt-7");

    const cartDiv = document.createElement("div");
    const cartInnerDiv = document.createElement("div");
    const img = document.createElement("img");

    img.src = "/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg";
    img.classList.add("h-12", "rounded-sm", "w-12");

    const productDesc = document.createElement("div");
    productDesc.innerHTML = `<p class="font-normal text-sm text-gray-600">Fall Limited Edition Sneakers</p>
                              <p class="font-normal text-sm text-gray-600">$125.00 x ${orderAmt.innerText} <span class="font-bold text-black">$${125 * Number(orderAmt.innerText)}</span></p>`;

    const trash = document.createElement("img");
    trash.src = "/ecommerce-product-page-main/images/icon-delete.svg";
    trash.classList.add("h-4");

    trash.addEventListener("click", () => {
      genDiv.remove();
      cartContainer.classList.remove("flex-col", "pt-7");
      cartContainer.classList.add("items-center", "justify-center");
      cartContainer.innerHTML = `<p id="cartView" class="text-sm text-gray-400">Your cart is empty.</p>`;
      notisBadge.classList.add("hidden");
      notisBadge.innerText = 0;
    })

    cartInnerDiv.append(img);
    cartInnerDiv.append(productDesc);
    cartInnerDiv.append(trash);
    cartInnerDiv.setAttribute("class", "flex flex-row justify-around items-center w-full px-4");
    cartDiv.append(cartInnerDiv);

    const checkBtn = document.createElement("button");
    checkBtn.innerText = "Checkout";
    checkBtn.setAttribute("class", "font-bold text-black text-sm");

    const btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "bg-orange-500 rounded-lg flex flex-row justify-center mx-4 py-3 mt-6");

    btnDiv.append(checkBtn);

    const genDiv = document.createElement("div");
    genDiv.append(cartDiv);
    genDiv.append(btnDiv);

    const notisBadge = document.getElementById("notisBadge");
    notisBadge.classList.remove("hidden");
    notisBadge.innerText = orderAmt.innerText;

    cartContainer.append(genDiv);
    }

})
