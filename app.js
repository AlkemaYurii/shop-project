const productsCountEl = document.getElementById("product-count");
console.log(productsCountEl);

const addToCartBtns = document.querySelectorAll(".btn-add-cart");
console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
      productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
  }

  const likesBtns = document.querySelectorAll(".like");
  likesBtns.forEach(item => {
    item.addEventListener("click", function () {
      item.classList.toggle("liked");
    });
  });

const modal = document.querySelector(".modal");
const moreDetailsBtns = document.querySelectorAll(".btn-more-details");
const btnClose = document.querySelector(".btn-close");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal);