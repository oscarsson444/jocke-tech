import { Raleway } from "next/font/google";
import { Jersey_15 } from "next/font/google";

const jersey = Jersey_15({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn min-h-screen justify-center sm:mt-0 mt-16 sm:mb-0 mb-4 sm:px-0 px-4">
      <div className="flex sm:flex-row flex-col gap-4 justify-center items-center overflow-scroll">
        <img className="w-32" src="/mountain.svg" />
        <div className={jersey.className}>
          <p className=" text-7xl">About</p>
        </div>
      </div>
      <div className="flex flex-row gap-6 items-center justify-center">
        <p
          className={`${raleway.className} text-lg font-bold sm:w-96 w-full text-center overflow-scroll`}
        >
          {" "}
          Hi! My name is Joakim and I like to tinker with technology. On this
          blog I write about topics related to cyber security, hardware and
          programming. <br /> <br /> This website is purely a hobby of mine and
          I do not make any profit of it. The content and any opinions I express
          are separate from my daytime job and employer.
        </p>
      </div>
    </div>
  );
}
