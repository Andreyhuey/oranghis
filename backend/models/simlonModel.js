import mongoose from "mongoose";

const simlonSchema = mongoose.Schema(
  {
    LGA: String,
    phoneNumber: Number,
    governmentId: String,
    picture: String,
    lastName: String,
    firstName: String,
    gender: String,
    age: Number,
    healthPlan: String,
    otherName: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

export const Simlon = mongoose.model("Simlon", simlonSchema);
