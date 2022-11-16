import { clearInputs } from "../../../utils/clearInputs";

export function PricesContent(price, id) {
  const label = document.createElement("label");
  label.classList.add("radio__prices__container");
  label.htmlFor = price.id + id;
  label.setAttribute("name", "price-select");

  label.innerHTML = `
    <input name="price-select" id="${
      price.id + id
    }" class="sr-only label__input__price" type="checkbox" value="${
    price.id
  }" />
    <span class="radio__mark"></span>
    ${price.title}
  `;

  const input = label.querySelector(".label__input__price");

  input.addEventListener("click", () => {
    const allLabelOfInput = document.querySelectorAll(
      ".radio__prices__container"
    );

    if (input.checked) {
      clearInputs(allLabelOfInput);
      input.checked = true;
    }
  });

  return label;
}
