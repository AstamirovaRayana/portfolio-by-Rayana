
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

document.getElementById('scrollToTop').addEventListener('click', function() {
  window.scrollTo(0, 0);
});

let sources = [
	'https://orig00.deviantart.net/1dfd/f/2018/263/1/f/doro_by_kuvshinov_ilya-dcnbgw3.jpg',
	'https://orig00.deviantart.net/edd6/f/2018/170/3/5/depth_of_field_by_kuvshinov_ilya-dcetf0p.jpg',
	'https://orig00.deviantart.net/91c3/f/2018/170/1/9/boushi_by_kuvshinov_ilya-dcetfrj.jpg',
	'https://orig00.deviantart.net/1cf2/f/2018/263/6/7/uesaka_sumire_album_cover_illustration_by_kuvshinov_ilya-dcnbfu8.jpg',
	'https://orig00.deviantart.net/1dc6/f/2018/170/3/0/earring_by_kuvshinov_ilya-dceteuz.jpg',
	'https://orig00.deviantart.net/3171/f/2018/170/0/5/hayashi_by_kuvshinov_ilya-dcetah7.jpg',
	'https://orig00.deviantart.net/dc3b/f/2018/170/7/f/rose_by_kuvshinov_ilya-dcetaqj.jpg',
	'https://img00.deviantart.net/e978/i/2018/170/0/f/sanpo_by_kuvshinov_ilya-dceta26.jpg',
	'https://orig00.deviantart.net/bf7b/f/2018/170/9/2/my_artwork_collection_momentary_reprinted_by_kuvshinov_ilya-dcetaxx.jpg',
	'https://orig00.deviantart.net/9f20/f/2018/050/2/b/twin_tails_by_kuvshinov_ilya-dc3q77o.jpg'
]

let imgTag,
	clonedTag

for (let i = 0; i < sources.length; i++) {
	imgTag = document.createElement('img')
	imgTag.src = sources[i]
	if (i == 0) imgTag.classList.add('active')
	clonedTag = imgTag.cloneNode(true)
	document.querySelector('.page-left').appendChild(imgTag)
	document.querySelector('.page-right').appendChild(clonedTag)
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

