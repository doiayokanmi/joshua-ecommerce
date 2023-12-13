import Image from "next/image";
import React, { useRef } from "react";
import Product from "./card/Product";
import CatHead from "./ui/CatHead";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Special = ({
  title,
  extraStyle,
}: {
  title: string;
  extraStyle: string;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLDivElement).scrollBy({
        left: 150,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      (scrollContainerRef.current as HTMLDivElement).scrollBy({
        left: -150,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="lg:px-12 lg:rounded py-2">
        <div className="bg-white lg:rounded overflow-x-hidden">
          <CatHead title={title} extraStyle={extraStyle} />

          <div className="px-4 relative overflow-x-hidden">
            <div
              className="flex space-x-1 nobar overflow-x-auto"
              ref={scrollContainerRef} 
            >
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
              <div onClick={handleScroll} className="absolute p-2 bg-primary rounded text-white right-4 top-1/2 -translate-y-1/2 cursor-pointer">
                <ChevronRight />
              </div>
              <div onClick={handleScrollLeft} className="absolute p-2 bg-primary rounded text-white left-4 top-1/2 -translate-y-1/2 cursor-pointer">
                <ChevronLeft />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Special;
