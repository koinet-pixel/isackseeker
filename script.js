/* ================= MOBILE NAV TOGGLE ================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.style.display =
            navLinks.style.display === "flex" ? "none" : "flex";
    });
}

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* ================= HERO CAROUSEL (HOME) ================= */
const heroSlides = document.querySelectorAll(".hero-bg");
const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");

let heroIndex = 0;
let heroInterval;

function showHeroSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove("active"));
    heroSlides[index].classList.add("active");
}

function nextHeroSlide() {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
}

function prevHeroSlide() {
    heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
    showHeroSlide(heroIndex);
}

function startHeroAutoSlide() {
    heroInterval = setInterval(nextHeroSlide, 6000);
}

function stopHeroAutoSlide() {
    clearInterval(heroInterval);
}

if (heroSlides.length > 0) {
    showHeroSlide(heroIndex);
    startHeroAutoSlide();
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        stopHeroAutoSlide();
        nextHeroSlide();
        startHeroAutoSlide();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        stopHeroAutoSlide();
        prevHeroSlide();
        startHeroAutoSlide();
    });
}

/* ================= ABOUT PAGE FADE-IN ================= */
const aboutSections = document.querySelectorAll(".about-section");

if (aboutSections.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    aboutSections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.6s ease";
        observer.observe(section);
    });
}

/* ================= ABOUT CAROUSEL ================= */
const aboutSlides = document.querySelectorAll(".about-carousel img");
let aboutIndex = 0;

if (aboutSlides.length > 0) {
    aboutSlides[0].classList.add("active");

    setInterval(() => {
        aboutSlides[aboutIndex].classList.remove("active");
        aboutIndex = (aboutIndex + 1) % aboutSlides.length;
        aboutSlides[aboutIndex].classList.add("active");
    }, 5000);
}

/* ================= GALLERY FILTER ================= */
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            galleryItems.forEach(item => {
                item.style.display =
                    filter === "all" || item.classList.contains(filter)
                        ? "block"
                        : "none";
            });
        });
    });
}
