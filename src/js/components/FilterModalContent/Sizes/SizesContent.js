export function SizesContent(size) {
  const span = document.createElement("span");
  span.classList.add("span__container");
  span.dataset.size = size;

  span.innerText = size;

  return span;
}
