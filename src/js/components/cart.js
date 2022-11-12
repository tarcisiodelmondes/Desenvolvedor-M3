export function cart(productsInCart) {
  const totalProductsInCart = productsInCart.length;

  const cartDiv = document.createElement("div");
  cartDiv.classList.add("cart__hero");

  cartDiv.innerHTML = `
    <img src="img/cart.png" alt="Carrinho de compras" />
    <span class="cart__hero__total_products">${totalProductsInCart}</span>
  `;

  return cartDiv;
}

export function updateCart(cartContainer, productsInCart) {
  console.log(productsInCart.length);
  cartContainer.innerHTML = "";
  cartContainer.appendChild(cart(productsInCart));
}
