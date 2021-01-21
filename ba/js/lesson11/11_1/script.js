"use strict";

//Task 1
class ShopItem {
  constructor(
    title = "FarCry 4",
    release = "Nov 17, 2014",
    rating = "7.8",
    description = "In Far Cry 4, players find themselves in Kyrat, a breathtaking, perilous and wild region of the Himalayas struggling under the regime of a despotic self-appointed king.",
    price = "59.96",
    discount = "20"
  ) {
    this.title = title;
    this.release = release;
    this.rating = rating;
    this.description = description;
    this.price = price;
    this.discount = discount;
  }
  display() {
    let title = this.title;
    let release = this.release;
    let rating = this.rating;
    let description = this.description;
    let price = this.price;
    let discount = this.discount;

    (function ($, undefined) {
      $("<div/>").addClass("container").appendTo($("body"));
      $("<div/>").addClass("tabs").appendTo($(".container"));
      $("<div/>").addClass("tabs__header").appendTo($(".tabs"));
      $("<ul/>").addClass("tabs__list").appendTo($(".tabs__header"));
      const tabsHeaderContent = [
        { title: "information" },
        { title: "ratings info" },
        { title: "where to buy" },
      ];
      for (let i = 0; i <= 2; i++) {
        let tab = $("<li/>")
          .addClass(`tabs__item tabs__item_${i}`)
          .appendTo($(".tabs__list"))
          .append($("<span/>").text(tabsHeaderContent[i].title));
        if (!i) tab.addClass("tab_active");
        tab.click(function (event) {
          let activeTabNumber = [...$(".tabs__item")].indexOf(event.target);
          $(".tabs__item").removeClass("tab_active");
          $(event.target).addClass("tab_active");
          $(".tabs__info").hide();
          $([...$(".tabs__info")][activeTabNumber]).show();
        });
      }
      $("<div/>").addClass("tabs__content").appendTo($(".tabs"));
      for (let i = 0; i <= 2; i++) {
        $("<div/>")
          .addClass(`tabs__info tabs__info_${i}`)
          .appendTo($(".tabs__content"));
        if (i) {
          $(`.tabs__info_${i}`).hide();
        }
      }
      $(".tabs__info_0").append($("<div/>").addClass("tabs__image-block"));
      $(".tabs__image-block").append($("<div/>").addClass("tabs__image"));
      $(".tabs__image-block").append($("<ul/>").addClass("tabs__rating-stars"));
      for (let i = 0; i <= 4; i++) {
        let star = $("<li/>")
          .addClass(`star`)
          .append('<i class="fas fa-star"></i>')
          .appendTo($(".tabs__rating-stars"));
        if (i <= parseFloat(rating) / 2) {
          star.addClass("active");
        }
      }
      $(".tabs__info_0").append($("<div/>").addClass("tabs__info-block"));
      $(".tabs__info-block").append(
        $("<div/>").addClass("tabs__headers-block")
      );
      $(".tabs__headers-block").append($("<div/>").addClass("tabs__headers"));
      $(".tabs__headers").append($("<h1/>").text(title).addClass("header"));
      $(".tabs__headers").append(
        $("<h3/>").text(`First released ${release}`).addClass("subheader")
      );
      $(".tabs__headers-block").append($("<div/>").addClass("headers__rating"));

      $("<ul/>").addClass("rating__list").appendTo($(".headers__rating"));
      let ratingColor = parseInt(rating) > 5 ? "#13e18c" : "red";
      for (let i = 0; i < 8 * rating; i++) {
        $("<li/>")
          .css({
            display: "block",
            width: ".2em",
            height: ".2em",
            background: ratingColor,
            position: "absolute",
            top: "57%",
            left: "47%",
            margin: "-.4em 0 0 -.1em",
            transform: `rotate(${i * 4.5}deg) translateY(-1.86em)`,
          })
          .appendTo($(".rating__list"));
      }

      $(".headers__rating").append(
        $("<span/>").text(rating).addClass("rating__number")
      );

      $(".tabs__info-block").append(
        $("<div/>").text(description).addClass("tabs__description")
      );
      $(".tabs__info-block").append($("<div/>").addClass("tabs__footer"));
      $(".tabs__footer").append($("<div/>").addClass("tabs__money"));
      $(".tabs__money").append(
        $("<p/>").addClass("tabs__discount").text(`${discount}% off!`)
      );
      $(".tabs__money").append(
        $("<p/>").addClass("tabs__price").text(`${price}$`)
      );
      $(".tabs__footer").append(
        $("<button/>").addClass("buy-now").text(`buy it now`)
      );
    })(jQuery);
  }
}

const farCry = new ShopItem();
farCry.display();
