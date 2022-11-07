export function Product(id, name, price, isImported = false) {
  // eslint-disable-next-line no-unused-expressions
  (this.id = id),
    (this.name = name),
    (this.price = price),
    (this.isImported = isImported),
    (this.impurtDuty = 0.05);
}

Product.prototype.getTotal = function () {
  return Number(this.total.toFixed(2));
};

Product.prototype.getTax = function () {
  return Number(this.tax.toFixed(2));
};
