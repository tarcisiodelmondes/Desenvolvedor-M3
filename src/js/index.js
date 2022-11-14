import { cart } from "./components/cart";
import { closeModal, modal, openModal } from "./components/modal";
import { orderModalContent } from "./components/orderModalContent";
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

const orderButton = document.querySelector(".order__btn");

const selectOrderFilter = function () {
  // fazer seleção de filtro depois

  closeModal();
};

orderButton.addEventListener("click", () => {
  const orderElement = orderModalContent(selectOrderFilter);

  const modalElement = document.querySelector(".modal");
  modalElement.appendChild(
    modal({
      title: "Ordenar",
      content: orderElement,
    })
  );
  openModal();
});
