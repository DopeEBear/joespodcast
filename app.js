// Typed animation for Hero Page //
new TypeIt(".typed", {
  strings: "The Corrupt Politician!",
  speed: 150,
  lifelike: true,
  startDelay: 3000,
  loop: false,
}).go();

// Animation for logo and nav-links //
var tl = gsap.timeline();

tl.fromTo('.logo', {
  delay: 1,
   x: -500,
   y: -500}, 
   {duration: 1,
    x: 0,
    y: 0})
.fromTo('.nav-links', {
  x: 500,
  y: 500}, 
  {duration: 1,
    x: 0,
    y: 0},
    '>-1')
.fromTo('.main-icon', {
  rotation: 0,
  opacity: 0,
}, {
  duration: 2,
  rotation: 360,
  opacity: 1,
}, '>+0.5');

// Toggle mobile navigation //
const openNavMenu = document.querySelector('.fa-bars');
const closeNavMenu = document.querySelector('.fa-times-circle');


openNavMenu.addEventListener('touchstart', function() {
  document.querySelector('.mobile-nav-links').style.visibility = "visible";
});

closeNavMenu.addEventListener('touchstart', function() {
  document.querySelector('.mobile-nav-links').style.visibility = "hidden";
});