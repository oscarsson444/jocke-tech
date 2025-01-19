import { Jersey_15 } from "next/font/google";

const jersey = Jersey_15({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn min-h-screen justify-center">
      <div className="flex sm:flex-row flex-col gap-4 justify-center items-center">
        <img className="w-32" src="/tree.svg" />
        <div className={jersey.className}>
          <p className=" text-7xl">jocke.tech</p>
        </div>
      </div>
      <div className="flex flex-row gap-6 items-center justify-center">
        <a
          href={"https://github.com/oscarsson444"}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            className="w-16 p-1 hover:p-0 transition-all duration-100"
            src="/git.svg"
          />
        </a>
        <a
          href={"http://www.linkedin.com/in/joakim-oscarsson-5145a919b"}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            className="w-16 p-1 hover:p-0 transition-all duration-100"
            src="/linkedin.svg"
          />
        </a>
        <a
          href={"mailto:oscarsson444@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            className="w-16 p-1 hover:p-0 transition-all duration-100"
            src="/mail.svg"
          />
        </a>
      </div>
    </div>
  );
}
