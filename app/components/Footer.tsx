'use client'

import {
  ArrowBigRight,
  MailCheck,
  MapPin,
  Phone,
  TimerIcon,
} from "lucide-react";
import React, { useEffect } from "react";
import Heading from "./ui/Heading";
import Link from "next/link";
import Share from "./ui/Share";
import { getCategory } from "@/util/sanity";
import Image from "next/image";

const Footer = () => {
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
      <footer className="text-sm lg:px-12 bg-gray-50 mt-4 p-4 space-y-4 space-x-4">
        <div className="flex flex-col lg:flex-row justify-between">
        
          <div className="lg:pe-4 mb-4 lg:mb-0">
            <Heading title="CONTACT INFO" />
            <div className="mt-4 flex flex-col justify-between">
              <p className="flex mb-2 items-center">
                <MapPin className="mr-2" />
                <span>
                  San Luis Potosí, Centro Historico, 78000 San Luis Potosí, SLP,
                </span>
              </p>
              <p className="flex mb-2 items-center">
                <Phone className="mr-2" />
                <span>+2348089883403, +2349099908980</span>
              </p>

              <p className="flex mb-2 items-center">
                <MailCheck className="mr-2" />
                <span>
                  <a href="mailto:damilolakanmi@gmail.com">
                    damilolakanmi@gmail.com
                  </a>
                </span>
              </p>

              <p className="flex items-center">
                <TimerIcon className="mr-2" />
                <span>Open time: 8:00AM - 16:PM</span>
              </p>
            </div>
          </div>

          <div className="mb-4 lg:mb-0">
            <Heading title="CUSTOMER CARE" />

            <div className="mt-4 text-sm lg:text-sm">
              <Link
                className="flex hover:text-primary items-center  mb-2"
                href={""}
              >
                <ArrowBigRight size={12} className="mr-2" /> My Account
              </Link>
              <Link
                className="flex hover:text-primary items-center mb-2"
                href={""}
              >
                <ArrowBigRight size={12} className="mr-2" /> Support
              </Link>
              <Link
                className="flex hover:text-primary items-center mb-2"
                href={""}
              >
                <ArrowBigRight size={12} className="mr-2" /> FAQ
              </Link>
              <Link
                className="flex hover:text-primary items-center mb-2"
                href={""}
              >
                <ArrowBigRight size={12} className="mr-2" /> My Account
              </Link>
            </div>
          </div>

          <div className="mb-4 lg:mb-0">
            <Heading title="CATEGORIES" />

            <div className="mt-4 text-sm lg:text-sm">
              {categories.slice(6, 10).map((cat, index) => (
                <Link
                  href={`/category/${cat._id}`}
                  key={index}
                  className="flex hover:text-primary items-center  mb-2"
                >
                  <ArrowBigRight size={12} className="mr-2" /> {cat.name}
                </Link>
              ))}

              <Link
                className="flex hover:text-primary items-center mb-2"
                href={"/category"}
              >
                <ArrowBigRight size={12} className="mr-2" /> More categories
              </Link>
            </div>
          </div>
          
          <div className="mb-4 lg:mb-0">
           
           <div className="mt-4 text-sm lg:text-sm">
             <Image src="/image/qrcode.gif" width={200} height={150} alt="image" />
           </div>
         </div>
         
        </div>
      </footer>
    </>
  );
};

export default Footer;
