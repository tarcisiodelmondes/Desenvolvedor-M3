import { Cart } from "./components/Cart";
import { FiltersContainer } from "./components/FilterModalContent";
import { ColorsContainer } from "./components/FilterModalContent/Colors";
import { CheckboxColors } from "./components/FilterModalContent/Colors/CheckboxColors";
import { PriceBandContainer } from "./components/FilterModalContent/PriceBand";
import { PricesContent } from "./components/FilterModalContent/PriceBand/PricesContent";
import { SizesContainer } from "./components/FilterModalContent/Sizes";
import { SizesContent } from "./components/FilterModalContent/Sizes/SizesContent";
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
const sizes = ["P", "M", "G", "GG", "U", "36", "38", "40", "36", "38", "40"];
const pricesBand = [
  { id: 1, title: "de R$0 até R$50", initial: 0, final: 50 },
  { id: 2, title: "de R$51 até R$150", initial: 51, final: 150 },
  { id: 3, title: "de R$151 até R$300", initial: 151, final: 300 },
  { id: 4, title: "de R$301 até R$500", initial: 301, final: 500 },
  { id: 5, title: "a partir de R$ 500", initial: 500, final: 0 },
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

  const sizesContainer = SizesContainer();
  const divSizesContainer = sizesContainer.querySelector(
    ".sizes__container__content"
  );

  sizes.forEach((size) => {
    divSizesContainer.appendChild(SizesContent(size));
  });

  const pricesBandContainer = PriceBandContainer();
  const divPricesContainer = pricesBandContainer.querySelector(
    ".prices__container__content"
  );

  pricesBand.forEach((price) => {
    divPricesContainer.appendChild(PricesContent(price));
  });

  const filterContainer = FiltersContainer([
    colorsContainer,
    sizesContainer,
    pricesBandContainer,
  ]);
  modalElement.appendChild(
    Modal({ title: "Filtrar", content: filterContainer })
  );

  openModal();
});
