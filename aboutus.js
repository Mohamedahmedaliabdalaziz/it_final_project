document.addEventListener("DOMContentLoaded", () => {
    // --- 1. ELEMENT SELECTIONS ---
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const themeToggle = document.getElementById("theme-toggle");

    // Selects the <link> tag for CSS (Ensure your HTML has id="theme-style" or matches this selector)
    const themeLink = document.getElementById("theme-style") || document.querySelector('link[href*="aboutus"]');
    const icon = themeToggle ? themeToggle.querySelector("img") : null;

    // --- 2. SIDEBAR LOGIC ---
    if (menuBtn && sidebar) {
        // Open/Toggle sidebar
        menuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            sidebar.classList.toggle("active");
        });

        // Close sidebar when clicking anywhere outside of it
        document.addEventListener("click", (event) => {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnMenuBtn = menuBtn.contains(event.target);

            if (sidebar.classList.contains("active") && !isClickInsideSidebar && !isClickOnMenuBtn) {
                sidebar.classList.remove("active");
            }
        });
    }

    // --- 3. THEME SWITCHER LOGIC ---
    if (themeToggle && themeLink && icon) {

        /**
         * Function to apply theme changes
         * @param {string} theme - 'dark' or 'light'
         */
        const applyTheme = (theme) => {
            if (theme === "dark") {
                themeLink.href = "aboutus2.css";
                icon.src = "images/moon-fill.svg";
                localStorage.setItem("theme", "dark");
            } else {
                themeLink.href = "aboutus.css";
                icon.src = "images/brightness-high-fill.svg";
                localStorage.setItem("theme", "light");
            }
        };

        // Initialize: Check LocalStorage for saved preference, default to 'light'
        const savedTheme = localStorage.getItem("theme") || "light";
        applyTheme(savedTheme);

        // Click Event: Toggle between themes
        themeToggle.addEventListener("click", () => {
            const currentHref = themeLink.getAttribute("href");
            // If current file is aboutus.css (Light), switch to dark, and vice versa
            if (currentHref === "aboutus.css") {
                applyTheme("dark");
            } else {
                applyTheme("light");
            }
        });
    } else {
        console.warn("Theme toggle elements not found. Ensure your HTML IDs match.");
    }
});