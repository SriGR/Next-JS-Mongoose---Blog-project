import { title } from "process";
import Posts from "../../../components/Posts";

export async function generateMetadata({ params }) {
  const id = params.id;
  const Post = await fetch(`http://localhost:3000/api/Post/${id}`).then((res) =>
    res.json()
  );

  return {
    title: Post.brand,
  };
}

export default function Page({ params }) {
  return <Posts params={params} />;
}
