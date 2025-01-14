export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex sm:flex-row flex-col gap-4 justify-center items-center">
        <img className="w-32" src="/tree.svg" />
        <p className=" text-4xl">jocke.tech</p>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <img className="w-14" src="/git.svg" />
        <img className="w-14" src="/linkedin.svg" />
        <img className="w-14" src="/mail.svg" />
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
}
