import Image from "next/image";
import React from "react";
import { ShoppingBasket, Eye } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../ui/Button";

interface props {
  image: string;
  title: string;
  price: number;
}

const Product = ({ image, title, price }: props) => {
  const cart = useAppSelector((state) => state.cart.cartArray);
  const dispatch = useAppDispatch();
  const quantity = 1;

  const addCart = () => {
    const findItem = cart.find(
      (itemAvailable) => itemAvailable.title === title
    );

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
      <section
        className={`hover:shadow-xl text-xs lg:text-base group transition-all mt-4 mb-2 ease-in-out`}
      >
        <div className={`flex w-[150px] relative flex-col ease-in-out transition-all lg:hover:scale-101 rounded bg-white`}>
          <div className="basis-1/2  flex-1 relative">
            <Image src={image} className="rounded" width={150} height={150} alt="" />

            <Eye
              size={36}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer hidden group-hover:block left-1/2 p-2 bg-primary text-white rounded top-1/2"
            />
          </div>

          <div className="basis-1/2 p-2 flex flex-col justify-between lg:justify-start flex-1">
            <Link href={"/"} className="truncate text-sm">
              {title}
            </Link>
            <p className="font-bold py-2">${price}</p>

            <button
                onClick={addCart}
                className="rounded relative text-xs capitalize bg-black text-white"
              >
                <div className="flex relative z-30 p-2 justify-center items-center">
                <ShoppingBasket className="mr-1 hidden lg:block" size={14} />
                Add to cart
                </div>

                <div className="bg-primary h-0 group-hover:h-full transition-all ease-in-out bottom-0 rounded absolute w-full left-0">

                </div>
              </button>
            <div className="absolute right-0 top-2 text-xs p-1 bg-red-700">
              <p className="text-faded">-17%</p>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
