import { title } from "process";
import Contact from "../../components/Contact";

export const metadata = {
  title: "Contact Page",
  description: "Contact Form",
};

export default function page() {
  return <Contact />;
}
