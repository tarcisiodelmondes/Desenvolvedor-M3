export function OrderModalContent(selectFilter) {
  const div = document.createElement("div");
  div.classList.add("order__select__filter");

  div.innerHTML = `
    <button class="order__select__btn" data-recent type="button">Mais recente</button>
    <button class="order__select__btn" data-lower type="button">Maior preço</button>
    <button class="order__select__btn" data-higher type="button">Menor preço</button>
  `;

  const buttons = div.querySelectorAll("button");

  buttons.forEach((button) => {
    button.onclick = selectFilter;
  });

  return div;
}
