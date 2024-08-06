import React from "react";
import Marquee from "react-fast-marquee";
const ReuseMarquee = ({ text, direction, className, speed, children }) => {
  return (
    <div className={`${className}`}>
      <Marquee
        direction={direction}
        speed={speed}
        className="h-full text-center overflow-y-hidden"
      >
        {children}
      </Marquee>
    </div>
  );
};

export default ReuseMarquee;
