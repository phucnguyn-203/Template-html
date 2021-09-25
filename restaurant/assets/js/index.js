const menuBtn = document.querySelector(".menu-btn");
const header = document.getElementById("header");

const showMenu = () =>{
	const isClose = header.style.overflow === "";
	if(isClose){
		header.style.overflow = "visible";
	}else{
		header.style.overflow = null;
	}

}

menuBtn.addEventListener("click", showMenu);

//hide menu
const menuItems = document.querySelectorAll("#header .nav li a");

for(menuItem of menuItems){
	menuItem.addEventListener("click", () =>{
		header.style.overflow = null;
	})
}