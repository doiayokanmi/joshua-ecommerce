import Image from "next/image";
import React from "react";
import Heading from "./ui/Heading";
import Product from "./card/Product";
import CatHead from "./ui/CatHead";

const Special = () => {
  return (
    <>
      <section className="lg:px-12 rounded p-4">
        <Image
          src={"/image/banner_top.jpg"}
          className="mb-4"
          width={1200}
          height={200}
          alt=""
        />

        <div className="bg-white">
          <CatHead />

          <div className="flex space-x-1 px-4 nobar overflow-x-auto">
            <Product
              image={"/image/products/noodles.png"}
              title="Delicious Noodles with Sauces entail in it"
              price={125.56}
            />
            <Product
              image={"/image/products/rice.jpeg"}
              title="A bag of rice is a container"
              price={125.56}
            />
            <Product
              image={"/image/products/5ltr.png"}
              title="5 litres of cooking oil for tasty cooking"
              price={125.56}
            />
            <Product
              image={"/image/products/maggi.png"}
              title="A pack of Maggi seasoning cube"
              price={125.56}
            />
            <Product
              image={"/image/products/polite.png"}
              title="Simple product"
              price={125.56}
            />
            <Product
              image={"/image/products/noodles.png"}
              title="Delicious Noodles with Sauces entail in it"
              price={125.56}
            />
            <Product
              image={"/image/products/rice.jpeg"}
              title="A bag of rice is a container"
              price={125.56}
            />
            <Product
              image={"/image/products/5ltr.png"}
              title="5 litres of cooking oil for tasty cooking"
              price={125.56}
            />
            <Product
              image={"/image/products/maggi.png"}
              title="A pack of Maggi seasoning cube"
              price={125.56}
            />
            <Product
              image={"/image/products/polite.png"}
              title="Simple product"
              price={125.56}
            />
            <Product
              image={"/image/products/mamarice.jpg"}
              title="Simple product"
              price={125.56}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Special;
