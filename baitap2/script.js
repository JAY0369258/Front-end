let currentIndex = 0;
const slides = document.querySelectorAll(".product-item");
const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".slider");
const slideInterval = 1000; // Thời gian chuyển slide (miliseconds)

// Hàm chuyển slide
function currentSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Cập nhật slider
function updateSlider() {
  const offset = -currentIndex * 15; // Mỗi sản phẩm chiếm 25%
  slider.style.transform = `translateX(${offset}%)`;

  // Cập nhật trạng thái dot
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// Tự động chuyển slide
function autoPlaySlides() {
  currentIndex = (currentIndex + 1) % slides.length; // Lặp lại từ đầu khi hết slide
  updateSlider();
}

// Chạy auto play mỗi 3 giây
setInterval(autoPlaySlides, slideInterval);

// Khởi chạy mặc định
updateSlider();
