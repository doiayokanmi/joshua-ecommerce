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
        <Special title='Top Selling' extraStyle='bg-green-500' />
        <Special title='black Friday' extraStyle='bg-black' />

        <CenterAds />
      </PageLayout>
    </>
  );
}
