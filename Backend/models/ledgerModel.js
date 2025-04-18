import mongoose from "mongoose";

const ledgerSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    recipientID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    recipient_name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Ledger = mongoose.model("Ledger", ledgerSchema, "ledger");

export default Ledger;
