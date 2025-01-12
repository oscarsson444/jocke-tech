"use client";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div
      className={`transition-all ${
        showMenu ? "w-1/5" : "w-0 z-10"
      } bg-gray-800 text-white`}
    >
      <div className="p-4">
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {showMenu ? "Hide" : "Show"}
        </button>
      </div>
      {showMenu && (
        <nav>
          <ul>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <Link href={`/posts`}>Posts</Link>
            </li>
            <li>
              <Link href={`/about`}>About</Link>
            </li>
            <li>
              <Link href={`/contact`}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
