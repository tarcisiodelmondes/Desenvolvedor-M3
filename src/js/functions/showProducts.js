import { ProductCard } from "../components/ProductCard";

export function showProducts(products, limit) {
  const sectionProducts = document.querySelector(".products__content");
  const productsListContainer = sectionProducts.parentElement;
  productsListContainer.classList.remove("product__not__found__container");
  sectionProducts.innerHTML = "";

  if (products.length <= 0) {
    const productsListContainer = sectionProducts.parentElement;
    productsListContainer.classList.add("product__not__found__container");
    sectionProducts.appendChild(notToProducts());
    return;
  }

  const newProductsSliced = sliceProducts(products, limit);

  newProductsSliced.forEach((product) => {
    sectionProducts.appendChild(ProductCard(product));
  });
}

function notToProducts() {
  const p = document.createElement("p");
  p.classList.add("product__not__found");
  p.innerText = "Não encontramos nenhuma roupa.";

  return p;
}

function sliceProducts(products, limitOfSlice) {
  return products.slice(0, limitOfSlice);
}
