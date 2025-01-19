export default function Frame({ content }) {
  return (
    <div className="border hover:bg-gray-900/90 bg-gray-900/40 border-yellow-400/60 rounded-xl h-80 flex flex-col gap-4 justify-center items-center p-4 ">
      <img className="w-24" src="/leaf.svg" />
      <p className="text-lg font-bold">{content.title}</p>
      <p className="text-ellipsis overflow-auto">{content.description}</p>
    </div>
  );
}
