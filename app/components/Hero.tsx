'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Blinds, Check } from "lucide-react";
import { images } from "@/util";
import { motion } from "framer-motion";
import Carousel from "./ui/Carousel";
import { getCategory } from "@/util/sanity";

const Hero = () => {
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
  });
  return (
    <>
      <motion.section
        initial={{ x: 1200 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:px-12 "
      >
        <div className="border bg-white p-2 lg:pe-4 flex">
          <div className="basis-1/4 rounded bg-white absolute lg:static hidden lg:block overflow-hidden">
            <p className="flex uppercase p-2 px-4 font-bold items-center">
              <Blinds size={14} className="mr-3" />
              <span>All Categories</span>
            </p>

            {categories.slice(0, 9).map((category, index) => (
              <Link
                key={index}
                href={`/category/${category._id}`}
                className="flex text-gray-600 items-center pt-2 px-4 hover:shadow hover:text-primary"
              >
                <Check size={14} className="mr-3" />

                <span>{category.name}</span>
              </Link>
            ))}
            <Link
                href={`/category`}
                className="flex text-gray-600 items-center pt-2 px-4 hover:shadow hover:text-primary"
              >
                <Check size={14} className="mr-3" />

                <span>{`More categories`}</span>
              </Link>
          </div>
          <div className="basis-3/4 relative flex-1 lg:ps-4 nobar overflow-auto lg:overflow-hidden">
          <Carousel images={images} />
            
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
