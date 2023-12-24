"use client";

import PageLayout from "@/app/components/layout/PageLayout";
import Share from "@/app/components/ui/Share";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Rating from '@mui/material/Rating';

const Page = ({ params }: { params: { product: string } }) => {
  const item = {
    id: 1,
    image: "image",
    title: "imagee",
    price: 123,
    quantity: 4,
  };

  const url = `localhost:3000/product/${params.product}`;
  const [imageSrc, setImageSrc] = useState("/image/products/holder.png");

  const dispatch = useAppDispatch();
  const addCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <>
      <PageLayout>
        <section className="lg:px-12 p-4">
          <div className="flex italic my-2 space-x-2">
            <span>Home</span>
            <span>/</span>
            <span>Product</span>
            <span>/</span>
            <span className="truncate">{params.product}</span>
          </div>
          <div className="flex flex-col mt-4 lg:space-x-4 lg:flex-row">
            <div className="basis-2/3 rounded bg-white p-4">
              <div className="flex flex-col lg:flex-row">
                <div className="basis-1/2 transition-all ease-in-out mb-2">
                  <Image
                    src={`${imageSrc}`}
                    width={1500}
                    height={1500}
                    alt=""
                  />

                  <div className="flex justify-between mt-2">
                    {[1, 2, 3, 5].map((item, index) => (
                      <div key={index} className="basis-1/4 p-1 last:pe-0">
                        <Image
                          src={`${imageSrc}`}
                          width={100}
                          height={100}
                          alt=""
                          onMouseOver={() =>
                            setImageSrc("/image/products/holder.png")
                          }
                          onMouseOut={() =>
                            setImageSrc("/image/products/holder.png")
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="basis-1/2 lg:ps-4">
                  <h1 className="capitalize">
                    The product title will display here in bold and capitalize
                    just as seen now
                  </h1>

                  <div className="flex py-4 justify-between items-start">
                    <p className="italic flex items-end">
                      <span className="text-4xl font-bold">₦125</span>{" "}
                      <span>/unit</span>
                    </p>

                    <p className="text-red-500 ">
                      -17%
                    </p>
                  </div>

                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

                  <p className="mb-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore aspernatur repudiandae numquam eligendi earum alias
                    id similique eos placeat facilis? Quae adipisci aspernatur
                    repudiandae debitis cumque est quaerat a nihil.
                  </p>

                  <Share />

                  <div className="group sticky bottom-2">
                    <button
                      disabled
                      onClick={addCart}
                      className="w-full rounded-md capitalize bg-primary text-white"
                    >
                      <div className="flex relative z-30 p-2 justify-center items-center">
                        <ShoppingBasket className="mr-2 absolute left-4" />
                        Add to cart
                      </div>

                      <div className="bg-black rounded h-0 group-hover:h-full transition-all ease-in-out bottom-0 absolute w-full left-0"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 rounded bg-white"></div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Page;
