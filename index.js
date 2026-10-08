




const toggleMenu = document.querySelector("#toggleMenu");
const navBar = document.querySelector(".navBar");

function toggleMenuBar() {
    navBar.classList.toggle("active");
}
toggleMenu.addEventListener("click", toggleMenuBar);