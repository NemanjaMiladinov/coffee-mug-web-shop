import { State } from "./model.js";

class Product {
  constructor(productName, productPrice, productImage) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productImage = productImage;
  }

  create() {
    console.log("-- product create class --");
    const title = document.createElement("h1");
    title.textContent = this.productName;
    console.log(State);
  }
}

export const product = new Product();
