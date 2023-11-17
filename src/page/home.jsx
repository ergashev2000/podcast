import React from "react";
import NewPodcasts from "../components/NewPodcasts";
import ChannelPodcasts from "../components/ChannelPodcasts";

const home = () => {
  return (
    <div>
      <NewPodcasts />
      <ChannelPodcasts/>
    </div>
  );
};

export default home;
