import { TitleFilter } from "../TitleFilter";

export function PriceBandContainer() {
  const title = "Faixa de preço";

  const div = document.createElement("div");
  div.classList.add("prices__container");

  const titleFilterTemplate = TitleFilter(title);

  div.innerHTML = `
    ${titleFilterTemplate.outerHTML}
    <div class="prices__container__content"></div>
  `;

  const priceMenuButton = div.querySelector("#faixadepreço");
  priceMenuButton.onclick = togglePricesMenu;

  return div;
}

function togglePricesMenu() {
  const pricesContent = document.querySelector(".prices__container__content");
  pricesContent.classList.toggle("active");
}
