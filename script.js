document.getElementById("menuButton").addEventListener("click", function() {
    const nav = document.getElementById("navLinks");
    const button = document.getElementById("menuButton");
    
    nav.classList.toggle("active");

    // Change the button icon between ☰ and ✖
    if (nav.classList.contains("active")) {
        button.innerHTML = "╳";
    } else {
        button.innerHTML = "☰";
    }
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function() {
        const nav = document.getElementById("navLinks");
        const button = document.getElementById("menuButton");

        nav.classList.remove("active");
        button.innerHTML = "☰"; // Reset back to hamburger icon
    });
});





