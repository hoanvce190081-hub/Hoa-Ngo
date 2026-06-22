// Hiệu ứng "Reveal" khi cuộn trang
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Khoảng cách từ dưới màn hình lên để kích hoạt

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll", reveal);

// Kích hoạt hàm reveal một lần khi trang vừa load để hiện các phần tử đầu tiên
reveal();

// Ngăn hành vi mặc định của form liên hệ (chỉ dùng làm demo)
const form = document.getElementById('contact-form');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Cảm ơn bạn! Tin nhắn đã được giả lập gửi thành công.');
        form.reset();
    });
}