import React from "react";
import NewPodcasts from "../components/NewPodcasts";
import ChannelPodcasts from "../components/ChannelPodcasts";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <NewPodcasts />
      <ChannelPodcasts />
      <Categories />
    </>
  );
};

export default Home;
