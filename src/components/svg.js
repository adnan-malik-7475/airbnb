import React from "react";

const SVGPath = {
  Wishlist:
  "M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z",
  filterIcon :
  "M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"

};
const SVG = ({
  fill,
  width,
  height,
  pathName,
  strokeWidth,
  strokeLinejoin,
  strokeLinecap,
  className,
  viewBox,
  strokeColor,
  src,
  style,
  text
}) => {
  const path = SVGPath[pathName];

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={viewBox}
      fill={fill}
      src={src}
      style={style}
      text={text}
    >
      <path
        d={path}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        strokeLinecap={strokeLinecap}
        fill={fill}
        stroke={strokeColor}
      />
    </svg>
  );
};

export default SVG;
