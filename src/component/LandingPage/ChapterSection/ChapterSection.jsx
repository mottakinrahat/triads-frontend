import ReuseMarquee from "../../ReusableMarquee/ReuseMarquee";

const ChapterSection = () => {
  return (
    <div className="bg-[url('/public/images/bg-images.jpg')] bg-contain bg-fixed bg-center">
      <div className="bg-red-900 bg-opacity-70 relative">
        <div className="min-h-[80vh] lg:max-w-[90%] mx-auto flex items-center">
          <div className=" h-full w-full">
            <div className="flex flex-col items-center">
              <div className="w-[60%] mx-auto h-[300px] bg-black rounded-xl border border-gray-400"></div>
              <button className="bg-red-600 mt-5 text-4xl font-bold rounded-xl hover:bg-gray-200 duration-300">
                <h2 className="bg-red-950 p-3 px-5 text-red-700 mx-5 my-1 hover:text-white duration-300">Gallery</h2>
              </button>
            </div>
          </div>
          <div className="h-full w-full">gdsfsd</div>
        </div>
        {/* bottom marquee  */}
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
    </div>
  );
};

export default ChapterSection;
