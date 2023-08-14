class ProductsView {
  parentEl = document.querySelector(".products-show");
  productsShow = document.querySelector(".products-show__mug");

  createProducts(product) {
    product.map((item) => {
      const markup = `
      <div class="products-show__mug">
          <span class="products-show__promo">
              on sale.
          </span>
          <button class="products-show__button">
            Explore Mug
          </button>
          <img
            src="${item.imagePath}"
            alt=""
            class="products-show__img"
            />
          <span class="products-show__name">${item.productName}</span>
          <span class="products-show__price">${"$"}${item.productPrice}</span>
      </div>
      `;
      this.parentEl.insertAdjacentHTML("beforeend", markup);
    });
  }
}

export default new ProductsView();
