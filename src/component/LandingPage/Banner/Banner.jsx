import React from "react";
import ReuseMarquee from "../../ReusableMarquee/ReuseMarquee";
import VerticalMarquee from "../../ReusableMarquee/VerticalMarquee";
const Banner = () => {
  return (
    <div>
      <ReuseMarquee
        gradient={true}
        speed={120}
        className="bg-[#4B0200] bg-shadow shadow-3xl 
             text-8xl font-bold text-[#CC1414] w-full min-h-[130px] flex items-center"
      >
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
      </ReuseMarquee>

      <div>
        <div>
          <img
            className="max-w-[600px]"
            src="/images/upBarWithText.png"
            alt=""
          />
          <img src="" alt="" />
          <p></p>
          <img src="" alt="" />
          <button></button>
        </div>
      </div>
      <VerticalMarquee>
        <div className="w-40 flex flex-col gap-10">
          <img src="/images/striaosLogo.png" alt="" />
          <img src="/images/striaosLogo.png" alt="" />
          <img src="/images/striaosLogo.png" alt="" />
          <img src="/images/striaosLogo.png" alt="" />
          <img src="/images/striaosLogo.png" alt="" />
        </div>
      </VerticalMarquee>
      <ReuseMarquee
        gradient={true}
        speed={120}
        className="bg-[#4B0200] bg-shadow shadow-3xl text-8xl font-bold text-[#CC1414] w-full min-h-[130px]
              flex items-center"
        direction="right"
      >
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
        三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
      </ReuseMarquee>
    </div>
  );
};

export default Banner;

