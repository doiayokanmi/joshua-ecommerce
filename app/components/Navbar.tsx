"use client";

import React from "react";
import { useState } from "react";
import { Lock, ShoppingCart, Search, Menu, X } from "lucide-react";
import { links, categories } from "@/util";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useAppSelector } from "../../redux/hooks";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const cart = useAppSelector((state) => state.cart.cartArray);

  const newCat =  categories.slice(0, 4)

  return (
    <>
      <div className="flex relative z-50 bg-white justify-between items-center text-xs lg:px-12 lg:py-6 p-4">
        <Link href='/'>
        <Image src={"/image/logo.png"} width={80} height={50} alt="logo" />
        </Link>

        <div className="hidden lg:flex justify-between border border-primary w-1/2">
          <input type="text" className="p-2 flex-1 border outline-0" />
          <button className="p-2 text-white bg-primary flex items-center">
            <Search className="mr-2" size={14} />
            Search
          </button>
        </div>

        <Link
          className="text-gray-600 font-normal flex items-center"
          href={"/Auth/signIn"}
        >
          <Lock className="mr-2" size={12} />
          Login or register
        </Link>
      </div>

      <div className="sticky top-0 z-50 bg-primary text-xs font-bold flex justify-between items-center lg:px-12 px-4 text-white">
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`flex transition-all ease-in-out absolute top-12 bg-primary left-0 w-full lg:w-auto lg:static flex-col lg:flex-row lg:h-auto overflow-hidden ${
            isOpen ? "h-[340px]" : "h-0"
          }`}
        >
          <Link
              className={`uppercase p-4 hover:bg-black ${
                currentPage == 'Home' && "bg-black"
              }`}
              href={'/'}
              onClick={() => setCurrentPage('Home')}
            >Home
            </Link>

            {
             newCat.map((category, index)=>(
                <Link
                className={`uppercase p-4 hover:bg-black ${
                  currentPage == category.title && "bg-black"
                }`}
                href={`${category.linkTo}`}
                key={index}
                onClick={() => setCurrentPage(category.title)}
              >
                {category.title}
              </Link>
              ))
            }

          {links.map((link, index) => (
            <Link
              className={`uppercase p-4 hover:bg-black ${
                currentPage == link.title && "bg-black"
              }`}
              href={link.linkTo}
              key={index}
              onClick={() => setCurrentPage(link.title)}
            >
              {link.title}
            </Link>
          ))}
        </motion.div>

        <Link className="flex items-center p-4 space-x-8" href={"/cart"}>
          <Badge content={cart.length} size="sm" placement="top-left" color="danger">
            <ShoppingCart className="mr-2" size={18} />
          </Badge>{" "}
          My Cart
        </Link>
      </div>
    </>
  );
};

export default Navbar;
