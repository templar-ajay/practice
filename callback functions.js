"use strict";
console.log("learn CallBack Functions");

let Gd = document.getElementById("gd");

const Gods = [
  { name: "Har Har Mahadev", type: "Bhagwaan" },
  { name: "Bajrang Bali", type: "Bhagwaan" },
];
function enrollGod(person, Callback) {
  setTimeout(function () {
    Gods.push(person);
    console.log(`${person.name} has become a God`);
    Callback();
  }, 3000);
}

function summonGods() {
  setTimeout(function () {
    let str = "";
    Gods.forEach(function (god) {
      str += `<li> ${god.name}</li>`;
    });
    Gd.innerHTML = str;
  }, 7000);
}

enrollGod({ name: "Ajay", type: "Manusya" }, summonGods);
