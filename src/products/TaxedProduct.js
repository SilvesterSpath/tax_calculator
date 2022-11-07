import { Product } from './Product.js';

export function TaxedProduct(id, name, price, isImported = false) {
  Product.call(this, id, name, price, isImported);
  this.salesTax = 0.1;
  this.tax = isImported
    ? this.price * (this.salesTax + this.impurtDuty)
    : this.price * this.salesTax;
  this.taxRounded = Number((Math.ceil(this.tax * 20) / 20).toFixed(2));
  this.total = Number((this.price + this.taxRounded).toFixed(2));
}

TaxedProduct.prototype = Object.create(Product.prototype);
TaxedProduct.prototype.constructor = TaxedProduct;
