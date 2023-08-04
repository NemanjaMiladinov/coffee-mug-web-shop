import productsView from "./views/productsView.js";
import Slider from "./views/sliderView.js";

let nextSlide = 0;
// slider control for next click
const sliderNext = () => {
  console.log("next");
  nextSlide++;

  // get element from view module
  const products = Slider.getQuery();

  // slider animation
  for (let i = 0; i < products.length; i++) {
    products[i].style.transform = `translateX(${[i - nextSlide] * 330}px)`;

    if (nextSlide >= products.length) {
      console.log("stop slider animation");
      nextSlide = products.length - 1;
      return;
    }
  }
};
// slider control for previus click
const sliderBefore = () => {
  console.log("before");

  nextSlide--;

  const products = Slider.getQuery();

  nextSlide = Math.max(nextSlide, 0);

  for (let i = 0; i < products.length; i++) {
    products[i].style.transform = `translateX(${(i - nextSlide) * 330}px)`;
  }
};

import Product, { State } from "./model.js";
const fireEvent = async () => {
  // set position for every element inside slider
  Slider.initialPosition();

  // control events and set arguments to be functions
  Slider.eventhandler(sliderNext, sliderBefore);

  // get data from "sever" api call
  await Product.fetchProducts();

  // call products state
  console.log(State);

  // generate markup
  // productsView.createProducts(State.images);
  productsView.generateMarkup(State.images);
};

fireEvent();
