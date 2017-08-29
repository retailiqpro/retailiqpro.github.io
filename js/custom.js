$(document).ready(function(){
  if($('.navbar-fixed-top').length >0) {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
          $(".navbar-fixed-top").addClass("nav-scroll");
      }
      else {
          $(".navbar-fixed-top").removeClass("nav-scroll");
      }
    });
  }
});
