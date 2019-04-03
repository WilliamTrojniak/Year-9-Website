var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n+slideIndex <= slides.length && n+slideIndex >= 1) {
    showSlides(slideIndex += n);
  }

}


function showSlides(n) {
  var i;
	var slides = document.getElementsByClassName("mySlides");
  slideIndex = n;
	for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none";  
	}
  slides[slideIndex-1].style.display = "block";  
	
}


function updatePage() {
  var firstPage = document.getElementsByClassName("firstSlideElement");
  var secondPage = document.getElementsByClassName("secondSlideElement");
  var thirdPage = document.getElementsByClassName("thirdSlideElement");
}