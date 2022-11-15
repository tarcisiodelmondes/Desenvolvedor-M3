import { TitleFilter } from "../TitleFilter";

export function SizesContainer() {
  const title = "Tamanhos";

  const div = document.createElement("div");
  div.classList.add("sizes__container");

  const titleFilterTemplate = TitleFilter(title);

  div.innerHTML = `
    ${titleFilterTemplate.outerHTML}
    <div class="sizes__container__content"></div>
  `;

  const sizeMenuButton = div.querySelector("#tamanhos");
  sizeMenuButton.onclick = toggleSizesMenu;

  return div;
}

function toggleSizesMenu() {
  const sizesContent = document.querySelector(".sizes__container__content");
  sizesContent.classList.toggle("active");
}
