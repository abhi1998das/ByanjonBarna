$(document).ready(function () {
  var $default2 = $("#default2");
  $(window).scroll(function () {
    if (
      $(this).scrollTop() > 100 &&
      $default2.hasClass("navbar-light bg-light default2")
    ) {
      $default2
        .removeClass("navbar-light bg-light default2")
        .addClass("navbar-dark bg-dark fixed-top");
    } else if (
      $(this).scrollTop() <= 100 &&
      $default2.hasClass("navbar-dark bg-dark fixed-top")
    ) {
      $default2
        .removeClass("navbar-dark bg-dark fixed-top")
        .addClass("navbar-light bg-light default2");
    }
  }); //scroll
});

$(document).ready(function () {
  var $default3 = $("#nav-size");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100 && $default3.hasClass("container-fuil")) {
      $default3.removeClass("container-fuil").addClass("container");
    } else if ($(this).scrollTop() <= 100 && $default3.hasClass("container")) {
      $default3.removeClass("container").addClass("container-fuil");
    }
  }); //scroll
});

jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 100) {
    jQuery("#logo-small").css("display", "block");
  } else {
    jQuery("#logo-small").css("display", "none");
  }
});
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 100) {
    jQuery("#nav-size").css("display", "block");
    jQuery("#nav-size-small").css("display", "none");
  } else {
    jQuery("#nav-size").css("display", "block");
    jQuery("#nav-size-small").css("display", "none");
  }
});
