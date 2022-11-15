export function FilterButtons() {
  const div = document.createElement("div");
  div.classList.add("filter__buttons__container");

  div.innerHTML = `
      <button type="button" class="filter__btn apply__btn">Aplicar</button>
      <button type="button" class="filter__btn clear__btn">Limpar</button>
  `;

  return div;
}
