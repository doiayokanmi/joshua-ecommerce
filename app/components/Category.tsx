import { categories } from "@/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <>
      <section className="lg:px-12 pt-2">
        <div className="flex rounded shadow-lg bg-white flex-wrap">
          {categories.map((category, index) => (
            <div key={index} className="basis-1/4 p-1 lg:basis-1/6">
              <div className="border relative overflow-hidden lg:h-[150px] h-[70px] rounded">
                <Image src={category.image || '/image/food.png'} width={720} height={70} className="rounded-t-lg" alt="category" />
                <Link href={category.linkTo} className="absolute truncate p-1 text-xs lg:text-base bottom-0 left-0 w-full bg-overlay text-white text-center rounded-b">
                {category.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
