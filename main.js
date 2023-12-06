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
