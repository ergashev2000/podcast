import React from "react";
import NewPodcasts from "../components/NewPodcasts";
import ChannelPodcasts from "../components/ChannelPodcasts";
import Categories from "../components/Categories";

import Data from '../../data'

const Home = () => {

  const allData = Data
  console.log(allData);
  return (
    <>
      <NewPodcasts newPodcasts={allData} />
      <ChannelPodcasts />
      <Categories />
    </>
  );
};

export default Home;
