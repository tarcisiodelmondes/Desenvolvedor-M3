import { priceFormatter } from "../utils/formatter";

export function ProductCard(product) {
  const div = document.createElement("div");
  div.classList.add("product__card");

  const priceFormatted = priceFormatter.format(product.price);

  div.innerHTML = `
    <img class="product__img" src="${product.image}" alt="" />
    <p class="product__name">${product.name}</p>
    <span class="product__price">${priceFormatted}</span>
    <p class="product__parcel">
      até ${product.parcelamento[0]}x de 
      ${priceFormatter.format(product.parcelamento[1])}
    </p>
    <button data-product-id="${
      product.id
    }" type="button" class="buy__btn">Comprar</button>
  `;

  return div;
}
