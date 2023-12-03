"use client";

import { trending } from "@/util";
import React, { useState } from "react";
import Product from "./card/Product";
import Heading from "./Heading";

const Trending = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <div className="basis-3/4">
        <div className="flex justify-between">
          <Heading title="trending items" />
          <div className="flex overflow-x-scroll lg:overflow-hidden">
            {trending.map((trend, index) => (
              <button
                key={index}
                onClick={() => setCurrentTab(index)}
                className={`p-2 px-4 ${
                  currentTab == index && "text-primary"
                } capitalize hover:text-primary`}
              >
                {trend}
              </button>
            ))}
            H
          </div>
        </div>

        <div className="border flex flex-wrap">
          <Product
            basis="basis-1/2"
            image={"/image/products/Simple Product.png"}
            title="Simple product"
            price="125.56"
          />
          <Product
            basis="basis-1/2"
            image={"/image/products/plamco.png"}
            title="Polite In Of In Oh Needed Itself Silent Course Gave Read"
            price="125.56"
          />
          <Product
            basis="basis-1/2"
            image={"/image/products/watch.png"}
            title="Simple product"
            price="125.56"
          />
          <Product
            basis="basis-1/2"
            image={"/image/products/polite.png"}
            title="Simple product"
            price="125.56"
          />
        </div>
      </div>
    </>
  );
};

export default Trending;
