/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* VARIABLES */
var fullItemList = document.getElementById("my-list");


/* EVENT LISTENERS */
if (fullItemList){
fullItemList.addEventListener("click", checkOffItem);  
}

/* FUNCTIONS */
function checkOffItem(clicked) {
  if (clicked.target.tagName == "LI"){
    clicked.target.classList.toggle("all-done");
  }
  
}