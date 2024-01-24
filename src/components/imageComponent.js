import React from 'react';

const Image = ({ src,src2, alt, className, style }) => {
  return <img src={src} alt={alt} src2={src2} className={className} style={style} />;
};

export default Image;