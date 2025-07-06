import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g., 'entrees', 'plats', 'desserts'
  name: { type: String, required: true },
  description: { type: String },
  price: { type: String, required: true },
  image: { type: String },
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
