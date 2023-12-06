import { Boundary } from "@/components/boundary";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
};

export default async function Header() {
  const postResponse = await fetch("https://dummyjson.com/posts/1");
  const postJSON = (await postResponse.json()) as Post;
  const { title } = postJSON;

  return (
    <Boundary labels={["Header (Async)"]} color="blue" size="small">
      <h1>{title}</h1>
    </Boundary>
  );
}
