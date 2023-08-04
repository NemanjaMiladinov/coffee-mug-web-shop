class ProductsView {
  parentEl = document.querySelector(".products-show");

  generateMarkup(productImages) {
    for (const image of productImages) {
      const markup = `
        <div class="products-show__mug">
          <img
            src="${image}"
            alt=""
            class="products-show__img"
          />
        </div>
      `;
      this.parentEl.insertAdjacentHTML("afterbegin", markup);
    }
  }

  // createProducts(productImage) {
  //   productImage.forEach((image) => {
  //     const productsShow = document.createElement("div");
  //     productsShow.classList.add("products-show__mug");
  //     const productImg = document.createElement("img");
  //     productImg.src = image;
  //     productImg.classList.add("products-show__img");
  //     productsShow.append(productImg);
  //     this.parentEl.appendChild(productsShow);
  //   });
  //   // console.log(productImage);
  // }

  // productImages(productImage) {
  //   return `
  //     <div class="products-show__mug">
  //       <img
  //         src="${productImage}"
  //         alt=""
  //         class="products-show__img"
  //       />
  //     </div>
  //   `;
  // }
}

export default new ProductsView();
