import sliderView from "./sliderView.js";

class FeaturedView {
  parrentElement = document.querySelector(".featured__slider");

  getState(productsNumber) {
    console.log("hello from product view");
    console.log(productsNumber);
  }

  createProducts(products) {
    products.forEach((product, index) => {
      const markup = `
      <div class="slider-products ">
          <span class="slider-products__promo">
            best selling.
          </span>
          <button class="slider-products__button">Explore Mug</button>
          <img src="${product.imagePath}" alt="" class="slider-products__image">
          <span class="slider-products__name">${product.productName}</span>
          <span class="slider-products__price">$${product.productPrice}</span>
        </div>
      `;
      this.parrentElement.insertAdjacentHTML("beforeend", markup);

      const products = document.querySelectorAll(".slider-products");
      sliderView.initialPosition(products);
      sliderView.getQuery(products);
    });
  }
}

export default new FeaturedView();
