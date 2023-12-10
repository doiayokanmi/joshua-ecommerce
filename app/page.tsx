'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Special from './components/Special';
import Heading from './components/Heading';
import CenterAds from './components/CenterAds';
import Footer from './components/Footer';
import Layout from './components/layout/Layout';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const toastFunc = () => {
    toast.success(`Added to cart`);
  };

  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <motion.section
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:px-12 px-4 lg:space-x-8 lg:flex-row"
        >
          <div className="basis-1/4">
            <Heading title="Popular items" />
          </div>
          <Trending toastFunc={toastFunc} />
        </motion.section>
        <Special toastFunc={toastFunc} />
        <CenterAds />
        <Footer />
      </Layout>
    </>
  );
}
