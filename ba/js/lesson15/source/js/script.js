"use strict";
let request;
let type;
let url;
let filmList;
class Film {
  constructor({ Title, Year, Poster, imdbID }) {
    this.title = Title;
    this.year = Year;
    this.poster = Poster;
    this.imdb = imdbID;
  }
}

const fetchAllMovies = function (pageNum) {
  $(".films").empty();
  $("ul.pagination").remove();
  request = $(".search__field").val();
  type = $('input[name="searchType"]:checked').val();

  url = `https://www.omdbapi.com/?s=${request}&type=${type}&apikey=11b1ce48`;
  let newurl = `${url}&page=${pageNum}`;

  const result = fetch(newurl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      $("<p/>")
        .addClass("total-results")
        .text(`Total results ${data.totalResults || 0}`)
        .prependTo(".films");

      if (data.totalResults != 0) {
        $("<ul/>")
          .addClass(`pagination pagination-${request}`)
          .appendTo(".container");
        for (let i = 1; i <= Math.floor(data.totalResults / 10) + 1; i++) {
          $("<li/>")
            .addClass("page")
            .text(i)
            .appendTo(".pagination")
            .click(function (event) {
              fetchAllMovies(i);
            });
        }
      }

      for (let item of data.Search) {
        let myFilm = new Film(item);
        $("<li/>")
          .addClass("films__item")
          .text(`${myFilm.title}`)
          .appendTo($(".films"))
          .append(
            $("<button/>")
              .text("Show Details")
              .click(function (event) {
                let urlDetails = `https://www.omdbapi.com/?i=${myFilm.imdb}&apikey=11b1ce48`;
                const result = fetch(urlDetails)
                  .then((response) => {
                    return response.json();
                  })
                  .then((data) => {
                    $(".film__details").remove();

                    $("<div/>")
                      .addClass("film__details")
                      .appendTo($(".container"));
                    $("<h2/>")
                      .addClass("film__title")
                      .text(`${data.Title}`)
                      .appendTo($(".film__details"));
                    $("<img/>")
                      .addClass("film__poster")
                      .attr({ src: data.Poster, alt: data.Title })
                      .appendTo($(".film__details"));
                    $("<p/>")
                      .text(`Released: ${data.Released}`)
                      .appendTo($(".film__details"));
                    $("<p/>")
                      .text(`Genre: ${data.Genre}`)
                      .appendTo($(".film__details"));
                    $("<p/>")
                      .text(`Director: ${data.Director}`)
                      .appendTo($(".film__details"));
                    $("<p/>")
                      .text(`Actors: ${data.Actors}`)
                      .appendTo($(".film__details"));
                    $("<p/>")
                      .text(`Runtime: ${data.Runtime}`)
                      .appendTo($(".film__details"));
                    $("<p/>")
                      .text(`Rating: ${data.imdbRating}`)
                      .appendTo($(".film__details"));
                    $("<p/>")
                      .text(`Plot: ${data.Plot}`)
                      .appendTo($(".film__details"));
                    $("<button/>")
                      .text("Add to Favourites")
                      .click(() => {
                        let id = Date.now();
                        localStorage.setItem(id, myFilm.imdb);
                      })
                      .appendTo(".film__details");
                  });
              })
          );
      }
    })
    .catch(function (err) {
      console.log("Fetch Error : ", err);
    });
  return false;
};

$(document).ready(function () {
  $("<div/>").addClass("container").appendTo($("body"));
  $("<form/>")
    .addClass("search")
    .attr({ type: "text", name: "searchItem" })
    .appendTo($(".container"))
    .submit(fetchAllMovies);

  $("<input/>")
    .addClass("search__field")
    .attr({ type: "text", name: "searchItem", placeholder: "Search..." })
    .val("")
    .appendTo($(".search"));
  $("<div/>").addClass("search__radios").appendTo($(".search"));
  $("<input/>")
    .addClass("search__type")
    .attr({
      type: "radio",
      name: "searchType",
      value: "movie",
      id: "movie",
      checked: "checked",
    })
    .appendTo($(".search__radios"));
  $("<label/>")
    .attr({
      for: "movie",
    })
    .text("Movie")
    .appendTo($(".search__radios"));

  $("<input/>")
    .addClass("search__type")
    .attr({ type: "radio", name: "searchType", value: "series", id: "series" })
    .appendTo($(".search__radios"));
  $("<label/>")
    .attr({
      for: "series",
    })
    .text("Series")
    .appendTo($(".search__radios"));
  $("<input/>")
    .addClass("search__type")
    .attr({
      type: "radio",
      name: "searchType",
      value: "episode",
      id: "episode",
    })
    .appendTo($(".search__radios"));
  $("<label/>")
    .attr({
      for: "episode",
    })
    .text("Episode")
    .appendTo($(".search__radios"));
  $("<button/>")
    .addClass("search__btn")
    .attr({ type: "submit" })
    .text("Search")
    .appendTo($(".search"));

  $("<ul/>").addClass("films").appendTo($(".container"));
});
