"use client";

import React, { useState, useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import { ShoppingBag } from "lucide-react";
import CartCard from "../components/card/CartCard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Button from "../components/ui/Button";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { resetCart } from "@/redux/features/cartSlice";
import Modal from "../components/ui/Modal";
import Flutterwave from "../components/payment/Flutterwave";

const Page = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  function openModal() {
    setIsOpen(true);
  }
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cartArray);
  const resetCartFunc = () => {
    dispatch(resetCart());
  };

  useEffect(() => {
    let newTotal = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      newTotal += itemTotal;
    });

    const formattedTotal = newTotal.toFixed(2);
    setTotal(Number(formattedTotal));
  }, [cart]);

  return (
    <>
      <PageLayout>
        <section className="lg:p-12 p-4 bg-gray-100">

          {cart.length === 0 ? (
            <div className="flex justify-center">
              <p className="text-center text-2xl">Your cart is empty.</p>
            </div>
          ) : (
            <section className=''>
              <div className="flex justify-center  mb-4 items-center">
            <h1 className="text-primary mr-2 text-center text-3xl font-bold">
              Cart
            </h1>
            <ShoppingBag />
          </div>
            <div className="flex flex-col lg:flex-row">
              <div className="basis-2/3 lg:me-4">
                {cart.map((cartItem, index) => (
                  <CartCard
                    key={index}
                    title={cartItem.title}
                    quantity={cartItem.quantity}
                    price={cartItem.price}
                    image={cartItem.image}
                    id={cartItem.id}
                    index={index}
                  />
                ))}

                <div className="py-4">
                  <Button
                    extraStyle="bg-red-700 inline-block"
                    title="Clear Cart"
                    icon={<MdOutlineRemoveShoppingCart className="mr-2" />}
                    func={openModal}
                  />
                </div>

                <Modal
                  content="Are you sure you want to clear your cart?"
                  header="Confirm Cart Clearing"
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  func={resetCartFunc}
                />
              </div>

              <div className="basis-1/3">
                <div className="text-white shadow-lg p-4 rounded-lg bg-primary">
                  <h1 className="text-2xl pb-4 font-bold">Cart Checkout</h1>
                  <p>
                    Ready to make your purchase? Click `Checkout` to breeze
                    through and complete your order. We`re excited to get your
                    goodies on their way to you! 🛍️💳
                  </p>

                  <div className="flex justify-between items-end border-t-2 mt-4 border-white">
                    <p>No. of Items:</p>
                    <p className="font-bold">{cart.length}</p>
                  </div>

                  <div className="flex justify-between items-end border-b-2 mb-4 border-white">
                    <p>Total:</p>
                    <p className="font-bold">{total}</p>
                  </div>

                  <Flutterwave total={total} />
                </div>
              </div>
            </div>
            </section>
          )}
        </section>
      </PageLayout>
    </>
  );
};

export default Page;
