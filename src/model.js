export const State = {
  productName: [],
  productPrice: [],
  images: [],
};

class Product {
  product = 10;
  url = "src/backend/product.json";

  async fetchProducts() {
    return fetch(this.url)
      .then((response) => {
        if (!response.ok) {
          console.log("BAD RESPONSE");
          return;
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data.products);
        for (let i = 0; i < 10; i++) {
          const [products] = data.products;
          State.productName.push(products.productName);
          State.productPrice.push(products.productPrice);
          State.images.push(products.imagePath);
        }
      })
      .catch((err) => {
        throw new Error(`${err}`);
      });
  }
}
export default new Product();
