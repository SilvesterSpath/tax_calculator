import { Product } from './Product.js';

export function TaxfreeProduct(id, name, price, isImported = false) {
  Product.call(this, id, name, price, isImported);
  this.tax = isImported ? this.price * this.impurtDuty : 0;
  this.taxRounded = Number((Math.ceil(this.tax * 20) / 20).toFixed(2));
  this.total = Number((this.price + this.taxRounded).toFixed(2));
}

TaxfreeProduct.prototype = Object.create(Product.prototype);
TaxfreeProduct.prototype.constructor = TaxfreeProduct;
