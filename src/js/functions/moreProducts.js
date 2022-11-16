import { showProducts } from "./showProducts";

export function moreProducts(products, limitOfProductView) {
  let newLimitOfProductsInView = limitOfProductView * 2;

  if (newLimitOfProductsInView > products.length) {
    newLimitOfProductsInView = products.length;
  }

  showProducts(products, newLimitOfProductsInView);

  return newLimitOfProductsInView;
}
