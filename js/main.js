$(function () {
  $(".nav-trigger , .sm-menu   , .sm-menu a").on("click", function () {
    $(".nav-trigger").toggleClass("active");
    $(".sm-menu").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".sm-menu a").on("click", function () {
    $(".nav-trigger").toggleClass("active");
    $(".sm-menu").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".open-side-cart").on("click", function () {
    $(".overlayCart").toggleClass("active");
    $(".left-cart-container").toggleClass("active");
    $("body").toggleClass("overflow");
  });

  $(".overlayCart").on("click", function () {
    $(".overlayCart").removeClass("active");
    $(".left-cart-container").removeClass("active");
    $("body").removeClass("overflow");
  });

  if ($(".home-header").length != 0) {
    var swiper = new Swiper(".home-header .swiper-container", {
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  if ($(".productPage").length != 0) {
    $(".productPage .owl-carousel").owlCarousel({
      items: 1,
      loop: false,
      center: true,
      margin: 10,
      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: "URLHash",
      rtl: true,
      loop: true,
    });
  }

  //footer accordion
  if ($(window).width() < 992) {
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $(".foot-links button").on("click", function () {
    $(this).toggleClass("trans");
    $(this).parent().parent().siblings().find(".collapse").collapse("hide");
    $(this).parent().parent().siblings().find("button").removeClass("trans");
  });
  $(window).on("load", function () {
    $("body").removeClass("overflow");
    $(".loader").fadeOut(400, function () {
      $(this).remove();
    });
  });
});
