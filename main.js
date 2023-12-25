$(document).ready(function () {
  $(".multiple-items").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    variableWidth: false, // Cho phép các slide có kích thước width tự động
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          autoplaySpeed: 1000,
          slidesToShow: 1,
        },
      },
    ],
  });
});

function toggleQues(element) {
  const content = element.querySelector(".hiden");
  content.style.display = content.style.display === "none" ? "block" : "none";
}

// Lấy thẻ icon bar và navbar
const iconBar = document.getElementById("icon-bar");
const navbar = document.getElementById("navbar");

// Thêm sự kiện click cho icon bar
iconBar.addEventListener("click", function () {
  // Kiểm tra trạng thái hiển thị của navbar
  const navbarDisplay = window
    .getComputedStyle(navbar)
    .getPropertyValue("display");

  // Nếu hiện tại đang ẩn, hiển thị navbar, ngược lại ẩn đi
  if (navbarDisplay === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});
function checkWidth() {
  if (window.innerWidth >= 768) {
    navbar.style.display = "none";
  }
}
window.addEventListener("load", checkWidth);
window.addEventListener("resize", checkWidth);
