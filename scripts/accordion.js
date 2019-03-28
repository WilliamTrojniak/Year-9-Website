var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      if(document.getElementById("lastAccordion") == this) {
        this.style.borderRadius = "0px 0px 30px 30px";
      }
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";

      if(document.getElementById("lastAccordion") == this){
        this.style.borderRadius = "0px";
      }
    } 
  });
}