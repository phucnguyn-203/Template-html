const buyBtns = document.querySelectorAll(".js-buy-button");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-icon");
const modalContainer = document.querySelector(".modal-container");


const showBuyTicket = () => {
	modal.classList.add("open");
}

const hideBuyTicket = () => {
	modal.classList.remove("open");
}

closeBtn.addEventListener("click", hideBuyTicket);

for (buyBtn of buyBtns) {
	buyBtn.addEventListener("click", showBuyTicket);
}

modal.addEventListener("click", hideBuyTicket);
modalContainer.addEventListener("click", (event) => {
	event.stopPropagation();
})