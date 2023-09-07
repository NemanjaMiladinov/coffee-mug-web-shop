import { getData, State } from "./model/model.js";
import featuredView from "./views/featuredView.js";
import productsView from "./views/productsView.js";
import sliderView from "./views/sliderView.js";
import Slider from "./views/sliderView.js";

let nextSlide = 0;
// slider control for next click
const sliderNext = () => {
  console.log("next");
  const products = document.querySelectorAll(".slider-products");

  nextSlide++;

  // get element from view module
  // const products = Slider.getQuery();

  // slider animation
  for (let i = 0; i < products.length; i++) {
    products[i].style.transform = `translateX(${[i - nextSlide] * 330}px)`;

    if (nextSlide >= products.length) {
      console.log("stop slider animation");
      nextSlide = products.length - 1;
      return;
    }
  }
  console.log(nextSlide);
  console.log(products.length);
};
// slider control for previus click
const sliderBefore = () => {
  console.log("before");

  const products = document.querySelectorAll(".slider-products");

  nextSlide--;

  nextSlide = Math.max(nextSlide, 0);

  for (let i = 0; i < products.length; i++) {
    products[i].style.transform = `translateX(${(i - nextSlide) * 330}px)`;
  }
};

const getState = async () => {
  console.log("-- STATE CONTROLLER --");

  // Need this to get information about state object
  const data = await getData();
  // console.log(data);

  console.log(State);

  // productsView.renderProducts(State.products);
  productsView.createProducts(State.products);
  // console.log(productsView.createProducts());

  featuredView.getState(State.products);
  featuredView.createProducts(State.products);
};

const fireEvent = async () => {
  Slider.eventhandler(sliderNext, sliderBefore);
};
getState();
fireEvent();
