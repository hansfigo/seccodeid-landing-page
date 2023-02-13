
const hamburger = document.getElementById("navbar-anchor");

let isClicked = true;


function Open() {
  hamburger.classList.toggle("h-64")
  hamburger.classList.toggle("border-t-2")
  // if (isClicked) {
  //   hamburger.classList.remove("h-[0px]");
  //   hamburger.classList.add("h-full");
  //   isClicked = false;
  // } else {
  //   hamburger.classList.add("h-[0px]");
  //   isClicked = true;
  // }

}


