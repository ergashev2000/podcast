import React from "react";
import ContentLoader from "react-content-loader";

const ChannelsLoader = props => {
  return (
    <>
      <ContentLoader
        width={200}
        height={200}
        viewBox="0 0 200 200"
        backgroundColor={"#333"}
        foregroundColor={"#999"}
        {...props}
      >
        <circle cx="90" cy="90" r="90" />
      </ContentLoader>
    </>
  );
};

export default ChannelsLoader;
