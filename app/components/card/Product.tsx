import Image from "next/image";
import React from "react";
import { ShoppingBasket, Eye } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface props {
  image: string;
  title: string;
  price: number;
  basis: string;
  id: number;
}

const Product = ({ image, title, price, basis }: props) => {
  const cart = useAppSelector((state) => state.cart.cartArray);
  const dispatch = useAppDispatch();
  const quantity = 1;

  const addCart = () => {
    const findItem = cart.find(itemAvailable => itemAvailable.title === title);
    
    if (findItem) {
      toast.error(`${title} already in cart`);
    } else {
      dispatch(addToCart(item));
      toast.success(`${title} added to cart`);
    }
  };

  const item = {
    id: cart.length + 1,
    image,
    title,
    price,
    quantity,
  };
  return (
    <>
    
      <div
        className={`${basis} text-xs lg:text-base p-2 group transition-all mt-4 ease-in-out border-r border-b space-x-2 flex flex-col lg:flex-row`}
      >
        <div className="basis-1/2 flex-1 relative">
          <Image src={image} width={200} height={200} alt="" />

          <Eye
            size={36}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:block left-1/2 p-2 bg-primary text-white rounded top-1/2"
          />
        </div>

        <div className="basis-1/2 flex flex-col justify-between lg:justify-start flex-1">
          <Link href={"/"} className="max-h-12 text-clip overflow-hidden">
            {title}
          </Link>

          <div className="my-4">
            <p className="flex">❤💕💕❤❤</p>
            <p className="font-bold text-primary">${price}</p>
          </div>

          <div className="flex  space-x-1">
            <button
              onClick={addCart}
              className="rounded flex-1 p-2 text-xs capitalize flex justify-center items-center bg-black hover:bg-primary text-white"
            >
              <ShoppingBasket className="mr-1 hidden lg:block" size={14} />
              Add to cart
            </button>
            <button className="rounded scale-0 group-hover:scale-100 transition-all duration-300 p-2 capitalize bg-black hover:bg-primary hidden lg:block text-white">
              <ShoppingBasket size={14} />
            </button>
            <button className="rounded scale-0 group-hover:scale-100 transition-all duration-300 p-2 capitalize bg-black hover:bg-primary hidden lg:block text-white">
              <ShoppingBasket size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
