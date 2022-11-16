export function clearInputs(inputsContainer) {
  inputsContainer.forEach((label) => {
    const inputElement = label.children[0];
    inputElement.checked = false;
  });
}
