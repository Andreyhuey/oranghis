import mongoose from "mongoose";

const csSchema = mongoose.Schema({
  No: String,
  "Policy Number": String,
  "Goverment ID": String,
  Surname: String,
  Firstname: String,
  Age: String,
  Gender: String,
  Phone: String,
  Provider: String,
  Status: String,
  link: String,
});

export const CS = mongoose.model("cs", csSchema);
