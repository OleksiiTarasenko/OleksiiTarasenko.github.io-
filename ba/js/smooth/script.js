"use strict";
$(document).ready(function () {
  $(".nav__link").on("click", function () {
    let scrollTop = $(this).attr("href");
    let top = $(scrollTop).offset().top;
    $("html, body").animate(
      {
        scrollTop: top,
      },
      3000
    );
  });

  $("button[data-cat]").on("click", function () {
    let category = $(this).data("cat");
    if (category != "all") {
      console.log($("." + category), category);
      $(".news__block").hide();
      $("." + category).show();
    } else {
      $(".news__block").show();
    }
  });
});
