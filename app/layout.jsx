import { Roboto, Roboto_Mono } from "next/font/google";
import Menu from "./components/menu";
import ParticleBackground from "./components/particles";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "jocke.tech",
  description: "A blog created by jocke",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased `}
      >
        <div className="flex">
          <Menu />
          <div className="flex-1 bg-gray-950 text-white">
            <ParticleBackground />
            <div className="z-10">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
