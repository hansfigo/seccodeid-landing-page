
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
    <div class=" w-[240px] min-h-[250px] overflow-hidden rounded-md bg-white shadow-md md:mt-0 md:mr-4 md:ml-2">
    <div class="min-h-[250px]">
    <img class="w-full h-auto" src=${img} alt="" />
    </div>

    <div class="px-4">
      <p class="pt-4 font-medium">${title}</p>
      <p class="">Sunday, 26 September 2023</p>
    </div>
  </div>`;
  }
}
customElements.define('event-card', MyElement);

class ClockIcon extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title');
    const img = this.getAttribute('img');
    this.innerHTML = `<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  `;
  }
}
customElements.define('clock-ic', ClockIcon);


