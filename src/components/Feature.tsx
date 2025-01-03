import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">
          Kousar Shah: Navigation the Secrets of Technology in Tech Chronicles
          Blog!
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          In the fast-evolving world of technology, staying ahead requires not
          just knowledge but a deep understanding of its nuances. Kousar Shah
          Tech Chronicles Blog offers readers a unique journey through the
          cutting-edge developments and trends that shape our digital landscape.
          From AI innovations to the rise of new tech tools, this blog explores
          how technology is transforming industries, lifestyles, and the way we
          think. Whether you are a tech enthusiast or a professional looking to
          stay informed, Tech Chronicles is your guide to navigating the secrets
          of modern technology.
        </p>

        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change ">
            {" "}
            Exlporing Our Categories
          </h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              "Artificial Intelligence",
              "HTML",
              "Virtual Reality",
              "Next Js",
              "Web Development",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transit duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
          At the heart of progress lies diversity—whether in ideas, cultures, or
          technology. When you dive into our diverse world, you embark on a
          journey that explores a spectrum of topics ranging from groundbreaking
          innovations in science to the rich tapestry of global traditions. Our
          platform brings together voices from all walks of life, offering fresh
          perspectives and insightful discussions. From the latest advancements
          in artificial intelligence to the timeless wisdom found in diverse
          cultures, we provide a space where knowledge meets creativity, and
          where every reader can find something that resonates with their
          curiosity and passion.
        </p>
      </section>
    </div>
  );
}
