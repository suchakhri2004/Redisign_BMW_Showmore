document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav-links");
    const megaBox = document.querySelector(".mega-box");
    let isMegaBoxVisible = false;

    navLinks.addEventListener("click", function () {
        if (isMegaBoxVisible) {
            megaBox.style.display = "none";
            isMegaBoxVisible = false;
        } else {
            megaBox.style.display = "block";
            isMegaBoxVisible = true;
        }
        
    });
})