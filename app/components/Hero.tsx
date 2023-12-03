import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Blinds, Check } from "lucide-react";
import { categories } from "@/util";

const Hero = () => {
  return (
    <>
      <section className="lg:px-12 p-4">
        <div className="border rounded py-4 pe-4 flex">
          <div className="basis-1/4 absolute lg:static h-0 lg:h-auto overflow-hidden">
            <p className="flex uppercase p-2 px-4 font-bold items-center">
              <Blinds size={14} className="mr-3" />
              <span>All Categories</span>
            </p>

            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.linkTo}
                className="flex text-gray-600 items-center p-2 px-4 hover:shadow hover:text-primary"
              >
                <Check size={14} className="mr-3" />

                <span>{category.title}</span>
              </Link>
            ))}
          </div>
          <div className="basis-3/4 flex-1 flex ps-4 overflow-hidden">
            <div className="min-w-full">
              <Image
                width={1200}
                height={400}
                alt="NextUI Fruit Image with Zoom"
                src="/image/1.jpg"
              />
            </div>
            <div className="min-w-full">
              <Image
                width={1200}
                height={400}
                alt="NextUI Fruit Image with Zoom"
                src="/image/2.jpg"
              />
            </div>
            <div className="min-w-full">
              <Image
                width={1200}
                height={400}
                alt="NextUI Fruit Image with Zoom"
                src="/image/3.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
