"use client";

import React, { useState, useEffect } from "react";
import { Trash, Plus, Minus } from "lucide-react";
import Image from "next/image";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "@/redux/features/cartSlice";
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
    let newSub = (Number(newQty * price)).toFixed(2);
    setSubTotal(newSub);
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
  };

  const decrementQty = () => {
    setNewQty((prevQty) => Math.max(prevQty - 1, 1));
    dispatch(updateCartItemQuantity({ id, quantity: newQty }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(index));
    toast.error(`${title} removed from cart`);
  };

  return (
    <>
      <div className="shadow-lg text-xs lg:text-base p-4 rounded mb-3 bg-white">
        <div className="flex space-x-4 justify-between ">
          <div className="flex">
            <Image src={image} className="" width={100} height={100} alt={""} />
            <div className="ps-2 ">
              <h1 className="">{title}</h1>
              <p className='py-4'>Price: <span className='text-primary font-semibold'>#{price}</span></p>
            </div>
          </div>
          <p className="lg:text-xl font-bold">#{subTotal}</p>
        </div>
        <div className="flex flex-row-reverse mt-3 justify-between items-center">
          <div className="flex items-center">
            <button
              className="text-white rounded font-bold p-1 bg-primary"
              onClick={decrementQty}
            >
              <Minus />
            </button>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={newQty}
              onChange={handleInputChange}
              className="text-primary text-center w-[44px] border-0 outline-0"
            />
            <button
              className="text-white rounded font-bold p-1 bg-primary"
              onClick={incrementQty}
            >
              <Plus />
            </button>
          </div>
          <button
            onClick={handleRemoveFromCart}
            className="p-1 lg:px-2 flex uppercase font-semibold items-center rounded shadow-lg text-white bg-red-500"
          >
            <Trash className="mr-2" /> remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
