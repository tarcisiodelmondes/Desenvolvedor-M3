import { cart } from "./components/cart";

const productsInCart = [];

const headerCart = document.querySelector(".header__cart");

headerCart.appendChild(cart(productsInCart));
