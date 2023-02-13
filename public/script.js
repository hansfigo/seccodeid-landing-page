
const hamburger = document.getElementById("navbar-anchor");
const hambIcon = document.getElementById("hamb-ic");
const crossIcon = document.getElementById("cross-ic");

let isClicked = false;


function Open() {

  hamburger.classList.toggle("h-64")
  hamburger.classList.toggle("border-t-2")

  if (!isClicked) {
    hambIcon.classList.add("hidden")
    crossIcon.classList.remove("hidden")
    isClicked = true;
  } else {
    hambIcon.classList.remove("hidden")
    crossIcon.classList.add("hidden")
    isClicked = false;
  }
  // if (isClicked) {
  //   hamburger.classList.remove("h-[0px]");
  //   hamburger.classList.add("h-full");
  //   isClicked = false;
  // } else {
  //   hamburger.classList.add("h-[0px]");
  //   isClicked = true;
  // }

}
