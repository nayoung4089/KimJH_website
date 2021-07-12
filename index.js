var toggleBtn = document.querySelector('.navbar__toggleBtn');
var menu = document.querySelector('.navbar__menu');
var icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});


// var first = document.getElementById("first");
// var second =document.getElementById("second");
// var third = document.getElementById("third");
// var defirst = document.querySelector('.details-first');
// var desecond = document.querySelector('.details-second');
// var dethird = document.querySelector('.details-third');

// first.addEventListener("click", function(){
//     defirst.style.display="block";
//     desecond.style.display="none";
//     dethird.style.display="none";

// });
// second.addEventListener("click", function(){
//     desecond.style.display="block";
//     dethird.style.display="none";
//     defirst.style.display="none";
// });
// third.addEventListener("click", function(){
//     dethird.style.display="block";
//     desecond.style.display="none";
//     defirst.style.display="none";
// });