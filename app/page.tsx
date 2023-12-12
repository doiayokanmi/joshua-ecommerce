'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Special from './components/Special';
import Heading from './components/ui/Heading';
import CenterAds from './components/CenterAds';
import 'react-toastify/dist/ReactToastify.css';
import PageLayout from './components/layout/PageLayout';

export default function Home() {

  return (
    <>
      <PageLayout>
        <Hero />
        <Special title='Best rated' extraStyle='bg-red-500' />
        <motion.section
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:px-12 px-4 lg:space-x-8 lg:flex-row"
        >
          <div className="basis-1/4">
            <Heading title="Popular items" />
          </div>
          <Trending />
        </motion.section>
        <Special title='Top Selling' extraStyle='bg-green-500' />
        <Special title='black Friday' extraStyle='bg-black' />

        <CenterAds />
      </PageLayout>
    </>
  );
}
