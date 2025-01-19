import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RaspberryWebServer() {
  return (
    <div
      className={`min-h-screen text-xl font-bold flex flex-col items-center pt-20 ${raleway.className}`}
    >
      In progress...
    </div>
  );
}
