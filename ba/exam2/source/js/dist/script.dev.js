"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

$(document).ready(function () {
  $(".header__slider").slick({
    infinite: true,
    dots: true,
    adaptiveHeight: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
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

  var menuItems = ["about us", "projects", "news", "contact"];

  for (var _i = 0, _menuItems = menuItems; _i < _menuItems.length; _i++) {
    var item = _menuItems[_i];
    $("<li/>").addClass("navi__item").append($("<a/>").addClass("navi__link").attr({
      href: "#".concat(item.split(" ").join("_")),
      title: "".concat(item)
    }).text(item.toUpperCase())).appendTo($(".navi__list"));
  }

  $(".navi__item").prepend($("<span/>").addClass("navi__dot"));
  $(".navi__link").on("click", function (event) {
    $(".navi__dot").removeClass("filled");
    $(this).prev().addClass("filled");
    var scrollTop = $(this).attr("href");
    var top = $(scrollTop).offset().top;
    $("html, body").animate({
      scrollTop: top
    }, 1000, "linear");
    event.preventDefault();
  });
  $(".scroll").on("click", function (event) {
    var top = $(".main").offset().top;
    $("html, body").animate({
      scrollTop: top
    }, 1000, "linear");
    event.preventDefault();
  });
  var gallery = [{
    id: "100",
    alt: "building",
    keyword: "building",
    url: "./source/img/gallery-1.png"
  }, {
    id: "101",
    alt: "building",
    keyword: "building",
    url: "./source/img/gallery-2.png"
  }, {
    id: "102",
    alt: "building",
    keyword: "building",
    url: "./source/img/gallery-3.png"
  }, {
    id: "103",
    alt: "building",
    keyword: "building",
    url: "./source/img/gallery-4.png"
  }, {
    id: "104",
    alt: "building",
    keyword: "building",
    url: "./source/img/gallery-5.png"
  }, {
    id: "105",
    alt: "building",
    keyword: "building",
    url: "./source/img/gallery-1.png"
  }, {
    id: "106",
    alt: "building",
    keyword: "building",
    url: "./source/img/gallery-2.png"
  }, {
    id: "107",
    alt: "building",
    keyword: "building",
    url: "./source/img/gallery-3.png"
  }, {
    id: "120",
    alt: "life style",
    keyword: "life style",
    url: "./source/img/ls1.png"
  }, {
    id: "121",
    alt: "life style",
    keyword: "life style",
    url: "./source/img/ls2.png"
  }, {
    id: "122",
    alt: "life style",
    keyword: "life style",
    url: "./source/img/ls3.png"
  }, {
    id: "123",
    alt: "life style",
    keyword: "life style",
    url: "./source/img/ls4.png"
  }, {
    id: "124",
    alt: "life style",
    keyword: "life style",
    url: "./source/img/ls5.png"
  }, {
    id: "125",
    alt: "life style",
    keyword: "life style",
    url: "./source/img/ls6.png"
  }, {
    id: "126",
    alt: "life style",
    keyword: "life style",
    url: "./source/img/ls7.png"
  }, {
    id: "127",
    alt: "life style",
    keyword: "life style",
    url: "./source/img/ls8.png"
  }, {
    id: "110",
    alt: "christmas",
    keyword: "christmas",
    url: "./source/img/xmas1.jpg"
  }, {
    id: "111",
    alt: "christmas",
    keyword: "christmas",
    url: "./source/img/xmas2.jpg"
  }, {
    id: "112",
    alt: "christmas",
    keyword: "christmas",
    url: "./source/img/xmas3.jpg"
  }, {
    id: "113",
    alt: "christmas",
    keyword: "christmas",
    url: "./source/img/xmas4.jpg"
  }, {
    id: "114",
    alt: "christmas",
    keyword: "christmas",
    url: "./source/img/xmas5.jpg"
  }, {
    id: "115",
    alt: "christmas",
    keyword: "christmas",
    url: "./source/img/xmas6.jpg"
  }, {
    id: "116",
    alt: "christmas",
    keyword: "christmas",
    url: "./source/img/xmas7.jpg"
  }, {
    id: "117",
    alt: "christmas",
    keyword: "christmas",
    url: "./source/img/xmas8.jpg"
  }, {
    id: "130",
    alt: "aircraft",
    keyword: "aircraft",
    url: "./source/img/aircraft1.jpg"
  }, {
    id: "131",
    alt: "aircraft",
    keyword: "aircraft",
    url: "./source/img/aircraft2.jpg"
  }, {
    id: "132",
    alt: "aircraft",
    keyword: "aircraft",
    url: "./source/img/aircraft3.jpg"
  }, {
    id: "133",
    alt: "aircraft",
    keyword: "aircraft",
    url: "./source/img/aircraft4.jpg"
  }, {
    id: "134",
    alt: "aircraft",
    keyword: "aircraft",
    url: "./source/img/aircraft5.jpg"
  }, {
    id: "135",
    alt: "aircraft",
    keyword: "aircraft",
    url: "./source/img/aircraft6.jpg"
  }, {
    id: "136",
    alt: "aircraft",
    keyword: "aircraft",
    url: "./source/img/aircraft7.jpg"
  }, {
    id: "137",
    alt: "aircraft",
    keyword: "aircraft",
    url: "./source/img/aircraft8.jpg"
  }];

  var GalleryImage =
  /*#__PURE__*/
  function () {
    function GalleryImage(_ref) {
      var id = _ref.id,
          alt = _ref.alt,
          keyword = _ref.keyword,
          url = _ref.url;

      _classCallCheck(this, GalleryImage);

      this.id = id;
      this.alt = alt;
      this.keyword = keyword;
      this.url = url;
    }

    _createClass(GalleryImage, [{
      key: "render",
      value: function render() {
        var inner = "<div class=\"gallery__item\">\n      <a href=\"".concat(this.url, "\" data-fancybox=\"gallery\" data-caption=\"").concat(this.id, "\"> \n      <img class = \"gallery__image\" src=\"").concat(this.url, "\" alt=\"").concat(this.alt, "\">\n      </a></div>");
        $(".gallery__wrapper").append(inner);
      }
    }]);

    return GalleryImage;
  }();

  function galleryUpdate(keyword) {
    $(".gallery__wrapper").empty();
    var category = $(this).text().toLowerCase() || keyword;
    var galleryArr = [].concat(gallery);
    galleryArr = galleryArr.filter(function (item) {
      return item.keyword == category;
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = galleryArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elem = _step.value;
        var galleryImage = new GalleryImage(elem);
        galleryImage.render();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
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
        minlength: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {},
    errorElement: "div",
    errorLabelContainer: ".error"
  });
});