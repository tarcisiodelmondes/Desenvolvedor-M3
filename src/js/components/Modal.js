export function Modal({ title, content }) {
  const div = document.createElement("div");
  div.classList.add("modal__hero");

  div.innerHTML = `
      <div class="modal__header">
        <h2 class="modal__title">${title}<h2>
        <img class="modal__close" src="../../img/close.svg" alt="Fechar modal"/>
      </div>

      <div class="modal__content"></div>
  `;

  const modalCloseButton = div.querySelector(".modal__close");
  modalCloseButton.onclick = closeModal;

  const modalContent = div.querySelector(".modal__content");
  modalContent.appendChild(content);

  return div;
}

export function closeModal() {
  const modalElement = document.querySelector(".modal");
  modalElement.innerHTML = "";
}

export function openModal() {
  const modal = document.querySelector(".modal__hero");
  modal.classList.add("modal__active");
}
