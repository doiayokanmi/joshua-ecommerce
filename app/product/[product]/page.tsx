"use client";

import PageLayout from "@/app/components/layout/PageLayout";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = ({ params }: { params: { product: string } }) => {
  const item = {
    id: 1,
    image: "image",
    title: "imagee",
    price: 123,
    quantity: 4,
  };

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
            <div className="basis-2/3 bg-white p-4">
              <div className="flex flex-col lg:flex-row">
                <div className="basis-1/2 mb-2">
                  <Image
                    src={`/image/products/holder.png`}
                    width={1500}
                    height={1500}
                    alt=""
                  />

                  <div className="flex justify-between mt-2">
                    <div className="basis-1/4 p-1 last:pe-0">
                      <Image
                        src={`/image/products/holder.png`}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div className="basis-1/4 p-1 last:pe-0">
                      <Image
                        src={`/image/products/holder.png`}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div className="basis-1/4 p-1 last:pe-0">
                      <Image
                        src={`/image/products/holder.png`}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div className="basis-1/4 p-1 last:p-0">
                      <Image
                        src={`/image/products/holder.png`}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="basis-1/2 lg:ps-4">
                  <h1 className="font-bold capitalize text-2xl">
                    The product title will display here in bold and capitalize
                    just as seen now
                  </h1>

                  <p className="font-semibold py-4 italic">#125</p>


                    <div className="group sticky bottom-2">
                    <button
                      disabled
                      onClick={addCart}
                      className="w-full p-2 capitalize bg-black text-white"
                    >
                      <div className="flex relative z-30 p-2 justify-center items-center">
                        <ShoppingBasket className="mr-2" />
                        Add to cart
                      </div>

                      <div className="bg-primary h-0 group-hover:h-full transition-all ease-in-out bottom-0 absolute w-full left-0"></div>
                    </button>
                    </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 bg-white"></div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Page;
