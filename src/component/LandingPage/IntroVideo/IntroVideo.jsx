import React, { useEffect } from 'react';

const IntroVideo = ({setShowVideo}) => {
    useEffect(() => {
        setTimeout(() => {
          setShowVideo(false);
        }, 3000);
      }, []);
    return (
        <div className="w-[100vw] h-screen overflow-hidden bg-black z-20 top-0 left-0 sticky">
            <video autoPlay playsInline poster>
                <source src='https://api.flydex.io/media_data/triads_vid.mp4'/>
            </video>
        </div>
    );
};

export default IntroVideo;