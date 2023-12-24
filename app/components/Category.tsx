'use client'

import { getCategory } from "@/util/sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Category = () => {
  const [categories, setCategories] = React.useState<CategoryType[]>([]);

  type CategoryType = {
    name: string;
    image: string;
    _id: string;
  };

  useEffect(() => {
    const getCat = async () => {
      const cate: CategoryType[] = await getCategory();
      setCategories(cate);
    };

    getCat();
  }, []);

  return (
    <>
      <section className="lg:px-12 pt-2">
        <div className="flex rounded shadow-lg bg-white flex-wrap">
          {categories.slice(0, 12).map((category: CategoryType, index) => (
            <div key={index} className="basis-1/4 p-1 lg:basis-1/6">
              <div className="border relative overflow-hidden lg:h-[150px] h-[70px] rounded">
                <Image
                  src={category.image || "/image/food.png"}
                  width={720}
                  height={70}
                  className="rounded-t transition-all ease-in-out hover:scale-105 cursor-pointer"
                  alt="category"
                />
                <Link
                  href={`/category/${category._id}`}
                  className="absolute truncate p-1 text-xs lg:text-base bottom-0 left-0 w-full bg-overlay text-white text-center rounded-b"
                >
                  {category.name}
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
