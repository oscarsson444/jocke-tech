"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(true);
  const pathname = usePathname();

  return (
    <div
      className={`fixed sm:relative transition-all z-20 h-screen ${
        showMenu ? "sm:w-1/5 w-3/5" : "w-0"
      } bg-black text-yellow-300`}
    >
      {/* Blue dots decoration */}
      <div
        className={`absolute top-0 right-0 h-full ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <div className="h-full border-r-4 border-dashed opacity-50 border-yellow-200"></div>
      </div>
      <div className="fixed">
        <button
          className="w-12 m-4 hover:bg-gray-700/50 rounded-md p-2"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? (
            <img className="w-12" src="/close.svg" />
          ) : (
            <img className="w-12" src="/menu.svg" />
          )}
        </button>
      </div>
      {showMenu && (
        <div className="w-full">
          <div className="flex justify-end mt-4 mr-4">
            <img className="w-12" src="/tree.svg" />
          </div>
          <ul className="flex flex-col gap-4 ml-6 mt-24 text-lg underline-offset-4 decoration-2">
            <Link
              className={`${
                pathname === "/" ? "underline " : ""
              } hover:text-xl transition-all duration-100`}
              href={`/`}
            >
              Home
            </Link>

            <Link
              className={`${
                pathname === "/posts" ? "underline " : ""
              } hover:text-xl transition-all duration-100`}
              href={`/posts`}
            >
              Posts
            </Link>

            <Link
              className={`${
                pathname === "/about" ? "underline " : ""
              } hover:text-xl transition-all duration-100`}
              href={`/about`}
            >
              About
            </Link>

            <Link
              className={`${
                pathname === "/contact" ? "underline " : ""
              } hover:text-xl transition-all duration-100`}
              href={`/contact`}
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
