import React from "react";
import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <Image
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="../images/img0.webp"
          alt="Author image"
        />

        <div>
          <h3 className="text-xl font-bold">Sunder Pichai </h3>
          <p className="">Computer scientist|CEO of Google|owners of Google.</p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        Sundar is the CEO of Google and Alphabet and serves on Alphabet Board
        of Directors. He joined Google in 2004 and helped lead the development
        of Google Toolbar and then Google Chrome, which grew to become the
        world most popular internet browser.
      </p>

      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Twitter
        </a>

        <a
          href="#"
          className="px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          LinkedIn
        </a>

        <a
          href="#"
          className="px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          YouTube
        </a>
      </div>
    </div>
  );
}
