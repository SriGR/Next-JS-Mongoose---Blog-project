import ConnectMongoDB from "../../../utils/mongoConnection";
import ContactModel from "../../../models/contactModel";

export async function POST(req) {
  try {
    const { name, mail, description } = await req.json(); // Parse the JSON body
    const contact = { name, mail, description };

    await ConnectMongoDB();
    await ContactModel.create(contact);

    return new Response(JSON.stringify({ message: "Inserted Successfully" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
