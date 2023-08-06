import { URL } from "../config.js";

export const State = {
  productImages: [],
  productName: [],
  productPrice: [],
  store: 10,
};

export const getData = async () => {
  try {
    const request = new Request(URL);

    const response = await fetch(request);

    const data = await response.json();
    // console.log(data);

    // set state for product card (more products)
    const [results] = data.products;
    State.productImages.push(results.imagePath);
    State.productName.push(results.productName);
    State.productPrice.push(results.productPrice);

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
console.log(State);
