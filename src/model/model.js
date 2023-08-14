import { URL } from "../config.js";

export let State = {
  products: [],
};

export const getData = async () => {
  try {
    const request = new Request(URL);

    const response = await fetch(request);

    const data = await response.json();

    // set state for products
    data.products.map((element) => {
      // console.log(element);
      State.products.push(element);
    });

    // set state for product card (more products)
    // console.log(State);

    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
console.log(State);
