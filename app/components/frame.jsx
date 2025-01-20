import Image from "next/image";
import leaf from "../images/leaf.svg";

export default function Frame({ content }) {
  return (
    <div className="border hover:bg-gray-900/90 bg-gray-900/40 border-yellow-400/60 rounded-xl h-80 flex flex-col gap-4 justify-center items-center p-4">
      <Image alt="Leaf" width={96} height={96} className="w-24" src={leaf} />
      <p className="text-lg font-bold">{content.title}</p>
      <p>{content.description}</p>
    </div>
  );
}
