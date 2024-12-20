import ConnectMongoDB from "../../../../utils/mongoConnection";
import BikeModel from "../../../../models/bikeModel";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const params = await context.params;
    const { id } = params;
    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await ConnectMongoDB();

    const bikeData = await BikeModel.findOne({ _id: id });

    if (!bikeData) {
      return NextResponse.json({ error: "Bike not found" }, { status: 404 });
    }

    return NextResponse.json(bikeData, { status: 200 });
  } catch (error) {
    console.error("Error fetching bike data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
