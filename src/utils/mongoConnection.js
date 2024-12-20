import mongoose from "mongoose";

const ConnectMongoDB = async () =>
  mongoose.connect("mongodb://localhost:27017/Bikes");

export default ConnectMongoDB;
