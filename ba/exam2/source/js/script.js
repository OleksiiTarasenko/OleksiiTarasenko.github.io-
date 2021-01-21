"use strict";

$(document).ready(function () {
  $(".header__slider").slick({
    infinite: true,
    dots: true,
    vertical: true,
    adaptiveHeight: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  /*  $(".news__slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
  }); */

  const menuItems = ["about us", "projects", "news", "contact"];
  for (let item of menuItems) {
    $("<li/>")
      .addClass("navi__item")
      .append(
        $("<a/>")
          .addClass("navi__link")
          .attr({ href: `#${item.split(" ").join("_")}`, title: `${item}` })
          .text(item.toUpperCase())
      )
      .appendTo($(".navi__list"));
  }

  $(".navi__item").prepend($("<span/>").addClass("navi__dot"));

  $(".navi__link").on("click", function (event) {
    $(".navi__dot").removeClass("filled");
    $(this).prev().addClass("filled");
    let scrollTop = $(this).attr("href");

    let top = $(scrollTop).offset().top;

    $("html, body").animate(
      {
        scrollTop: top,
      },
      1000,
      "linear"
    );
    event.preventDefault();
  });

  $(".scroll").on("click", function (event) {
    let top = $(".main").offset().top;
    $("html, body").animate(
      {
        scrollTop: top,
      },
      1000,
      "linear"
    );
    event.preventDefault();
  });

  const gallery = [
    {
      id: "100",
      alt: "building",
      keyword: "building",
      url: "./source/img/gallery-1.png",
    },
    {
      id: "101",
      alt: "building",
      keyword: "building",
      url: "./source/img/gallery-2.png",
    },
    {
      id: "102",
      alt: "building",
      keyword: "building",
      url: "./source/img/gallery-3.png",
    },
    {
      id: "103",
      alt: "building",
      keyword: "building",
      url: "./source/img/gallery-4.png",
    },
    {
      id: "104",
      alt: "building",
      keyword: "building",
      url: "./source/img/gallery-5.png",
    },
    {
      id: "105",
      alt: "building",
      keyword: "building",
      url: "./source/img/gallery-1.png",
    },
    {
      id: "106",
      alt: "building",
      keyword: "building",
      url: "./source/img/gallery-2.png",
    },
    {
      id: "107",
      alt: "building",
      keyword: "building",
      url: "./source/img/gallery-3.png",
    },
    {
      id: "120",
      alt: "life style",
      keyword: "life style",
      url: "./source/img/ls1.png",
    },
    {
      id: "121",
      alt: "life style",
      keyword: "life style",
      url: "./source/img/ls2.png",
    },
    {
      id: "122",
      alt: "life style",
      keyword: "life style",
      url: "./source/img/ls3.png",
    },
    {
      id: "123",
      alt: "life style",
      keyword: "life style",
      url: "./source/img/ls4.png",
    },
    {
      id: "124",
      alt: "life style",
      keyword: "life style",
      url: "./source/img/ls5.png",
    },
    {
      id: "125",
      alt: "life style",
      keyword: "life style",
      url: "./source/img/ls6.png",
    },
    {
      id: "126",
      alt: "life style",
      keyword: "life style",
      url: "./source/img/ls7.png",
    },
    {
      id: "127",
      alt: "life style",
      keyword: "life style",
      url: "./source/img/ls8.png",
    },
    {
      id: "110",
      alt: "christmas",
      keyword: "christmas",
      url: "./source/img/xmas1.jpg",
    },
    {
      id: "111",
      alt: "christmas",
      keyword: "christmas",
      url: "./source/img/xmas2.jpg",
    },
    {
      id: "112",
      alt: "christmas",
      keyword: "christmas",
      url: "./source/img/xmas3.jpg",
    },
    {
      id: "113",
      alt: "christmas",
      keyword: "christmas",
      url: "./source/img/xmas4.jpg",
    },
    {
      id: "114",
      alt: "christmas",
      keyword: "christmas",
      url: "./source/img/xmas5.jpg",
    },
    {
      id: "115",
      alt: "christmas",
      keyword: "christmas",
      url: "./source/img/xmas6.jpg",
    },
    {
      id: "116",
      alt: "christmas",
      keyword: "christmas",
      url: "./source/img/xmas7.jpg",
    },
    {
      id: "117",
      alt: "christmas",
      keyword: "christmas",
      url: "./source/img/xmas8.jpg",
    },
    {
      id: "130",
      alt: "aircraft",
      keyword: "aircraft",
      url: "./source/img/aircraft1.jpg",
    },
    {
      id: "131",
      alt: "aircraft",
      keyword: "aircraft",
      url: "./source/img/aircraft2.jpg",
    },
    {
      id: "132",
      alt: "aircraft",
      keyword: "aircraft",
      url: "./source/img/aircraft3.jpg",
    },
    {
      id: "133",
      alt: "aircraft",
      keyword: "aircraft",
      url: "./source/img/aircraft4.jpg",
    },
    {
      id: "134",
      alt: "aircraft",
      keyword: "aircraft",
      url: "./source/img/aircraft5.jpg",
    },
    {
      id: "135",
      alt: "aircraft",
      keyword: "aircraft",
      url: "./source/img/aircraft6.jpg",
    },
    {
      id: "136",
      alt: "aircraft",
      keyword: "aircraft",
      url: "./source/img/aircraft7.jpg",
    },
    {
      id: "137",
      alt: "aircraft",
      keyword: "aircraft",
      url: "./source/img/aircraft8.jpg",
    },
  ];

  class GalleryImage {
    constructor({ id, alt, keyword, url }) {
      this.id = id;
      this.alt = alt;
      this.keyword = keyword;
      this.url = url;
    }
    render() {
      let inner = `<div class="gallery__item">
      <a href="${this.url}" data-fancybox="gallery" data-caption="${this.id}"> 
      <img class = "gallery__image" src="${this.url}" alt="${this.alt}">
      </a></div>`;
      $(".gallery__wrapper").append(inner);
    }
  }

  function galleryUpdate(keyword) {
    $(".gallery__wrapper").empty();
    let category = $(this).text().toLowerCase() || keyword;
    let galleryArr = [...gallery];
    galleryArr = galleryArr.filter((item) => item.keyword == category);
    for (let elem of galleryArr) {
      let galleryImage = new GalleryImage(elem);
      galleryImage.render();
    }
  }

  galleryUpdate("building");
  $(".selector").on("click", galleryUpdate);

  /*  $(".contact__form").on("submit", function (event) {
    $(".alert").hide();
    $("#email").removeClass("wrong-format");
    let emailToTest = $("#email").val();
    if (emailToTest.indexOf("@") < 0) {
      return false;
    }
    let emailArr = emailToTest.split("@");
    event.preventDefault();
    let s = emailArr[1];
    if (s.indexOf(".") < 0) {
      /*  $("#email").addClass("wrong-format"); 
      $(".alert").show();
      return false;
    }
    return true;
  }); */

  $(".contact__form").on("submit", function (event) {
    event.preventDefault();
  });
  $(".contact__form").validate({
    rules: {
      name: {
        required: true,
        minlength: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {},
    errorElement: "div",
    errorLabelContainer: ".error",
  });
});
