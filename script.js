let colo = document.getElementById('con');
let photo = document.getElementById('img');
let photo0 = document.getElementById('photo0');
let photo1 = document.getElementById('photo1');
let photo2 = document.getElementById('photo2');
let photo3 = document.getElementById('photo3');
let photo4 = document.getElementById('photo4');


photo0.addEventListener('click',function () {
    photo.src = "pt/0.png"
    colo.style.background = "#000"
})
photo1.addEventListener('click',function () {
    photo.src = "pt/1.png";
    colo.style.background = "#247ec9"
})
photo2.addEventListener('click',function () {
    photo.src = "pt/2.png";
    colo.style.background = "#1e1e1e"
})
photo3.addEventListener('click',function () {
    photo.src = "pt/3.png";
    colo.style.background = "#c79653"
})
photo4.addEventListener('click',function () {
    photo.src = "pt/4.png";
    colo.style.background = "#c82525"
})


let navbar = document.getElementById('navbar');
let bara = document.getElementById('menu');
let Close = document.getElementById('cancle');
    

bara.addEventListener('click', function () {
    navbar.classList.add('active');
});
Close.addEventListener('click',function(){
    navbar.classList.remove('active');
})