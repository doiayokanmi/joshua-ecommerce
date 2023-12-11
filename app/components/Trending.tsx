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
          <div className="flex text-xs lg:text-base overflow-x-scroll lg:overflow-hidden">
            {trending.map((trend, index) => (
              <button
                key={index}
                onClick={() => setCurrentTab(index)}
                className={`p-2 px-4 ${
                  currentTab == index && "text-primary"
                } capitalize whitespace-nowrap hover:text-primary`}
              >
                {trend}
              </button>
            ))}
          
          </div>
        </div>

        <div className="border flex flex-wrap">
          <Product
            basis="basis-1/2"
            image={"/image/products/noodles.png"}
            title="Delicious Noodles with Sauces entail in it"
            price={125.56}
          />
          <Product
            basis="basis-1/2"
            image={"/image/products/rice.jpeg"}
            title="A bag of rice in a container for soft eating "
            price={125.56}
          />
          <Product
            basis="basis-1/2"
            image={"/image/products/5ltr.png"}
            title="5 litres of cooking oil for tasty cooking"
            price={125.56}
          />
          <Product
            basis="basis-1/2"
            image={"/image/products/maggi.png"}
            title="A pack of Maggi seasoning cube"
            price={125.56}
          />
        </div>
      </div>
    </>
  );
};

export default Trending;
