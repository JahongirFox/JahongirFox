import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MyLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default MyLayout;