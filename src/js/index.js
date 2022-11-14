import { Cart } from "./components/Cart";
import { FiltersContainer } from "./components/FilterModalContent";
import { ColorsContainer } from "./components/FilterModalContent/Colors";
import { CheckboxColors } from "./components/FilterModalContent/Colors/CheckboxColors";
import { closeModal, Modal, openModal } from "./components/Modal";
import { OrderModalContent } from "./components/OrderModalContent";
import { toggleOrderMenu } from "./functions/toggleOrderMenu";
import { clearClasses } from "./utils/clearClasses";

const productsInCart = [];
const filters = {
  colors: [],
  sizes: [],
  prices: { initial: null, final: null },
};
const colors = [
  "Amarelo",
  "Azul",
  "Branco",
  "Cinza",
  "Laranja",
  "Verde",
  "Vermelho",
  "Preto",
  "Rosa",
  "Vinho",
];

const modalElement = document.querySelector(".modal");

const headerCart = document.querySelector(".header__cart");
headerCart.appendChild(Cart(productsInCart));

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
  const orderElement = OrderModalContent(selectOrderFilter);

  modalElement.appendChild(
    Modal({
      title: "Ordenar",
      content: orderElement,
    })
  );

  openModal();
});

const filterButton = document.querySelector(".filter__btn");
filterButton.addEventListener("click", () => {
  const colorsContainer = ColorsContainer();
  const divCheckboxColorsContainer = colorsContainer.querySelector(
    ".colors__container__content"
  );

  colors.forEach((color) => {
    divCheckboxColorsContainer.appendChild(CheckboxColors(color));
  });

  const filterContainer = FiltersContainer([colorsContainer]);
  modalElement.appendChild(
    Modal({ title: "Filtrar", content: filterContainer })
  );

  openModal();
});
