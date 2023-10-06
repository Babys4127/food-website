const navIcon = document.getElementById("navIcon");
const navLinks = document.getElementById("navLinks");

navIcon.addEventListener("click", () => {
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
})