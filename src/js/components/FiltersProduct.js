import { CheckboxColors } from "./FilterModalContent/Colors/CheckboxColors";
import { PricesContent } from "./FilterModalContent/PriceBand/PricesContent";
import { SizesContent } from "./FilterModalContent/Sizes/SizesContent";

export function FiltersProduct(colors, sizes, pricesBand) {
  const div = document.createElement("div");
  div.classList.add("filters__content");

  div.innerHTML = `
    <div class="filter__colors__container">
      <span class="filter__title">Cores</span>

      <div class="filter__colors__content"></div>
    </div>

    <div class="filter__sizes__container">
      <span class="filter__title">Tamanhos</span>

      <div class="filter__sizes__content"></div>
    </div>

    <div class="filter__price__band__container">
      <span class="filter__title">Faixa de Preço</span>

      <div class="filter__prices__content"></div>
    </div>
  `;

  const colorsContent = div.querySelector(".filter__colors__content");
  colors.forEach((cor) => {
    colorsContent.appendChild(CheckboxColors(cor, "desktop"));
  });

  const sizesContent = div.querySelector(".filter__sizes__content");
  sizes.forEach((size) => {
    sizesContent.appendChild(SizesContent(size, "desktop"));
  });

  const pricesBandContent = div.querySelector(".filter__prices__content");
  pricesBand.forEach((price) => {
    pricesBandContent.appendChild(PricesContent(price, "desktop"));
  });

  return div;
}
