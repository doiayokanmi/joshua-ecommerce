'use client'

import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import { ShoppingBag } from 'lucide-react'
import CartCard from '../components/card/CartCard'
import { useAppSelector } from '@/redux/hooks'


const Page = () => {
    const cart = useAppSelector((state) => state.cart.cartArray);
    return (
    <>
    <PageLayout>
       <section className="lg:p-12 p-4">
            <div className="flex justify-center mb-4 items-center">
                <h1 className="text-primary mr-2 text-center text-3xl font-bold">
                    Cart
                </h1>
                <ShoppingBag />
            </div>

            <div className="flex flex-col lg:flex-row">
                <div className="basis-2/3 pe-4">
                    {
                        cart.map((cartItem, index)=> (

                            <CartCard key={index} title={cartItem.title} quantity={cartItem.quantity} price={cartItem.price} image={cartItem.image} id={index} />
                        ))
                    }
                </div>

                <div className="basis-1/3 text-white p-4 bg-primary">
                    <h1 className="text-2xl pb-4 font-bold">Cart Checkout</h1>
                    <p>
                    Ready to make your purchase? Click `Checkout` to breeze through and complete your order. We`re excited to get your goodies on their way to you! 🛍️💳
                    </p>
                </div>
            </div>
       </section>
    </PageLayout>
    </>
  )
}

export default Page