import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import Product from "./card/Product";

const Special = () => {
  return (
    <>
      <section className="lg:px-12 p-4">
        <Image
          src={"/image/banner_top.jpg"}
          className="mb-4"
          width={1200}
          height={200}
          alt=""
        />

        <Heading title="Special offers!" />

        <div className="flex justify-between flex-wrap">
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/polite.png"}
            title="Simple product"
            price="125.56"
          />
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/polite.png"}
            title="Simple product"
            price="125.56"
          />
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/polite.png"}
            title="Simple product"
            price="125.56"
          />
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/polite.png"}
            title="Simple product"
            price="125.56"
          />
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/polite.png"}
            title="Simple product"
            price="125.56"
          />
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/polite.png"}
            title="Simple product"
            price="125.56"
          />
        </div>
      </section>
    </>
  );
};

export default Special;
