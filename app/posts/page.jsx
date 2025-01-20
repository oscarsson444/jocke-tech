import Link from "next/link";
import { contents } from "../texts/contents";
import Frame from "../components/frame";

export default function Posts() {
  return (
    <div
      className="sm:py-10 py-20 min-h-screen px-4 sm:px-20"
      style={{
        opacity: 0, // Initially hidden
        animationDelay: "0.2s",
        animationName: "fadeIn", // Explicitly set animation name
        animationDuration: "1s",
        animationFillMode: "forwards",
      }}
    >
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
        {contents.map((content) => (
          <Link key={content.path} href={`/posts${content.path}`}>
            <Frame content={content} />
          </Link>
        ))}
      </div>
    </div>
  );
}
