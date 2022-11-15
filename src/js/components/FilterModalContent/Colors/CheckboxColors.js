export function CheckboxColors(color) {
  const label = document.createElement("label");
  label.classList.add("checkbox__colors__container");
  label.htmlFor = color;

  label.innerHTML = `
    <input id="${color}" class="sr-only" type="checkbox" value="${color}" />
    <span class="checkbox__mark"></span>
    ${color}
  `;

  return label;
}
