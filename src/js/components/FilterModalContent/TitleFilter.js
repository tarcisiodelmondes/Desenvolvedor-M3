export function TitleFilter(title) {
  const span = document.createElement("span");
  span.classList.add("title__filter__container");
  span.id = title.replaceAll(" ", "").toLowerCase();

  span.innerHTML = `
    ${title}
    <img src="../../img/arrow-icon.svg" alt="" />
  `;

  return span;
}
