import mongoose from "mongoose";

const sourceSchema = mongoose.Schema({
  Column1: String,
  "Policy Number": String,
  "Goverment ID": String,
  Surname: String,
  Firstname: String,
  Age: String,
  Gender: String,
  "Phone Number": String,
  "Health Plan": String,
  Provider: String,
  "Enrolled On": String,
  "Expires in": String,
  "Dpndt.": String,
  Type: String,
  Status: String,
  Ward: String,
  LGA: String,
  "Picture URL": String,
  "QR URL": String,
  "Present MDA": String,
  link: String,
});

export const Source = mongoose.model("Source", sourceSchema);
