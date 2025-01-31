import { Jersey_15, Raleway } from "next/font/google";
import Image from "next/image";
import bird from "../images/bird.svg";
import git from "../images/git.svg";
import linkedin from "../images/linkedin.svg";

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

export default function Contact() {
  return (
    <div
      className="flex flex-col gap-10 min-h-screen justify-center p-4"
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
          alt="Bird"
          width={128}
          height={128}
          className="w-32"
          src={bird}
        />
        <div className={jersey.className}>
          <p className=" text-7xl">Contact</p>
        </div>
      </div>
      <p className={`${raleway.className} text-lg font-bold text-center`}>
        {" "}
        You can reach me on the following social medias.
      </p>
      <div className="flex flex-row gap-6 items-center justify-center">
        <a
          href={"https://github.com/oscarsson444"}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <Image
            alt="Git"
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
            alt="Linkedin"
            width={64}
            height={64}
            className="w-16 p-1 hover:p-0 transition-all duration-100"
            src={linkedin}
          />
        </a>
      </div>
    </div>
  );
}
