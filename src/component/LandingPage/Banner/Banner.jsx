import React from 'react';
import ReuseMarquee from '../../ReusableMarquee/ReuseMarquee';
import VerticalMarquee from '../../ReusableMarquee/VerticalMarquee';

const Banner = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-[#4B0200] bg-opacity-80 z-10"></div>
            <div className="relative z-20">
                <ReuseMarquee 
                    gradient={true} 
                    speed={120} 
                    className="bg-[#4B0200] bg-shadow shadow-3xl text-8xl font-bold text-[#CC1414] w-full min-h-[130px] flex items-center">
                    三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入 三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
                </ReuseMarquee> 

                <div className='pt-20'>
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <img className='max-w-[600px]' src="/images/upBarWithText.png" alt="" />
                        <img className='max-w-[900px]' src="/images/striaosLogo.png" alt="" />
                        <p className='text-center text-shadow-lg text-2xl text-[#CC1414] font-bold'>
                            Follow the thin red line.<br />
                            The places it leads to will take you to the riches
                        </p>
                        <img className='max-w-[800px]' src="/images/bottomButton.png" alt="" />
                        <button>copy</button>
                    </div>
                </div>

                <VerticalMarquee>
                    <div className='w-40 flex flex-col gap-10'>
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
                    className="bg-[#4B0200] bg-shadow shadow-3xl text-8xl font-bold text-[#CC1414] w-full min-h-[130px] flex items-center" 
                    direction="right">
                    三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入 三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
                </ReuseMarquee>
            </div>
        </div>
    );
};

export default Banner;
