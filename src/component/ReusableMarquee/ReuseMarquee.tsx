import React from "react";
import Marquee from "react-fast-marquee";
const ReuseMarquee = ({ text, direction, className,speed }) => {
    return (
        <div className={className}>
            <Marquee direction={direction} speed={speed} >
                {text}
            </Marquee>
        </div>
    );
};

export default ReuseMarquee;