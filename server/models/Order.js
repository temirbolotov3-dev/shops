import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    quantity: Number,
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);