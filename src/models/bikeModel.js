import { model, Schema, models } from "mongoose";

const BikeSchema = new Schema(
  {
    brand: String,
    name: String,
    color: String,
    description: String,
  },
  { toJSON: { virtuals: true } },
  { toObject: { virtuals: true } }
);

BikeSchema.virtual("ShortDescription").get(function () {
  return this.description
    ? this.description.substr(0, 150) + "..."
    : "No description available.";
});

const BikeModel = models.bikes || model("bikes", BikeSchema);

export default BikeModel;
