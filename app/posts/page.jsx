import Link from "next/link";

export default function Posts() {
  const posts = [
    {
      title: "First post",
      slug: "first",
    },
  ];
  return (
    <div>
      <p>Hello posts</p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
