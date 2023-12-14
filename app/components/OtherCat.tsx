import React from "react";
import Product from "./card/Product";

const OtherCat = () => {
  return (
    <>
      <section className="flex justify-between lg:justify-start lg:gap-4 p-2 lg:px-12 overflow-hidden flex-wrap bg-white">
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
      </section>
    </>
  );
};

export default OtherCat;
