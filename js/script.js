$(document).ready(function() {
  // Change header on scroll
  $(window).scroll(function(){
    if ($(window).scrollTop()) {
       $('.header').addClass('header_fixed');
    }
    else {
       $('.header').removeClass('header_fixed');
    }
  });

  // Display menu for tablet
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });
});
