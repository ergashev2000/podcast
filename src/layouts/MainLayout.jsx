import React, { Suspense } from "react";
import AsideBar from "../components/AsideBar";
import Header from "../components/Header";

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex" id="main">
        <Suspense>
          <AsideBar />
        </Suspense>
        <div className="w-4/5 min-h-screen p-2">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
