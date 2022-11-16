import "regenerator-runtime/runtime";

import { Cart, updateCart } from "./components/Cart";
import { FiltersContainer } from "./components/FilterModalContent";
import { ColorsContainer } from "./components/FilterModalContent/Colors";
import { CheckboxColors } from "./components/FilterModalContent/Colors/CheckboxColors";
import { PriceBandContainer } from "./components/FilterModalContent/PriceBand";
import { PricesContent } from "./components/FilterModalContent/PriceBand/PricesContent";
import { SizesContainer } from "./components/FilterModalContent/Sizes";
import { SizesContent } from "./components/FilterModalContent/Sizes/SizesContent";
import { FiltersProduct } from "./components/FiltersProduct";
import { closeModal, Modal, openModal } from "./components/Modal";
import { OrderModalContent } from "./components/OrderModalContent";
import { moreProducts } from "./functions/moreProducts";

import { showProducts } from "./functions/showProducts";
import { toggleOrderMenu } from "./functions/toggleOrderMenu";
import { clearClasses } from "./utils/clearClasses";
import { clearInputs } from "./utils/clearInputs";

let limitOfProductView = window.innerWidth >= 880 ? 9 : 4;
const productsInCart = [];
let products = [];
const filters = {
  colors: [],
  sizes: [],
  price: null,
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
const sizes = ["P", "M", "G", "GG", "U", "36", "38", "40", "35", "37", "34"];
const pricesBand = [
  { id: 1, title: "de R$0 até R$50", initial: 0, final: 50 },
  { id: 2, title: "de R$51 até R$150", initial: 51, final: 150 },
  { id: 3, title: "de R$151 até R$300", initial: 151, final: 300 },
  { id: 4, title: "de R$301 até R$500", initial: 301, final: 500 },
  { id: 5, title: "a partir de R$ 500", initial: 500, final: 999999999 },
];

function addEventInBuyButton() {
  const buyButtons = document.querySelectorAll(".buy__btn");
  buyButtons.forEach((buyButton) => {
    buyButton.addEventListener("click", () => {
      const productId = buyButton.getAttribute("data-product-id");
      const newProductInCart = products[Number(productId)];
      productsInCart.push(newProductInCart);

      const cartContainer = document.querySelector(".header__cart");
      updateCart(cartContainer, productsInCart);
    });
  });
}

async function getProducts() {
  const response = await fetch("http://localhost:5000/products");
  const productsData = await response.json();

  products = productsData;

  showProducts(products, limitOfProductView);
  addEventInBuyButton();
}
getProducts();

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
    divCheckboxColorsContainer.appendChild(CheckboxColors(color, "mobile"));
  });

  const sizesContainer = SizesContainer();
  const divSizesContainer = sizesContainer.querySelector(
    ".sizes__container__content"
  );

  sizes.forEach((size) => {
    divSizesContainer.appendChild(SizesContent(size, "mobile"));
  });

  const pricesBandContainer = PriceBandContainer();
  const divPricesContainer = pricesBandContainer.querySelector(
    ".prices__container__content"
  );

  pricesBand.forEach((price) => {
    divPricesContainer.appendChild(PricesContent(price, "mobile"));
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

  const colorsCheckboxContent = document.querySelectorAll(
    ".checkbox__colors__container"
  );
  const sizesCheckboxContent = document.querySelectorAll(
    ".label__sizes__container"
  );

  const pricesBandCheckboxContent = document.querySelectorAll(
    ".radio__prices__container"
  );

  const clearButton = document.querySelector(".clear__btn");
  clearButton.addEventListener("click", () => {
    clearInputs(colorsCheckboxContent);
    clearInputs(sizesCheckboxContent);
    clearInputs(pricesBandCheckboxContent);
  });
});

const filtersContainer = document.querySelector(".filters__container");
filtersContainer.appendChild(FiltersProduct(colors, sizes, pricesBand));

const moreProductsButton = document.querySelector(".more__products__btn");
moreProductsButton.addEventListener("click", () => {
  const newLimitOfProductsInView = moreProducts(products, limitOfProductView);
  limitOfProductView = newLimitOfProductsInView;

  if (newLimitOfProductsInView >= products.length) {
    const parent = moreProductsButton.parentElement;
    parent.removeChild(moreProductsButton);
  }
});

function filterProducts() {
  // Falta fazer
}

function addColorFilter(newColor) {
  const isExistsColorInFilter = filters.colors.filter(
    (color) => color === newColor
  );

  if (isExistsColorInFilter.length > 0) {
    const newColorsFilterWithoutNewColor = filters.colors.filter(
      (color) => color !== newColor
    );
    filters.colors = newColorsFilterWithoutNewColor;
    return;
  }

  filters.colors.push(newColor);
}

const colorsCheckboxContainer = document.querySelectorAll(
  ".checkbox__colors__container"
);
colorsCheckboxContainer.forEach((colorCheckbox) => {
  colorCheckbox.addEventListener("click", () => {
    const input = colorCheckbox.children[0];

    if (input.checked) {
      addColorFilter(input.value);
    }

    filterProducts();
  });
});

function addSizeFilter(sizeValue) {
  const isExistsSizeInFilter = filters.sizes.filter(
    (size) => size === sizeValue
  );

  if (isExistsSizeInFilter.length > 0) {
    const newSizesFilterWithoutNewSize = filters.sizes.filter(
      (size) => size === sizeValue
    );
    filters.sizes = newSizesFilterWithoutNewSize;
    return;
  }

  filters.sizes.push(sizeValue);
}

const sizesCheckboxContainer = document.querySelectorAll(
  ".label__sizes__container"
);
sizesCheckboxContainer.forEach((labelSize) => {
  labelSize.addEventListener("click", () => {
    const input = labelSize.children[0];

    if (input.checked) {
      addSizeFilter(input.value);
    }

    filterProducts();
  });
});

function addPriceBandFilter(priceBandId) {
  const priceBandIdNumber = Number(priceBandId);

  pricesBand.forEach((price) => {
    if (price.id === priceBandIdNumber) {
      filters.price = price;
    }
  });
}

const pricesBandCheckboxContainer = document.querySelectorAll(
  ".radio__prices__container"
);

pricesBandCheckboxContainer.forEach((priceCheckbox) => {
  priceCheckbox.addEventListener("click", () => {
    const input = priceCheckbox.children[0];

    if (input.checked) {
      addPriceBandFilter(input.value, input);
    }

    filterProducts();
    return;
  });
});
