class Slider {
  next = document.querySelector(".featured__slider--next");

  before = document.querySelector(".featured__slider--before");

  sliderProducts = document.querySelectorAll(".slider-products");

  sliderButtons = document.querySelectorAll(".slider-btn");

  initialPosition(products) {
    for (let i = 0; i < products.length; i++) {
      products[i].style.transform = `translateX(${i * 330}px)`;
      products[i].style.transition = "all 1s";
    }
  }

  eventhandler(next, before) {
    this.sliderButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // if its next
        if (e.target.textContent.includes("navigate_next")) {
          console.log("move slider next");
          next();
          return;
        }
        // if its before
        if (e.target.textContent.includes("navigate_before")) {
          console.log("move slider before");
          before();
          return;
        }
      });
    });
  }
  getQuery(products) {
    return products;
  }
}
export default new Slider();
