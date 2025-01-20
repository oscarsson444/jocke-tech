import { Raleway } from "next/font/google";
import { Jersey_15 } from "next/font/google";
import Image from "next/image";
import mountain from "../images/mountain.svg";

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
    <div
      className="flex flex-col gap-10 min-h-screen justify-center items-center sm:pt-0 pt-16 sm:pb-0 pb-4 sm:px-0 px-4"
      style={{
        opacity: 0, // Initially hidden
        animationDelay: "0.2s",
        animationName: "fadeIn", // Explicitly set animation name
        animationDuration: "1s",
        animationFillMode: "forwards",
      }}
    >
      <div className="flex sm:flex-row flex-col gap-4 justify-center items-center">
        <Image
          alt="Mountain"
          width={128}
          height={128}
          className="w-32"
          src={mountain}
        />
        <div className={jersey.className}>
          <p className=" text-7xl">About</p>
        </div>
      </div>
      <div className="flex flex-row gap-6 items-center justify-center">
        <p
          className={`${raleway.className} text-lg font-bold sm:w-96 w-full text-center`}
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
