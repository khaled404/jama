$(function () {
  $(".nav-trigger , .sm-menu   , .sm-menu a").on("click", function () {
    $(".nav-trigger").toggleClass("active");
    $(".sm-menu").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(" .sm-menu a").on("click", function () {
    $(".nav-trigger").toggleClass("active");
    $(".sm-menu").toggleClass("active");
    $("body").toggleClass("overflow");
  });

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
    $("html").css("overflow-y", "auto");
    $(".loader").fadeOut(400, function () {
      $(this).remove();
    });
  });
});