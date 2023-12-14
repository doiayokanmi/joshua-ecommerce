'use client';

import React from 'react';
import Hero from './components/Hero';
import Special from './components/Special';
import CenterAds from './components/CenterAds';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from './components/layout/PageLayout';
import Category from './components/Category';
import Image from 'next/image';
import OtherCat from './components/OtherCat';

export default function Home() {

  return (
    <>
      <PageLayout>
        <Hero />

        <Category />
        <Special title='Best rated' extraStyle='bg-red-500' />

        <div className='lg:px-12 p-2 mt-2'>
          <Image src={'/image/banner.gif'} width={1200} height={250} alt='' />
        </div>
        <Special title='Top Selling' extraStyle='bg-green-500' />
        <Special title='black Friday' extraStyle='bg-black' />

        <CenterAds />
        <OtherCat />

        <Special title='Recommended for you' extraStyle='bg-warning-500' />

      </PageLayout>
    </>
  );
}
