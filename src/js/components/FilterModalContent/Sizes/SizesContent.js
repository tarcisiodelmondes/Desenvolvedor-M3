export function SizesContent(size, id) {
  const label = document.createElement("label");
  label.classList.add("label__sizes__container");
  label.htmlFor = size + id;

  label.innerHTML = `
    <input class="sr-only" id="${size + id}" value="${size}" type="checkbox"/>
    <span class="span__size__content" class="checkbox__mark">${size}</span>
  `;

  return label;
}
