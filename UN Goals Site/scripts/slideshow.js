var slideIndex = 1;
var colours = [["#F2C744","#F2E7C4"],["#81D991","#ABD981"],["#027333","#03A65A"]];
var highContrast = false;

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

  // Update page colours
  var contentDivs = document.getElementsByClassName("contentDiv");
  var flipBoxes = document.getElementsByClassName("flip-box");
  var flipBoxFronts = document.getElementsByClassName("flip-box-front");
  var flipBoxBacks = document.getElementsByClassName("flip-box-back");
  if(!highContrast){
    for(i = 0; i < contentDivs.length; i++){
      contentDivs[i].style.borderColor = colours[slideIndex-1][0];
      contentDivs[i].style.backgroundColor = colours[slideIndex-1][1];
    }
    for(i = 0; i < flipBoxes.length; i++){
      flipBoxes[i].style.color = "#000";
    }
    for(i = 0; i < flipBoxFronts.length; i++){
      flipBoxFronts[i].style.backgroundColor = colours[slideIndex-1][0];
      flipBoxBacks[i].style.backgroundColor = colours[slideIndex-1][0];
    }
  }
  
}