// import mongoose from "mongoose";

// const foodSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true},
//     image: { type: String, required: true },
//     category:{ type:String, required:true}
// })

// const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
// export default foodModel;


import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;



// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },                // Product name
//     description: { type: String, required: true },         // Product description
//     price: { type: Number, required: true },               // Product price
//     image: { type: String, required: true },               // Path to product image
//     category: { type: String, required: true },            // Product category (e.g., electronics, clothing, etc.)
//     stock: { type: Number, required: true, default: 0 },   // Number of items in stock
//     rating: { type: Number, default: 0, min: 0, max: 5 },  // Product rating (out of 5)
//     brand: { type: String },                               // Product brand (optional)
//     createdAt: { type: Date, default: Date.now },          // Date the product was added
//     updatedAt: { type: Date, default: Date.now }           // Date the product was last updated
// });

// // Update the `updatedAt` field whenever the product is modified
// productSchema.pre('save', function(next) {
//     this.updatedAt = Date.now();
//     next();
// });

// const productModel = mongoose.models.product || mongoose.model('product', productSchema);

// export default productModel;
