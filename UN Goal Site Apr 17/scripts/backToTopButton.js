window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("backToTopBttn").style.display = "block";
	} else {
		document.getElementById("backToTopBttn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}