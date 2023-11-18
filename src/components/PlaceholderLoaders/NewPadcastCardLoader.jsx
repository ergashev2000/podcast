import React from 'react';
import ContentLoader from 'react-content-loader';

const NewPadcastCardLoader = props => {
  return (
    <>
      <ContentLoader
        width={400}
        height={300}
        viewBox="0 0 430 300"
        backgroundColor={"#333"}
        foregroundColor={"#999"}
        {...props}
      >
        <rect x="0" y="230" rx="7" ry="4" width="271" height="25" />
        <rect x="0" y="265" rx="3" ry="3" width="119" height="17" />
        <rect x="0" y="0" rx="12" ry="12" width="388" height="217" />
      </ContentLoader>
    </>
  );
};

export default NewPadcastCardLoader;