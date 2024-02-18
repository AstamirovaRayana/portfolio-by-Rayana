
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

let slider = document.querySelector('.slider');
let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button');
let slides = Array.from(slider.querySelectorAll('img'));
let slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

let slide = () => {
  let imageWidth = slider.clientWidth;
  let slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});






let slider1 = document.querySelector('.slider1');
let prevButton1 = document.querySelector('.prev-button1');
let nextButton1 = document.querySelector('.next-button1');
let slides1 = Array.from(slider1.querySelectorAll('img'));
let slideCount1 = slides1.length;
let slideIndex1 = 0;

prevButton1.addEventListener('click', () => {
  slideIndex1 = (slideIndex1 - 1 + slideCount1) % slideCount1;
  slide1();
});

nextButton1.addEventListener('click', () => {
  slideIndex1 = (slideIndex1 + 1) % slideCount1;
  slide1();
});

let slide1 = () => {
  let imageWidth1 = slider1.clientWidth;
  let slideOffset1 = -slideIndex1 * imageWidth1;
  slider1.style.transform = `translateX(${slideOffset1}px)`;
}

window.addEventListener('load', () => {
  slide1();
});


let slider2 = document.querySelector('.slider2');
let prevButton2 = document.querySelector('.prev-button2');
let nextButton2 = document.querySelector('.next-button2');
let slides2 = Array.from(slider2.querySelectorAll('img'));
let slideCount2 = slides2.length;
let slideIndex2 = 0;

prevButton2.addEventListener('click', () => {
  slideIndex2 = (slideIndex2 - 1 + slideCount2) % slideCount2;
  slide2();
});

nextButton2.addEventListener('click', () => {
  slideIndex2 = (slideIndex2 + 1) % slideCount2;
  slide2();
});

let slide2 = () => {
  let imageWidth2 = slider2.clientWidth;
  let slideOffset2 = -slideIndex2 * imageWidth2;
  slider2.style.transform = `translateX(${slideOffset2}px)`;
}

window.addEventListener('load', () => {
  slide2();
});







let slider3 = document.querySelector('.slider3');
let prevButton3 = document.querySelector('.prev-button3');
let nextButton3 = document.querySelector('.next-button3');
let slides3 = Array.from(slider3.querySelectorAll('img'));
let slideCount3 = slides3.length;
let slideIndex3 = 0;

prevButton3.addEventListener('click', () => {
  slideIndex3 = (slideIndex3 - 1 + slideCount3) % slideCount3;
  slide3();
});

nextButton3.addEventListener('click', () => {
  slideIndex3 = (slideIndex3 + 1) % slideCount3;
  slide3();
});

let slide3 = () => {
  let imageWidth3 = slider3.clientWidth;
  let slideOffset3 = -slideIndex3 * imageWidth3;
  slider3.style.transform = `translateX(${slideOffset3}px)`;
}

window.addEventListener('load', () => {
  slide3();
});



let slider4 = document.querySelector('.slider4');
let prevButton4 = document.querySelector('.prev-button4');
let nextButton4 = document.querySelector('.next-button4');
let slides4 = Array.from(slider4.querySelectorAll('img'));
let slideCount4 = slides4.length;
let slideIndex4 = 0;

prevButton4.addEventListener('click', () => {
  slideIndex4 = (slideIndex4 - 1 + slideCount4) % slideCount4;
  slide4();
});

nextButton4.addEventListener('click', () => {
  slideIndex4 = (slideIndex4 + 1) % slideCount4;
  slide4();
});

let slide4 = () => {
  let imageWidth4 = slider4.clientWidth;
  let slideOffset4 = -slideIndex4 * imageWidth4;
  slider4.style.transform = `translateX(${slideOffset4}px)`;
}

window.addEventListener('load', () => {
  slide4();
});   



let slider5 = document.querySelector('.slider5');
let prevButton5 = document.querySelector('.prev-button5');
let nextButton5 = document.querySelector('.next-button5');
let slides5 = Array.from(slider5.querySelectorAll('img'));
let slideCount5 = slides5.length;
let slideIndex5 = 0;

prevButton5.addEventListener('click', () => {
  slideIndex5 = (slideIndex5 - 1 + slideCount5) % slideCount5;
  slide5();
});

nextButton5.addEventListener('click', () => {
  slideIndex5 = (slideIndex5 + 1) % slideCount5;
  slide5();
});

let slide5 = () => {
  let imageWidth5 = slider5.clientWidth;
  let slideOffset5 = -slideIndex5 * imageWidth5;
  slider5.style.transform = `translateX(${slideOffset5}px)`;
}

window.addEventListener('load', () => {
  slide5();
});   






document.getElementById('scrollToTop').addEventListener('click', function() {
  window.scrollTo(0, 0);
});






var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
    // When someone clicks on a close button
    close[i].onclick = function(){

        // Get the parent of <span class="closebtn"> (<div class="alert">)
        var div = this.parentElement;

        // Set the opacity of div to 0 (transparent)
        div.style.opacity = "0";

        // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}
