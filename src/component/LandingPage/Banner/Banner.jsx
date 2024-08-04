import React from 'react';
import ReuseMarquee from '../../ReusableMarquee/ReuseMarquee';

const Banner = () => {
    return (
        <div>
            <ReuseMarquee text={'三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入 三合會正向你襲來 你無法逃脫 你無法隱藏 唯一的選擇就是加入'}
             gradient={true} speed={120} className="bg-[#4B0200] bg-shadow shadow-3xl text-8xl font-bold text-[#CC1414] w-full min-h-[130px] flex items-center" />
        </div>
    );
};

export default Banner;