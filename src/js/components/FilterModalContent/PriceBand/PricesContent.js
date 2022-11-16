export function PricesContent(price, id) {
  const label = document.createElement("label");
  label.classList.add("radio__prices__container");
  label.htmlFor = price.id + id;
  label.setAttribute("name", "price-select");

  label.innerHTML = `
    <input name="price-select" id="${
      price.id + id
    }" class="sr-only" type="checkbox" value="${price.id}" />
    <span class="radio__mark"></span>
    ${price.title}
  `;

  return label;
}
