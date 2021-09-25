// show mobile menu 
const header = document.querySelector("#header");
const mobileMenu = document.querySelector(".menu-mobile-btn");
const Headerheight = header.clientHeight;

const showMenu = () => {
	const isClose = header.clientHeight === Headerheight;

	if (isClose) {
		header.style.height = "auto";
	} else {
		header.style.height = null;
	}
}
mobileMenu.addEventListener("click", showMenu);

//hide menu
const menuItems = document.querySelectorAll("#nav li a[href *= '#']");

for(menuItem of menuItems){
	menuItem.addEventListener("click", function(event){
		const isParent = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
		if(isParent){
			event.preventDefault();
		}else{
			header.style.height = null;
		}
	});
}

