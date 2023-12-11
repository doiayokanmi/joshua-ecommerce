'use client'

import React, {useState} from "react";
import { Trash, PlusSquare, MinusSquare } from "lucide-react";
import Image from "next/image";
import { removeFromCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
    toast.error(`${title} removed from cart`);
  };

  return (
    <>
      <div className="flex space-x-4 odd:bg-gray-50 p-4 font-bold justify-between items-center">
        
        <div className="basis-3/8 flex flex-col items-center lg:flex-row">
        <Image
          src={image}
          className=""
          width={100}
          height={100}
          alt={""}
        />
        <h1 className="text-primary">{title}</h1>
        </div>
        <p>#{price}</p>

        <div className="flex items-center basis-2/8">
          <PlusSquare />
          <input
            type="number"
            value={newQty}
            onChange={(e)=>setNewQty(parseInt(e.target.value))}
            className="text-primary text-center w-[34px] border outline-0"
          />
          <MinusSquare />
        </div>
        <div onClick={handleRemoveFromCart} className="basis-1/8 cursor-pointer">
        <Trash size={24} />
        </div>
      </div>
    </>
  );
};

export default CartCard;
