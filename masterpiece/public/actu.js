const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const burger = document.querySelector(".burger");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut });
tl.fromTo(
  hero,
  1.2,
  { width: "100%" },
  { width: "80%", ease: Power2.easeInOut }
);

// var comment = [
//   { name: "User One", date: "Today", body: "ceci est un commentaire" }
// ];

// for( var i=0; 1<comment.length;i++){
//   var html =
// };
