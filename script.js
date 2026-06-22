// 1. Reveal Elements on Scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

// 2. Typewriter Effect
const phrases = ["Motion Graphic Designer.", "Brand Identity Creator.", "Digital Artist."];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const typewriterElement = document.getElementById('typewriter');

function type() {
    if(!typewriterElement) return;
    
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        speed = 2500;
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        speed = 500;
    }
    setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});

// 3. Custom Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 300, fill: "forwards" });
    });

    const hoverElements = document.querySelectorAll("a, button, .project-row, .service-card");
    hoverElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursorOutline.style.width = "60px";
            cursorOutline.style.height = "60px";
            cursorOutline.style.borderColor = "rgba(255, 145, 0, 0.6)"; // Đổi sang màu cam khi hover
        });
        el.addEventListener("mouseleave", () => {
            cursorOutline.style.width = "40px";
            cursorOutline.style.height = "40px";
            cursorOutline.style.borderColor = "rgba(0, 240, 255, 0.5)"; // Trở về màu xanh
        });
    });
}

// 4. Parallax Background
document.addEventListener("scroll", function() {
    const parallaxElements = document.querySelectorAll('.bg-glow');
    let scrollPosition = window.pageYOffset;

    parallaxElements.forEach(el => {
        let speed = el.getAttribute('data-speed');
        el.style.transform = `translateY(${scrollPosition * speed * 0.05}px)`;
    });
});

// 5. 3D Tilt Effect
const tiltElements = document.querySelectorAll('.tilt-element');

if (window.innerWidth > 992) {
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -8; 
            const rotateY = ((x - centerX) / centerX) * 8;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            element.style.transition = 'transform 0.5s ease';
        });
        
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'none';
        });
    });
}

// 6. Form Handling
const form = document.getElementById('contact-form');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tin nhắn của bạn đã được gửi. Tôi sẽ liên hệ lại sớm!');
        form.reset();
    });
}