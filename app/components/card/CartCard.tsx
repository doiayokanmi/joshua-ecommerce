"use client";

import React, { useState, useEffect } from "react";
import { Trash, PlusSquare, MinusSquare } from "lucide-react";
import Image from "next/image";
import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  title: string;
  price: number;
  image: string;
  id: number;
  quantity: number;
}

const CartCard = ({ title, price, image, id, quantity }: Props) => {
  const dispatch = useAppDispatch();
  const [newQty, setNewQty] = useState(quantity);
  const [subTotal, setSubTotal] = useState(newQty * price)

  useEffect(() => {
    if (Number.isNaN(newQty) || newQty < 1) {
      setNewQty(1);
    }
    setSubTotal(newQty * price)
  }, [newQty, price]);



  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
    toast.error(`${title} removed from cart`);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row space-x-4 odd:bg-gray-50 p-4 font-bold justify-between items-center">
        <div className="basis-1/2 flex items-center">
          <Image src={image} className="" width={100} height={100} alt={""} />
          <h1 className="text-primary ps-2">{title}</h1>
        </div>
        <div className="basis-1/2 flex flex-1 w-full py-2 justify-between">
          <p className="">#{price}</p>

          <div className="flex items-center">
            <PlusSquare />
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={newQty}
              onChange={(e) => setNewQty(parseInt(e.target.value))}
              className="text-primary text-center w-[34px] border outline-0"
            />
            <MinusSquare />
          </div>
          <p className="">#{subTotal}</p>
          <div onClick={handleRemoveFromCart} className="cursor-pointer">
            <Trash size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
