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
  $(".lang a").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("ar en");
  });
  try {
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
  } catch (err) {}

  try {
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
  } catch (err) {}
  try {
    $(".about-section .ourProject .owl-carousel").owlCarousel({
      loop: true,
      responsiveClass: true,
      rtl: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
        },
      },
      navText: [
        "<i class='fa fa-chevron-right'></i>",
        "<i class='fa fa-chevron-left'></i>",
      ],
    });
    $(".about-section .ourClients .owl-carousel").owlCarousel({
      loop: true,
      responsiveClass: true,
      rtl: true,
      margin: 10,
      responsive: {
        0: {
          items: 2,
          nav: true,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 6,
          nav: true,
          loop: false,
        },
      },
      navText: [
        "<i class='fa fa-chevron-right'></i>",
        "<i class='fa fa-chevron-left'></i>",
      ],
    });
  } catch (err) {}
  try {
    var containerEl = document.querySelector(".profile-section .sections");
    var mixer = mixitup(containerEl, {
      animation: {
        duration: 250,
        nudge: true,
        reverseOut: false,
        effects: "fade translateZ(-100px)",
      },
    });
    document.querySelector(".profile-section .selectPage .first").click();
  } catch (err) {}
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
