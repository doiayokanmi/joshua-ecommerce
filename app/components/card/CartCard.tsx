"use client";

import React, { useState, useEffect } from "react";
import { Trash, PlusSquare, MinusSquare } from "lucide-react";
import Image from "next/image";
import { removeFromCart, updateCartItemQuantity } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  title: string;
  price: number;
  image: string;
  id: number;
  quantity: number;
  index: number;
}

const CartCard = ({ title, price, image, id, quantity, index }: Props) => {
  const cart = useAppSelector((state) => state.cart.cartArray);
  const dispatch = useAppDispatch();
  const [newQty, setNewQty] = useState(quantity);
  const [subTotal, setSubTotal] = useState(newQty * price);

  useEffect(() => {
    const newSubTotal = Number((newQty * price).toFixed(2));
    setSubTotal(newSubTotal);
  }, [newQty, price]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number((e.target as HTMLInputElement).value);
    if (Number.isNaN(value) || value < 1) {
      setNewQty(1);
    } else {
      setNewQty(value);
      dispatch(updateCartItemQuantity({ id, quantity: value }));
    }
  };

  const incrementQty = () => {
    setNewQty((prevQty) => prevQty + 1);
    dispatch(updateCartItemQuantity({ id, quantity: newQty }));

  }

  const decrementQty = () => {
    setNewQty((prevQty) => Math.max(prevQty - 1, 1));
    dispatch(updateCartItemQuantity({ id, quantity: newQty }));
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(index));
    toast.error(`${title} removed from cart`);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row space-x-4 odd:bg-gray-50 p-2 font- justify-between items-center">
        <div className="basis-1/2 flex items-center">
          <Image src={image} className="" width={100} height={100} alt={""} />
          <h1 className="text-primary ps-2">{title}</h1>
        </div>
        <div className="basis-1/2 flex flex-1 w-full py-2 justify-between">
          <p className="">#{price}</p>

          <div className="flex items-center">
            <MinusSquare className="cursor-pointer" onClick={decrementQty} />

            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={newQty}
              onChange={handleInputChange}
              className="text-primary text-center w-[34px] border outline-0"
            />
            <PlusSquare className="cursor-pointer" onClick={incrementQty} />
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
