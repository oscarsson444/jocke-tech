"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Raleway } from "next/font/google";
import Image from "next/image";
import close from "../images/close.svg";
import tree from "../images/tree.svg";
import menu from "../images/menu.svg";

const raleway = Raleway({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Menu() {
  const [showMenu, setShowMenu] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const pathname = usePathname();
  const menuRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const isBigScreen = window.innerWidth >= 800;
      setIsDesktop(isBigScreen);
      setShowMenu(isBigScreen);
    };

    // Check on mount
    checkIsMobile();

    // Check on window resize (for orientation changes)
    const handleResize = () => checkIsMobile();
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (!isDesktop) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isDesktop]);

  const handleOnClick = () => {
    if (!isDesktop) {
      setShowMenu(false);
    }
  };

  return (
    <div
      ref={menuRef}
      className={`fixed sm:relative transition-all z-20 min-h-screen ${
        showMenu ? "sm:w-1/5 w-3/5" : "w-0"
      } bg-black text-yellow-300 ${raleway.className}`}
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
          className="w-12 m-4 hover:bg-gray-700/50 rounded-md p-2 "
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? (
            <Image
              alt="Close"
              width={48}
              height={48}
              className="w-12"
              src={close}
            />
          ) : (
            <Image
              alt="Menu"
              width={48}
              height={48}
              className="w-12"
              src={menu}
            />
          )}
        </button>
      </div>
      {showMenu && (
        <div className="w-full">
          <div className="flex justify-end mt-4 mr-4">
            <Image
              alt="Logo"
              width={48}
              height={48}
              className="w-12"
              src={tree}
            />
          </div>
          <ul className="flex flex-col gap-4 ml-6 mt-24 text-lg font-bold underline-offset-4 decoration-2">
            <Link
              className={`${
                pathname === "/" ? "underline " : ""
              } hover:text-xl transition-all duration-30 w-fit `}
              href={`/`}
              onClick={handleOnClick}
            >
              Home
            </Link>

            <Link
              className={`${
                pathname === "/posts" ? "underline " : ""
              } hover:text-xl transition-all duration-30 w-fit `}
              href={`/posts`}
              onClick={handleOnClick}
            >
              Posts
            </Link>

            <Link
              className={`${
                pathname === "/about" ? "underline " : ""
              } hover:text-xl transition-all duration-30 w-fit `}
              href={`/about`}
              onClick={handleOnClick}
            >
              About
            </Link>

            <Link
              className={`${
                pathname === "/contact" ? "underline " : ""
              } hover:text-xl transition-all duration-30 w-fit `}
              href={`/contact`}
              onClick={handleOnClick}
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
