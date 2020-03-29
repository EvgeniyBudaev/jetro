$("ul").on("click", ".header-link", function () {
  $("ul .header-link").removeClass("active"); //удаляем класс во всех вкладках
  $(this).addClass("active"); //добавляем класс текущей (нажатой)
});

$(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
  });
});

$("#toggle").click(function () {

  $(this).toggleClass('on');
  $("#resize").toggleClass("active");

});
