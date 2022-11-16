export function clearClasses(htmlElements, classes) {
  htmlElements.forEach((element) => {
    for (let className of classes) {
      element.classList.remove(className);
    }
  });
}
