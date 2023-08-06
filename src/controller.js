import productsView from "./views/productsView.js";
import Slider from "./views/sliderView.js";
import { getData, State } from "./model/model.js";
import { product } from "./model/modelProduct.js";

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

const fireEvent = async () => {
  // set position for every element inside slider
  Slider.initialPosition();
  // control events and set arguments to be functions
  Slider.eventhandler(sliderNext, sliderBefore);
};
const getState = async () => {
  console.log("-- STATE CONTROLLER --");

  // Need this to get information about state object
  const data = await getData();
  console.log(data);
  productsView.createImg(
    State.productImages,
    State.productName,
    State.productPrice
  );

  // call products state
  console.log(State.productImages);
  console.log(State.productName);
  console.log(State.productPrice);
};

fireEvent();
getState();
