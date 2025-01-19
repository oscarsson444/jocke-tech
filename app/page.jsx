import { Jersey_15 } from "next/font/google";
import Image from "next/image";
import tree from "./images/tree.svg";
import git from "./images/git.svg";

const jersey = Jersey_15({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn min-h-screen justify-center">
      <div className="flex sm:flex-row flex-col gap-4 justify-center items-center">
        <Image
          className="w-32"
          alt="Logo"
          width={128}
          height={128}
          src={tree}
        />
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
          <Image
            alt="Logo"
            width={64}
            height={64}
            className="w-16 p-1 hover:p-0 transition-all duration-100"
            src={git}
          />
        </a>
        <a
          href={"http://www.linkedin.com/in/joakim-oscarsson-5145a919b"}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <Image
            alt="Logo"
            width={64}
            height={64}
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
          <Image
            alt="Logo"
            width={64}
            height={64}
            className="w-16 p-1 hover:p-0 transition-all duration-100"
            src="/mail.svg"
          />
        </a>
      </div>
    </div>
  );
}
