import { model, models, Schema } from "mongoose";

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ContactModel = models.contact || model("contact", ContactSchema);

export default ContactModel;
