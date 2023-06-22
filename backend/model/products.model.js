const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({

 id: {type:Number},
 title: {type:String},
 desc: {type:String},
 price: {type:String},
 qty: {type:Number},
 category: {type:String},
 image: {type:String}
},{
 autoIndex:true,
 timestamps:true,
 minimize:true
})

// const Product_first = mongoose.model('Product_first',productSchema,'product')
//
// module.exports = Product_first

module.exports = productSchema;