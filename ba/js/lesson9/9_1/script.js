"use strict";

//Task 1
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

class playlistHTML {
  constructor(playlist) {
    this.playlist = playlist;
  }
  playListToHTML() {
    const ol = document.createElement("ol");
    document.body.appendChild(ol);
    for (let item of this.playlist) {
      ol.appendChild(document.createElement("li"));
    }
    let liArr = document.querySelectorAll("li");
    [].map.call(liArr, (item, i) => {
      item.innerHTML = `Author: ${this.playlist[i].author}, Song: ${this.playlist[i].song}`;
    });
  }
}

let myPlayList = new playlistHTML(playList);

myPlayList.playListToHTML();


