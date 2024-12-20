import ConnectMongoDB from "../../../utils/mongoConnection";
import BikeModel from "../../../models/bikeModel";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get("q");
  await ConnectMongoDB();
  let BikeData;
  try {
    if (query) {
      BikeData = await BikeModel.find({
        $or: [
          { name: new RegExp(query, "i") },
          { brand: new RegExp(query, "i") },
          { description: new RegExp(query, "i") },
        ],
      });
      return new Response(JSON.stringify(BikeData), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      BikeData = await BikeModel.find({});
      return new Response(JSON.stringify(BikeData), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch bike data",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
