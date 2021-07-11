function menu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle('navbar--ul-show')
}

let menuItems = document.querySelectorAll(".ul-items")
menuItems.forEach((menulink) => {
    menulink.addEventListener("click", menu)
    }
);