"use client";

import React from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Layout>
        <section className="flex overflow-hidden relative h-screen">
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="basis-1/2 h-full hidden lg:block bg-primary"
          ></motion.div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="basis-1/2 relative flex-1 bg-gray-50 lg:px-32 p-4 h-full"
          >
            <Link className="absolute top-4 left-4 lg:right-4" href="/">
              <Image
                src={"/image/logo.png"}
                width={80}
                height={50}
                alt="logo"
              />
            </Link>

            <div className="flex flex-col items-center justify-center h-full">
              {children}
            </div>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};

export default AuthLayout;
