"use client";

import React from "react";
import { useState } from "react";
import { Lock, ShoppingCart, Search, Menu, X } from "lucide-react";
import { links } from "@/util";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <>
      <div className="bg-gray-100 text-xs flex flex-col lg:flex-row items-center justify-between lg:px-12 p-4">
        <p>
          Welcome to Emarket ! Wrap new offers / gift every single day on
          Weekends - New Coupon code: Happy2017
        </p>

        <div className="flex space-x-8 justify-between mt-4 items-center">
          <p className="flex space-x-2 items-center">🇬🇧 English</p>
          <p className="flex space-x-2 items-center">💵 USD</p>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs lg:px-12 lg:py-6 p-4">
        <Image src={"/image/logo.png"} width={80} height={50} alt="logo" />

        <div className="hidden lg:flex justify-between border border-primary w-1/2">
          <input type="text" className="p-2 flex-1 border outline-0" />
          <button className="p-2 text-white bg-primary flex items-center">
            <Search className="mr-2" size={14} />
            Search
          </button>
        </div>

        <Link
          className="text-gray-600 font-normal flex items-center"
          href={"/register"}
        >
          <Lock className="mr-2" size={12} />
          Login or register
        </Link>
      </div>

      <div className="relative bg-primary text-xs font-bold flex justify-between items-center lg:px-12 px-4 text-white">
        <div className="cursor-pointer lg:hidden" onClick={()=>setIsOpen(!isOpen)}>
          <Menu />
        </div>
          <div className={`flex transition-all ease-in-out absolute top-12 bg-primary left-0 w-full lg:w-auto lg:static flex-col lg:flex-row lg:h-auto overflow-hidden ${isOpen ? 'h-[300px]' : 'h-0'}`}>
            {links.map((link, index) => (
              <Link
                className={`uppercase p-4 hover:bg-black ${
                  currentPage == index && "bg-black"
                }`}
                href={link.linkTo}
                key={index}
                onClick={() => setCurrentPage(index)}
              >
                {link.title}
              </Link>
            ))}
          </div>

        <Link className="flex items-center p-4 space-x-8" href={"/register"}>
          <ShoppingCart className="mr-2" size={18} /> My Cart
        </Link>
      </div>
    </>
  );
};

export default Navbar;
