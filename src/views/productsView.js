class ProductsView {
  parentEl = document.querySelector(".products-show");
  productsShow = document.querySelector(".products-show__mug");

  createImg(image, name, price) {
    for (let i = 0; i < 10; i++) {
      const markup = `
      <div class="products-show__mug">
          <span class="products-show__promo">
              on sale.
          </span>
          <button class="products-show__button">
          Explore Mug
          </button>
          <img
            src="${image}"
            alt=""
            class="products-show__img"
            />
          <span class="products-show__name">${name}</span>
          <span class="products-show__price">${price}</span>
      </div>
      `;

      this.parentEl.insertAdjacentHTML("afterbegin", markup);
    }
  }
}

export default new ProductsView();
