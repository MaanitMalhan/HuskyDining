import mongoose from "mongoose";

const requestFlexSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User schema
    },
    diningHallID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DiningHall", // Reference to the DiningHall schema
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
      max: 3,
    },
    status: {
      type: String,
      enum: ["pending", "fulfilled"], // Status of the request
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"], // Priority level
      default: "medium",
    },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      expires: 5 * 24 * 60 * 60, // TTL in seconds (5 days)
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const RequestFlex = mongoose.model("RequestFlex", requestFlexSchema);

export default RequestFlex;
