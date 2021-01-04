const ul = document.createElement("ul");
document.body.appendChild(ul);

const activate = function (event) {
  for (let item of document.getElementsByTagName("li")) {
    item.classList.remove("active");
  }
  event.target.classList.add("active");
  let activeLiNumber;

  for (
    let item = 0;
    item < document.getElementsByTagName("li").length;
    item++
  ) {
    if (
      document.getElementsByTagName("li")[item].classList.contains("active")
    ) {
      activeLiNumber = item;
    }
  }
  for (let item of document.getElementsByTagName("p")) {
    item.classList.add("hide");
  }
  document.getElementsByTagName("p")[activeLiNumber].classList.remove("hide");
};

for (let i = 0; i < 3; i++) {
  ul.appendChild(document.createElement("li"));
}

let tabsArray = ["1st Tab", "2nd Tab", "3rd Tab"];
let liArr = document.querySelectorAll("li");
[].map.call(liArr, (item, i) => {
  item.innerHTML = tabsArray[i];
  item.onclick = activate;
});

for (let i = 0; i < 3; i++) {
  document.body.appendChild(document.createElement(`p`));
}

let textArray = [
  "It was October 2015 and the letter said Ismiraldha's mother, Siti Aslinda Binte Junaidi, had been arrested in the southern Chinese city of Shenzhen on suspicion of drug trafficking, and could face the death penalty.",
  "Ismiraldha was shocked. She said she had had little idea what her mother was doing in China, only that she had gone there looking for work, and while she cried along with her aunt at the news, the then 12-year-old still didn't truly understand what was going on.",
  "Almost five years later, Aslinda, now 35, and another Singaporean, 44-year-old Mohd Yusri Bin Mohd Yussof, were found guilty of drug trafficking and sentenced to death in July 2020.",
];
let pArr = document.querySelectorAll("p");
[].map.call(pArr, (item, i) => {
  item.innerHTML = textArray[i];
  if (i) {
    item.classList.add("hide");
  }
});
