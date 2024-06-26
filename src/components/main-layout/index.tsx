import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <div className="w-full min-h-screen">
        <Navbar />
        <main className="w-full min-h-screen relative z-10">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
