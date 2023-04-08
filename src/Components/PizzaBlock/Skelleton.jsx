import React from 'react';
import ContentLoader from 'react-content-loader';

const Skelleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#fafbc1"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="-6" y="286" rx="20" ry="20" width="266" height="80" />
    <rect x="188" y="334" rx="0" ry="0" width="5" height="1" />
    <circle cx="125" cy="125" r="125" />
    <rect x="16" y="398" rx="9" ry="9" width="89" height="27" />
    <rect x="127" y="392" rx="10" ry="10" width="130" height="39" />
  </ContentLoader>
);

export default Skelleton;
