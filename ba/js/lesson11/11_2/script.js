"use strict";

//Task 2
class Calculator {
  constructor() {
    this.term = 0;
    this.operator = 0;
    this.result = 0;
  }
  on() {
    let result = this.result;
    let term = this.term;
    let operator = this.operator;
    let memo = 0;
    (function ($, undefined) {
      $("<div/>").addClass("container").appendTo($("body"));
      $("<div/>").addClass("calculator").appendTo($(".container"));
      $("<div/>").addClass("display").appendTo($(".calculator"));
      $("<span/>")
        .addClass("display__digits")
        .append(result)
        .appendTo($(".display"));
      $("<div/>").addClass("keyboard").appendTo($(".calculator"));
      $("<div/>").addClass("keysNum").appendTo($(".keyboard"));
      $("<div/>").addClass("keysOper").appendTo($(".keyboard"));
      for (let i = 9; i >= 0; i--) {
        $("<button/>")
          .addClass(`key key_${i}`)
          .append(`${i}`)
          .click(function () {
            console.log(term, String(term).length);
            if (String(term).length < 18) {
              term = !term ? i : term + String(i);
              $(".display__digits").text(term);
            }
          })
          .appendTo($(".keysNum"));
      }

      $("<button/>")
        .addClass(`key key_dot`)
        .append(".")
        .click(function () {
          if (String(term).indexOf(".") == -1) {
            term = !term ? "." : term + ".";
            $(".display__digits").text(term);
          }
        })
        .appendTo($(".keysNum"));

      $("<button/>")
        .addClass(`key key_db0`)
        .append("00")
        .click(function () {
          term = !term ? term : term + "00";
          $(".display__digits").text(term);
        })
        .appendTo($(".keysNum"));

      for (let sign of ["/", "*", "-", "+"]) {
        $("<button/>")
          .addClass(`key key_operator key_${sign}`)
          .append(`${sign}`)
          .click(function () {
            operator = sign;
            memo = term;

            term = 0;
            $(".display__digits").text(term);
          })
          .appendTo($(".keysOper"));
      }
      $("<button/>")
        .addClass(`key key_operator key_=`)
        .append(`=`)
        .click(function () {
          switch (operator) {
            case "+":
              result = +term + +memo;
              break;
            case "-":
              result = +memo - +term;
              break;
            case "/":
              result = +memo / +term;
              break;
            case "*":
              result = +memo * +term;
              break;
          }
          $(".display__digits").text(result);
          memo = 0;
          term = 0;
        })
        .appendTo($(".keysOper"));
      $("<button/>")
        .addClass(`key key_operator key_C`)
        .append(`C`)
        .click(function () {
          term = 0;
          $(".display__digits").text(term);
        })
        .appendTo($(".keysOper"));
    })(jQuery);
  }
}

const mycalc = new Calculator();
mycalc.on();
