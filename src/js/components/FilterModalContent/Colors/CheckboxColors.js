export function CheckboxColors(color, id) {
  const label = document.createElement("label");
  label.classList.add("checkbox__colors__container");
  label.htmlFor = color + id;

  label.innerHTML = `
    <input id="${
      color + id
    }" class="sr-only" type="checkbox" value="${color}" />
    <span class="checkbox__mark"></span>
    ${color}
  `;

  return label;
}
