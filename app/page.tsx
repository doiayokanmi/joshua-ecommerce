import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Special from "./components/Special";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="flex flex-col lg:px-12 px-4 lg:space-x-8 lg:flex-row">
        <div className="basis-1/4">
        <Heading title="Popular items" />
        </div>

        <Trending />
      </section>

      <Special />
    </>
  );
}
