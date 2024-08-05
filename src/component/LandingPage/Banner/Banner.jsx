import React from 'react';
import ReuseMarquee from '../../ReusableMarquee/ReuseMarquee';
import VerticalMarquee from '../../ReusableMarquee/VerticalMarquee';

const Banner = () => {
    return (
        <div className="relative  overflow-hidden">
            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-[#4B0200] bg-opacity-80 z-10"></div>
           
            <div className="relative z-[300] col-span-8">
                <ReuseMarquee 
                    gradient={true} 
                    speed={120} 
                    className="bg-[#4B0200] bg-shadow shadow-3xl text-8xl font-bold text-[#CC1414] w-full min-h-[130px] flex items-center">
                    三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入 三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
                </ReuseMarquee> 

                <div className='pt-20 container z-[200]'>
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <img className='max-w-[600px]' src="/images/upBarWithText.png" alt="" />
                        <img className='max-w-[900px]' src="/images/striaosLogo.png" alt="" />
                        <p className='text-center text-shadow-lg text-2xl text-[#CC1414] font-bold leading-none'>
                            Follow the thin red line.<br />
                            The places it leads to will take you to the riches
                        </p>
                        <div className='relative max-w-5xl mx-auto'>
                            <img className='w-full h-auto object-contain' src="/images/bottomButton.png" alt="" />
                            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center '>
                            <p className='text-2xl font-bold text-center break-words '>
                            D8sU6N62WpYS6Aby11kg4BLuJrdyWtUEhuFWf97R7Tw2
                            </p>
                        </div>
                        </div>
                       <div className='flex items-center justify-center -mt-5'><button className='py-1 px-8 active:bg-black active:border-black active:text-white  border rounded-2xl text-lg font-bold border-[#880b16] bg-[#880b16]'>Copy</button></div>
                    </div>
                    <div className='flex justify-center items-center my-12'>
                        <a className='block p-5 bg-[#490004] text-[#d6010f] uppercase rounded-sm text-4xl font-bold border-[#d6010f] border-l-[1rem] border-r-[1rem] border-t-[0.15rem] border-b-[0.15rem]' href='#' target='_blank'>Follow The rio line</a>
                    </div>
                </div>



                <ReuseMarquee 
                    gradient={true} 
                    speed={120} 
                    className="bg-[#4B0200] bg-shadow shadow-3xl text-8xl font-bold text-[#CC1414] w-full h-[140px] flex items-center z-[300]  " 
                    direction="right">
                    三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入 三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入
                </ReuseMarquee>
            </div>
            <div className='absolute top-0 left-[60px] max-w-[12%] w-full z-[200] '>
            <div className='absolute z-20 w-full h-full animate-marquee '>
                <div className='w-full space-y-4'>
                {Array(33).fill().map((_, index) => (
                    <img key={index} className='w-full h-auto object-contain animate-marquee' src="/images/striaosLogo.png" alt="" />
                ))}
                </div>
                <div className='w-full space-y-4'>
                {Array(33).fill().map((_, index) => (
                    <img key={index} className='w-full h-auto object-contain' src="/images/striaosLogo.png" alt="" />
                ))}
                </div>
            
            </div>
            </div>

            <div className='absolute top-0 right-[60px] max-w-[12%] w-full z-[200] '>
            <div className='absolute z-20 w-full h-full animate-marquee '>
                <div className='w-full space-y-4'>
                {Array(33).fill().map((_, index) => (
                    <img key={index} className='w-full h-auto object-contain animate-marquee' src="/images/striaosLogo.png" alt="" />
                ))}
                </div>
                <div className='w-full space-y-4'>
                {Array(33).fill().map((_, index) => (
                    <img key={index} className='w-full h-auto object-contain' src="/images/striaosLogo.png" alt="" />
                ))}
                </div>
            
            </div>
            </div>

            <div className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] left-1/2 '>
                <img className='animate-scaleUpDown' src="/images/_symbol-f3ddca6a.png" alt="symbol image" />
            </div>

        </div>
    );
};

export default Banner;
