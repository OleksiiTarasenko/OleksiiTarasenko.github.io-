"use strict";

$(document).ready(function () {
  $(".my-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
  });
});

$("<div/>").addClass("container").appendTo($("body"));
$("<h4/>")
  .text("our featured work")
  .css({
    "text-transform": "uppercase",
    "text-align": "center",
    "margin-bottom": "20px",
  })
  .appendTo($(".container"));
$(".my-slider").appendTo($(".container"));
$("<h1/>")
  .text("We create engaging experiences through creativity & craft")
  .css({
    "text-transform": "uppercase",
    "font-size": "4rem",
    "text-align": "center",
    "margin-bottom": "50px",
    padding: "0 100px",
  })
  .appendTo($(".container"));
$(".my-slider").appendTo($(".container"));
$("<div/>").addClass("triangle").appendTo($(".container"));
$("<div/>").addClass("cross").appendTo($(".container"));
