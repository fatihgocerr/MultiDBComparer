const colors = require("colors");
const first = require('./db/first.db')
const second = require('./db/second.db')
const productSchema = require('./model/products.model')

const Product_a = first.model('Product_a', productSchema, 'product');
const Product_b = second.model('Product_b', productSchema, 'product');

const compareProducts = async () => {
 try {
  const firstDBData = await Product_a.find();
  const secondDBData = await Product_b.find();

  const mismatchedProducts = [];

  for (const product1 of firstDBData) {
   const product2 = secondDBData.find(p => p.id === product1.id);

   if (product2) {
    if (product1.qty !== product2.qty) {
     if (!mismatchedProducts.some(p => p.productName === product1.title)) {
      mismatchedProducts.push({
       productName: product1.title,
       data1qty: product1.qty,
       data2qty: product2.qty,
       mismatched: 'qty'
      });
     }
    }
    if (product1.price !== product2.price) {
     if (!mismatchedProducts.some(p => p.productName === product1.title)) {
      mismatchedProducts.push({
       productName: product1.title,
       data1price: product1.price,
       data2price: product2.price,
       mismatched: 'price'
      });
     }
    }
   } else {
    if (!mismatchedProducts.some(p => p.productName === product1.title)) {
     mismatchedProducts.push({
      productName: product1.title,
      mismatched: 'other'
     });
    }
   }
  }
  return mismatchedProducts;
 } catch (error) {
  console.error('Error:', error);
 }
};

 module.exports = compareProducts;