export function FiltersContainer(filtersHTMLNode) {
  const div = document.createElement("div");
  div.classList.add("filters__container");

  filtersHTMLNode.forEach((filterNode) => {
    div.appendChild(filterNode);
  });

  return div;
}
