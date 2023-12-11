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
            image={"/image/products/noodles.png"}
            title="Delicious Noodles with Sauces entail in it"
            price={125.56}
          />
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/rice.jpeg"}
            title="A bag of rice is a container"
            price={125.56}
          />
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/5ltr.png"}
            title="5 litres of cooking oil for tasty cooking"
            price={125.56}
          />
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/maggi.png"}
            title="A pack of Maggi seasoning cube"
            price={125.56}
          />
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/polite.png"}
            title="Simple product"
            price={125.56}
          />
          <Product
            basis="basis-1/2 lg:basis-1/3"
            image={"/image/products/mamarice.jpg"}
            title="Simple product"
            price={125.56}
          />
        </div>
      </section>
    </>
  );
};

export default Special;
