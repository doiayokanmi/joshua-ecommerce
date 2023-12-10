import React from "react";
import Layout from "./Layout";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Layout>
        <Navbar />
        {children}
        <Footer />

      </Layout>
    </>
  );
};

export default PageLayout;
