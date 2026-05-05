document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const themeToggle = document.getElementById("theme-toggle");
    const themeLink = document.getElementById("theme-style");
    const icon = themeToggle.querySelector("img");


    menuBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        sidebar.classList.toggle("active");
    });

    document.addEventListener("click", function(event) {
        if (sidebar.classList.contains("active")) {
            if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
                sidebar.classList.remove("active");
            }
        }
    });


    const savedTheme = localStorage.getItem("theme") || "light";

    if (savedTheme === "dark") {
        themeLink.href = "home-dark.css";
        icon.src = "images/moon-fill.svg";
    } else {
        themeLink.href = "home-light.css";
        icon.src = "images/brightness-high-fill.svg";
    }


    themeToggle.addEventListener("click", () => {
        const isCurrentlyLight = themeLink.href.includes("home-light.css");

        if (isCurrentlyLight) {
            themeLink.href = "home-dark.css";
            icon.src = "images/moon-fill.svg";
            localStorage.setItem("theme", "dark");
        } else {
            themeLink.href = "home-light.css";
            icon.src = "images/brightness-high-fill.svg";
            localStorage.setItem("theme", "light");
        }
    });
});