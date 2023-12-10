'use client'

import React from "react";
import { Trash, PlusSquare, MinusSquare } from "lucide-react";
import Image from "next/image";
import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

interface Props {
    title: string;
    price: number;
    image: string;
    id: number;
    quantity: number;
}

const CartCard = ({ title, price, image, id, quantity }: Props) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="flex space-x-4 odd:bg-gray-50 p-4 font-bold justify-between items-center">
        <div onClick={handleRemoveFromCart} className="basis-1/8 cursor-pointer">
        <Trash size={24} />
        </div>
        <Image
          src={image}
          className="basis-1/8"
          width={100}
          height={100}
          alt={""}
        />
        <h1 className="text-primary basis-2/8 text-xl">{title}</h1>
        <p>#{price}</p>

        <div className="flex items-center basis-2/8">
          <PlusSquare />
          <input
            type="text"
            value={quantity}
            className="text-primary max-w-3 p-1 border outline-0"
          />
          <MinusSquare />
        </div>
      </div>
    </>
  );
};

export default CartCard;
