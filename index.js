$(document).ready(function () {

  $('.p-two').hide();
  $('.p-half').hide();



  $(".circleOne").mouseover(function () {
    $('.circleOne').css("margin-bottom", "35px");
    $('.p-one').hide();
    $('.p-two').fadeIn(400);
    $('.p-half').fadeIn(400);
    $('.p-two').css({
      "margin-bottom": "-70px",
      "z-index": "2"
    });

    if ($(window).width() < 1199) {
      $('.circle').css("opacity", "0");
    };

  });

  $(".circleOne").mouseleave(function () {
    if ($(window).width() < 1199) {
      $('.circle').css("opacity", "1");
    };
    $('.p-two').hide();
    $('.p-half').hide();
    $('.p-one').show();
  });


  function myFunction(x) {
    x.classList.toggle("change");
  }



});