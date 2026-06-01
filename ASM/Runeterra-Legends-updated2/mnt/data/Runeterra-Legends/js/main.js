/* ===================== HERO BACKGROUND ===================== */
const backgrounds = [
    "images/background/bg1.jpg",
    "images/background/bg2.jpg",
    "images/background/bg3.png",
    "images/background/bg4.png",
    "images/background/bg5.png",
    "images/background/bg6.png",
    "images/background/bg7.png",
    "images/background/bg8.png",
    "images/background/bg9.png"
];
const heroBg = document.getElementById("heroBg");
const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
heroBg.style.backgroundImage = `linear-gradient(rgba(3,5,18,0.15), rgba(3,5,18,0.8)), url('${randomBg}')`;
heroBg.style.backgroundSize = "cover";
heroBg.style.backgroundPosition = "center";

/* ===================== CURSOR ===================== */
const cursor = document.querySelector(".cursor");

if (cursor) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Ripple trails
        const trail = document.createElement("div");
        trail.style.cssText = `
            position: fixed; width: 4px; height: 4px;
            background: rgba(232,196,106,0.4); border-radius: 50%;
            left: ${e.clientX}px; top: ${e.clientY}px;
            pointer-events: none; z-index: 9997;
            transform: translate(-50%, -50%);
            animation: trailFade 0.6s ease-out forwards;
        `;
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 600);
    });

    // Smooth cursor
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.12;
        cursorY += (mouseY - cursorY) * 0.12;
        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Trail style
    const trailStyle = document.createElement("style");
    trailStyle.textContent = `@keyframes trailFade { to { opacity: 0; transform: translate(-50%, -50%) scale(3); } }`;
    document.head.appendChild(trailStyle);

    const hoverEls = document.querySelectorAll("a, button, .champion_card, .gallery_item, .region_card");
    hoverEls.forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("active"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
    });
}

/* ===================== NAVBAR SCROLL ===================== */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
});

/* ===================== ACTIVE NAV LINKS ===================== */
const sections = document.querySelectorAll("section[id], div[id]");
const navLinks = document.querySelectorAll(".nav_link");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
            });
        }
    });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

/* ===================== REVEAL ON SCROLL ===================== */
const revealEls = document.querySelectorAll(".reveal_up");
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Also trigger stat bar animation for champion cards
            if (entry.target.classList.contains("champion_card")) {
                entry.target.classList.add("visible");
            }
        }
    });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* ===================== CHAMPION CARD TILT ===================== */
document.querySelectorAll(".champion_card").forEach(card => {
    card.addEventListener("mousemove", function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rx = ((y - cy) / cy) * -7;
        const ry = ((x - cx) / cx) * 7;

        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        card.style.setProperty("--mx", (x / rect.width * 100) + "%");
        card.style.setProperty("--my", (y / rect.height * 100) + "%");
    });
    card.addEventListener("mouseleave", function() {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        card.style.setProperty("--mx", "50%");
        card.style.setProperty("--my", "100%");
    });
});

/* ===================== GALLERY LIGHTBOX ===================== */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".gallery_item").forEach(item => {
    item.addEventListener("click", function() {
        const img = item.querySelector("img");
        const caption = item.querySelector(".gallery_overlay span");
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption ? caption.textContent : "";
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

lightbox.addEventListener("click", function(e) {
    if (e.target === lightbox || e.target === lightboxClose) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }
});

/* ===================== STATS COUNTER ===================== */
const statNums = document.querySelectorAll(".stat_num");
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
            entry.target.dataset.counted = "1";
            const target = parseInt(entry.target.dataset.target);
            const duration = 1800;
            const start = performance.now();
            const startVal = 0;

            function tick(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                entry.target.textContent = Math.round(startVal + (target - startVal) * ease);
                if (progress < 1) requestAnimationFrame(tick);
                else entry.target.textContent = target;
            }
            requestAnimationFrame(tick);
        }
    });
}, { threshold: 0.6 });
statNums.forEach(el => counterObserver.observe(el));

/* ===================== PARTICLES ===================== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", () => { resize(); createParticles(); });

function createParticles() {
    particles = [];
    const count = Math.floor(window.innerWidth * window.innerHeight / 14000);
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.8 + 0.3,
            speedX: (Math.random() - 0.5) * 0.35,
            speedY: (Math.random() - 0.5) * 0.35,
            alpha: Math.random() * 0.6 + 0.1,
            hue: Math.random() > 0.6 ? "232,196,106" : "56,189,248"
        });
    }
}
createParticles();

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, ${p.alpha})`;
        ctx.fill();
    });
    requestAnimationFrame(drawParticles);
}
drawParticles();

/* ===================== CLICK RIPPLE ===================== */
document.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    ripple.className = "click_ripple";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});
