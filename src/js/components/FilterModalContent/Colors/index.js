export function ColorsContainer() {
  const div = document.createElement("div");
  div.classList.add("colors__container");

  div.innerHTML = `
    <span class="colors__container__title">
      Cores
      <img src="../../img/arrow-icon.svg" alt="" />
    </span>

    <div class="colors__container__content"></div>
  `;

  const colorButton = div.querySelector(".colors__container__title");
  colorButton.onclick = openColorsMenu;

  return div;
}

export function openColorsMenu() {
  const colorsContent = document.querySelector(".colors__container__content");
  colorsContent.classList.toggle("active");
}
