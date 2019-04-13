var slideIndex = 1;
showSlides(slideIndex);
updatePageContent();

function plusSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n+slideIndex <= slides.length && n+slideIndex >= 1) {
    showSlides(slideIndex += n);
    updatePageContent();
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


function updatePageContent() {
  var firstPage = document.getElementsByClassName("firstSlideElement");
  var secondPage = document.getElementsByClassName("secondSlideElement");
  var thirdPage = document.getElementsByClassName("thirdSlideElement");
  var pages = [firstPage, secondPage, thirdPage];

// Hide all elements from all pages
  for(i = 0; i < pages.length; i++){ 
    for(t = 0; t < pages[i].length; t++){
      pages[i][t].style.display = "none";
    }
  }

//Show active page elements
  var activePage = slideIndex-1;
  for(i = 0; i < pages[activePage].length; i++){
    pages[activePage][i].style.display = "block";
  }

  var slideButtonBack = document.getElementsByClassName("slideprev");
  var slideButtonForward = document.getElementsByClassName("slidenext")

  slideButtonBack[0].style.display = "block";
  slideButtonForward[0].style.display = "block";

  if(slideIndex == 1){
    slideButtonBack[0].style.display = "none";
  }else if(slideIndex == 3){
    slideButtonForward[0].style.display = "none";
    
  }
  
}