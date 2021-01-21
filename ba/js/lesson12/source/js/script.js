"use strict";

$(document).ready(function () {
  $(".my-slider").slick({
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: false,
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
$(".slider__wrapper").appendTo($(".container"));
$(".my-slider").appendTo($(""));
$("<div/>").addClass("mask").appendTo($(".slider__wrapper"));
$("<h3/>")
  .addClass("mask__header")
  .text("Apex Magazine June Issue")
  .appendTo($(".mask"));
$("<p/>").addClass("mask__text").text("by Fabrizio Morra").appendTo($(".mask"));

$("<div/>").addClass("triangle").appendTo($(".container"));
$("<div/>").addClass("cross").appendTo($(".container"));
/* let slideH = $(".slide").outerHeight();
let slideW = $(".slide").outerWidth();
$(".mask").height = slideH;
$(".mask").width = slideW;
 */
