document.addEventListener("DOMContentLoaded", function() {

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");

    const themeToggle = document.getElementById('theme-toggle');
    // FIX: Define themeLink and icon so the script can see them
    const themeLink = document.getElementById("theme-style");
    const icon = themeToggle ? themeToggle.querySelector("img") : null;

    // --- SIDEBAR ---
    if (menuBtn && sidebar) {
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
    }

    // --- THEME ---
    if (themeToggle && themeLink && icon) {

        const savedTheme = localStorage.getItem("theme") || "light";

        if (savedTheme === "dark") {
            themeLink.href = "contact2.css";
            icon.src = "moon-fill.svg";
        } else {
            themeLink.href = "contact.css";
            icon.src = "brightness-high-fill.svg";
        }

        themeToggle.addEventListener("click", () => {
            const currentPath = themeLink.getAttribute("href");

            if (currentPath === "contact.css") {
                themeLink.href = "contact2.css";
                icon.src = "moon-fill.svg";
                localStorage.setItem("theme", "dark");
            } else {
                themeLink.href = "contact.css";
                icon.src = "brightness-high-fill.svg";
                localStorage.setItem("theme", "light");
            }
        });
    }

    // --- FORM LOGIC ---
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let form = document.getElementById("contactForm");

    if (form) {
        form.onsubmit = function(e) {
            if (name.value == "") {
                alert("Please enter your name");
                e.preventDefault();
                return;
            }
            if (email.value == "") {
                alert("Please enter your email");
                e.preventDefault();
                return;
            }
            if (message.value == "") {
                alert("Please write a message");
                e.preventDefault();
                return;
            }
            alert("Form sent successfully!");
        };
    }
});
