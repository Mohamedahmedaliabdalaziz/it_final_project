document.addEventListener("DOMContentLoaded", function() {

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");

    const themeToggle = document.getElementById("theme-toggle");
    const themeLink = document.getElementById("theme-style");
    const icon = themeToggle.querySelector("img");

    const form = document.getElementById("form1");
    const msg = document.getElementById("divmessage");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });


    function setTheme(theme) {
        if (theme === "dark") {
            themeLink.href = "testdrive.css";
            icon.src = "moon-fill.svg";
        } else {
            themeLink.href = "testdrive2.css";
            icon.src = "brightness-high-fill.svg";
        }
    }

    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);

    themeToggle.addEventListener("click", () => {
        const current = localStorage.getItem("theme") || "light";

        if (current === "light") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        msg.style.display = "block";

        setTimeout(() => {
            msg.style.display = "none";
        }, 3000);
    });

});
