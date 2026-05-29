const cursor = document.querySelector(".cursor");

/* RANDOM HERO BACKGROUND */

const backgrounds = [
    "images/background/bg1.png",
    "images/background/bg2.png",
    "images/background/bg3.png",
    "images/background/bg4.png",
    "images/background/bg5.png",
    "images/background/bg6.png",
    "images/background/bg7.png",
    "images/background/bg8.png",
    "images/background/bg9.png"
];

const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const heroBg = document.querySelector(".hero_bg");

heroBg.style.backgroundImage =
`linear-gradient(rgba(3,5,18,0.08), rgba(3,5,18,0.95)), url('${randomBg}')`;

/* CURSOR */

document.addEventListener("mousemove", function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

const hoverItems = document.querySelectorAll(
    "a, button, .champion_panel, .gallery_img, .region_item, .liquid_text"
);

hoverItems.forEach(function(item){
    item.addEventListener("mouseenter", function(){
        cursor.classList.add("active");
    });

    item.addEventListener("mouseleave", function(){
        cursor.classList.remove("active");
    });
});

/* REVEAL ON SCROLL */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.18
});

reveals.forEach(function(item){
    revealObserver.observe(item);
});

/* CARD TILT */

const tiltCards = document.querySelectorAll(".tilt_card");

tiltCards.forEach(function(card){
    card.addEventListener("mousemove", function(e){
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        card.style.setProperty("--mx", (x / rect.width) * 100 + "%");
        card.style.setProperty("--my", (y / rect.height) * 100 + "%");
    });

    card.addEventListener("mouseleave", function(){
        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
});

/* LIGHTBOX */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector("#lightbox img");
const galleryImgs = document.querySelectorAll(".gallery_img");

galleryImgs.forEach(function(img){
    img.addEventListener("click", function(){
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", function(){
    lightbox.classList.remove("active");
});

/* PARTICLES */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function createParticles(){
    particles = [];

    const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);

    for(let i = 0; i < count; i++){
        particles.push({
            x:Math.random() * canvas.width,
            y:Math.random() * canvas.height,
            size:Math.random() * 2 + 0.5,
            speedX:(Math.random() - 0.5) * 0.4,
            speedY:(Math.random() - 0.5) * 0.4,
            alpha:Math.random() * 0.7 + 0.15
        });
    }
}

createParticles();

window.addEventListener("resize", createParticles);

function drawParticles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function(p){
        p.x += p.speedX;
        p.y += p.speedY;

        if(p.x < 0 || p.x > canvas.width){
            p.speedX *= -1;
        }

        if(p.y < 0 || p.y > canvas.height){
            p.speedY *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
    });

    requestAnimationFrame(drawParticles);
}

drawParticles();

/* RIPPLE CLICK */

document.addEventListener("click", function(e){
    const ripple = document.createElement("span");

    ripple.className = "click_ripple";

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(function(){
        ripple.remove();
    }, 700);
});

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `
.click_ripple{
    position:fixed;
    width:20px;
    height:20px;
    border:2px solid rgba(250,204,21,0.9);
    border-radius:50%;
    left:0;
    top:0;
    transform:translate(-50%, -50%);
    pointer-events:none;
    z-index:99999;
    animation:rippleAnim 0.7s ease-out forwards;
}

@keyframes rippleAnim{
    to{
        width:120px;
        height:120px;
        opacity:0;
    }
}
`;

document.head.appendChild(rippleStyle);