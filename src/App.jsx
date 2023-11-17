import React from "react";
import AsideBar from "./components/AsideBar";
import Header from "./components/Header";
import Detail from "./page/detail";
import Home from "./page/home";

const App = () => {
  return (
    <div className="flex">
      <AsideBar />
      <div className="w-4/5 min-h-screen">
        <Header />
        {/* <Detail /> */}
        <Home/>
      </div>
    </div>
  );
};

export default App;
