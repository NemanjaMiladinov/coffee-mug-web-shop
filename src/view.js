class Slider {
  next = document.querySelector(".featured__slider--next");

  before = document.querySelector(".featured__slider--before");

  sliderProducts = document.querySelectorAll(".slider-products");

  sliderButtons = document.querySelectorAll(".slider-btn");

  initialPosition() {
    for (let i = 0; i < this.sliderProducts.length; i++) {
      this.sliderProducts[i].style.transform = `translateX(${i * 330}px)`;
      this.sliderProducts[i].style.transition = "all 1s";
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

    // this.next.addEventListener("click", (e) => {
    //   console.log(e);
    //   if (e.target.textContent.includes("navigate_next")) {
    //     console.log("move slider next");
    //     next();
    //     return;
    //   }
    //   if (e.target.textContent.includes("navigate_before")) {
    //     console.log("move slider before");
    //     before();
    //     return;
    //   }
    //   // handler();
    // });
  }

  getQuery() {
    return this.sliderProducts;
  }
}
export default new Slider();
