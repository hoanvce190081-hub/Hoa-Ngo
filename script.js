// 1. Hiệu ứng "Reveal" khi cuộn trang
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
reveal(); // Kích hoạt lần đầu

// 2. Hiệu ứng gõ chữ (Typewriter Effect) ở phần Hero
const phrases = ["Creative Designer.", "Motion Artist.", "Visual Storyteller."];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenPhrases = 2000; // Nghỉ 2 giây trước khi xóa

const typewriterElement = document.getElementById('typewriter');

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isDeleting) {
        // Đang xóa chữ
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        // Đang gõ chữ
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    // Logic tốc độ
    let speed = isDeleting ? deletingSpeed : typingSpeed;

    // Chuyển đổi trạng thái
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        speed = delayBetweenPhrases; // Tạm dừng khi gõ xong
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Chuyển sang cụm từ tiếp theo
        speed = 500; // Tạm dừng 1 xíu trước khi gõ từ mới
    }

    setTimeout(type, speed);
}

// Khởi động hiệu ứng gõ chữ sau khi trang load
document.addEventListener("DOMContentLoaded", () => {
    if(typewriterElement) {
        setTimeout(type, 1000);
    }
});

// 3. Xử lý Form (Demo)
const form = document.getElementById('contact-form');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Tuyệt vời! Lời nhắn của bạn đã được gửi đi thành công.');
        form.reset();
    });
}