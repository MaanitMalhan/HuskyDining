import mongoose from "mongoose";

const diningHallSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    features: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const DiningHall = mongoose.model("DiningHall", diningHallSchema);

export default DiningHall;
