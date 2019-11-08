const header = document.querySelector("header");
const nav = document.querySelector("nav");
const section1 = document.querySelector(".section1");

const tl = new TimelineMax();

tl.fromTo(header, 1, { height: "0vh" }, { height: "110vh" });
