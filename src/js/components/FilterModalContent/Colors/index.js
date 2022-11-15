import { TitleFilter } from "../TitleFilter";

export function ColorsContainer() {
  const title = "Cores";

  const div = document.createElement("div");
  div.classList.add("colors__container");

  const titleFilterTemplate = TitleFilter(title);

  div.innerHTML = `
    ${titleFilterTemplate.outerHTML}
    <div class="colors__container__content"></div>
  `;

  const colorButton = div.querySelector("#cores");
  colorButton.onclick = toggleColorsMenu;

  return div;
}

function toggleColorsMenu() {
  const colorsContent = document.querySelector(".colors__container__content");
  colorsContent.classList.toggle("active");
}
