
const hamburger = document.getElementById("navbar-anchor");

let isClicked = true;


function Open() {
  if (isClicked) {
    hamburger.classList.remove("hidden");
    isClicked = false;
  } else {
    hamburger.classList.add("hidden");
    isClicked = true;
  }

}


