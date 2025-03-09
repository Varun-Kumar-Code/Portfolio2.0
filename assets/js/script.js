document.addEventListener("DOMContentLoaded", () => {
    // Typing Animation
    const words = ["Full-Stack Web Developer", "UI/UX Designer", "Frontend Developer", "Web Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const newWordDelay = 2000;
    const typingElement = document.querySelector('.typing-animation');

    function type() {
        if (typingElement) {
            if (charIndex < words[wordIndex].length) {
                typingElement.textContent += words[wordIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, newWordDelay);
            }
        }
    }

    function erase() {
        if (typingElement) {
            if (charIndex > 0) {
                typingElement.textContent = typingElement.textContent.slice(0, -1);
                charIndex--;
                setTimeout(erase, erasingSpeed);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();

    // Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            const menuBtnIcon = menuBtn.querySelector("i");
            if (menuBtnIcon) {
                menuBtnIcon.className = navLinks.classList.contains("open") 
                    ? "ri-close-line" 
                    : "ri-menu-line";
            }
        });

        navLinks.addEventListener("click", (e) => {
            if (e.target.tagName === "A") {
                navLinks.classList.remove("open");
                const menuBtnIcon = menuBtn.querySelector("i");
                if (menuBtnIcon) {
                    menuBtnIcon.className = "ri-menu-line";
                }
            }
        });
    }

    // Animation on scroll function and init
    function aosInit() {
        AOS.init({
            duration: 600,   // Duration of the animation
            easing: 'ease-in-out',  // Easing function
            once: true,   // Run animation once
            mirror: false  // Don't mirror animation on scroll up
        });
    }
    
    // Call aosInit function after the page has loaded
    window.onload = function() {
        aosInit(); // This will initialize AOS animations
    };
    
    function imgInit() {
        AOS.init({
            distance: "50px",
            origin: "bottom", // Set the origin to "right"
            duration: 1000,
        });
    }
    
    window.onload = function() {
        imgInit(); // This will initialize AOS animations
    };
    
    // Animate Progress Bars
    const progressBars = document.querySelectorAll('.progress-done');

    if (progressBars.length > 0) {
        progressBars.forEach(bar => {
            setTimeout(() => {
                bar.style.width = bar.getAttribute('data-done') + '%';
                bar.style.opacity = 1;
            }, 1000);
        });
    }

    // Circular Skills Animation
    const circles = document.querySelectorAll('.circle');

    if (circles.length > 0) {
        circles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            circle.style.setProperty('--percent', percent);
        });
    }

    // CV Download Button
    const downloadCv = document.getElementById("download-cv");

    if (downloadCv) {
        downloadCv.addEventListener("click", () => {
            const aElement = document.createElement("a");
            aElement.setAttribute("download", "CV.pdf");
            aElement.setAttribute("href", "/assets/CV.pdf");
            aElement.click();
        });
    }

    // Scroll Reveal Animations
    if (typeof ScrollReveal !== "undefined") {
        const scrollRevealOption = {
            distance: "50px",
            origin: "bottom",
            duration: 1000,
        };

        ScrollReveal().reveal(".header__container h4", { ...scrollRevealOption });
        ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
        ScrollReveal().reveal(".header__container .section__description", { ...scrollRevealOption, delay: 1000 });
        ScrollReveal().reveal(".header__container .header__btns", { ...scrollRevealOption, delay: 1500 });

        ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
        ScrollReveal().reveal(".about__content h4", { ...scrollRevealOption, delay: 500 });
        ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1000 });
        ScrollReveal().reveal(".about__content .about__progress", { ...scrollRevealOption, delay: 1500 });
        ScrollReveal().reveal(".service__card", { ...scrollRevealOption, interval: 500 });
        ScrollReveal().reveal(".blog__card", { ...scrollRevealOption, interval: 500 });
    }

    // Glow Button Effect
    const button = document.querySelector(".phone-button");

    if (button) {
        button.addEventListener("mousemove", (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            button.style.setProperty("--mouse-x", `${x}px`);
            button.style.setProperty("--mouse-y", `${y}px`);
        });

        button.addEventListener("mouseleave", () => {
            button.style.setProperty("--mouse-x", `50%`);
            button.style.setProperty("--mouse-y", `50%`);
        });
    }
});
