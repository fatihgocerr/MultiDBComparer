const colors = require('colors')
const compareProducts = require('./compare')
const express = require('express')

const app = express()
const router = express.Router()

let data;
async function main() {
 try {
  const mismatchedProducts = await compareProducts();
  let price = [];
  let qty = [];
  let other = [];
  for (const mismatchedProduct of mismatchedProducts) {
   // console.log(mismatchedProduct.mismatched === 'price' ? colors.blue(mismatchedProduct) : colors.yellow(mismatchedProduct))
   mismatchedProduct.mismatched === 'price' ? price.push(mismatchedProduct) : mismatchedProduct.mismatched === 'qty' ? qty.push(mismatchedProduct) : other.push()
  }
  return data = {
   price,
   qty,
   other
  }
 } catch (error) {
  console.log('Error : ', error)
 }
}

router.get('/compare', async(req, res) => {
try {
const compare = await main()
 res.status(200).json(compare)
} catch (error) {
throw new Error(error)
}
})


app.use(router)
app.listen('5007', () => {
 console.log('Project Listen on Port 5007')
})

