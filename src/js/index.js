import { cart } from "./components/cart";
import { toggleOrderMenu } from "./functions/toggleOrderMenu";
import { clearClasses } from "./utils/clearClasses";

const productsInCart = [];

const headerCart = document.querySelector(".header__cart");
headerCart.appendChild(cart(productsInCart));

const selectMenuOrderBtn = document.querySelector(".select__btn");
selectMenuOrderBtn.addEventListener("click", () => {
  toggleOrderMenu();
});

const selectListMenu = document.querySelectorAll(".select__list li");

selectListMenu.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    menuItem.classList.toggle("active");

    selectListMenu.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        return;
      }
      const isItemActive = item.classList.contains("active");

      if (isItemActive) {
        clearClasses([item], ["active"]);
      }
    });

    toggleOrderMenu();
  });
});
