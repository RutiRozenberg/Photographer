
import mongoose, { Schema, Document, Model } from 'mongoose';

interface Product extends Document {
  name: string;
  price: number;
  time: Date;
  description: string
}

const productSchema: Schema = new Schema({
    name: String,
    price: Number,
    time: Date,
    description: String,
});

const productModel: Model<Product> = mongoose.model<Product>('product', productSchema);

export { productModel , Product};