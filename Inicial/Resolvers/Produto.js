
module.exports = {
    offerPrice(prod) {
        if (prod.offer) {
          return prod.price - ( prod.price * (prod.offer / 100));
        } else {
          return prod.price;
        }
      }
}