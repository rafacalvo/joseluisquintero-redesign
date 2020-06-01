// Responsive menu
document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.navbar').classList.toggle('show'));

// Buttons active state
var header = document.getElementsByClassName("navbar");
var btn = header.getElementsByClassName("nav-link");
for (var i = 0; i < btn.length; i++) {
   btn[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active");
   current[0].className = current[0].className.replace(" active", "");
   this.className += " active";
   });
}