document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".bx-menu").addEventListener("click", event => {
        document.querySelector(".nav-mobile").classList.toggle("clicked");
    })

    document.querySelector(".bx-x").addEventListener("click", event => {
        document.querySelector(".nav-mobile").classList.toggle("clicked");
    })

    document.querySelectorAll(".menu-item-mobile").forEach(anchor => {
        anchor.addEventListener("click", () => {
            document.querySelector(".nav-mobile").classList.toggle("clicked");
        })
    })

})