import { Raleway } from "next/font/google";
import { Jersey_15 } from "next/font/google";
import Image from "next/image";

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
    <div className="flex flex-col gap-10 animate-fadeIn min-h-screen justify-center">
      <div className="flex sm:flex-row flex-col gap-4 justify-center items-center">
        <Image
          alt="Bird"
          width={128}
          height={128}
          className="w-32"
          src="/bird.svg"
        />
        <div className={jersey.className}>
          <p className=" text-7xl">Contact</p>
        </div>
      </div>
      <p className={`${raleway.className} text-lg font-bold text-center`}>
        {" "}
        You can reach me on the following social medias or by email.
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
            src="/git.svg"
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
            alt="Mail"
            width={64}
            height={64}
            className="w-16 p-1 hover:p-0 transition-all duration-100"
            src="/mail.svg"
          />
        </a>
      </div>
      {/* <div className="flex flex-col items-center justify-center">
        <p className={`text-4xl ${jersey.className}`}>Recent posts</p>
      </div> */}
    </div>
  );
}
