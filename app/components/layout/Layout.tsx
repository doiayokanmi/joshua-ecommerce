"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AnimatePresence>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Layout;
