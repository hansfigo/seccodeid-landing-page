
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

class MyElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title');
    const img = this.getAttribute('img');
    this.innerHTML = `
    <div class="m-20 w-[240px] h-[100px] overflow-hidden rounded-md bg-white shadow-md md:mt-0 md:mr-4 md:ml-2">
    <div class="overflow-hidden max-w[100px] max-w-[230px]">
    <img class="w-full h-auto" src=${img} alt="" />
    </div>

    <div class="px-4">
      <p class="pt-4 font-medium">${title}</p>
      <p class="pt-1 font-light">Sunday, 26 September 2023</p>
    </div>
  </div>`;
  }
}


customElements.define('my-element', MyElement);
