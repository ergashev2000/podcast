import React from "react";
import NewPodcasts from "../components/NewPodcasts";
import ChannelPodcasts from "../components/ChannelPodcasts";
import Categories from "../components/Categories";

const home = () => {
  return (
    <div>
      <NewPodcasts />
      <ChannelPodcasts />
      <Categories />
    </div>
  );
};

export default home;
