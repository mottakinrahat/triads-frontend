import ReuseMarquee from "../../ReusableMarquee/ReuseMarquee";
import VerticalMarquee from "../../ReusableMarquee/VerticalMarquee";
import TextSlider from "./TextSlider";

const ChapterSection = () => {
  return (
    <div className=" overflow-x-hidden relative">
      <div className="bg-[url('/images/bg-images.jpg')] bg-contain bg-fixed bg-center w-full h-full absolute opacity-60">
        <div className="absolute bg-primary-color w-full h-full bg-opacity-60"></div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="background-video absolute w-full h-full z-10 opacity-60"
      >
        <source src="/public/chapter-background-video.mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 bg-[#4a1010] bg-opacity-60">
        <div className="min-h-[100vh] lg:max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-12 items-center">
          {/* left section */}
          <div className=" h-full relative  w-full lg:col-span-6 xl:col-span-5">
            <div className="flex absolute top-1/2 -translate-y-1/2 z-50 flex-col items-center py-10">
              <div className=" mx-auto px-5">
                <video
                  controls
                  loop
                  className="w-full h-full rounded-xl border-[3px] border-red-950"
                >
                  <source
                    src="https://api.flydex.io/media_data/triads_vid.mp4"
                    type="video/mp4"
                  />
                  <p>Sorry! Your browser does not support HTML5 videos.</p>
                </video>
              </div>
              <a href="#gallery">
                <button className="bg-red-600 mt-5 text-4xl font-bold rounded-xl hover:bg-gray-200 duration-300">
                  <h2 className="bg-red-950 p-3 px-5 text-red-700 mx-5 my-1 hover:text-white duration-300">
                    Gallery
                  </h2>
                </button>
              </a>
            </div>
            <div className="lg:h-full h-[600px] w-full relative">
              <div className="z-20 size-full">
                <VerticalMarquee margqueNumber={50} />
              </div>
              <div className="absolute z-30 top-0 left-0 size-full flex justify-center items-end">
                <img
                  className="w-[45%] opacity-80"
                  src="/images/el_1-eae3579d.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="h-full w-full flex flex-col justify-center  lg:col-span-6 xl:col-span-7">
            <div>
              <TextSlider />
            </div>
            <div className="flex items-center w-[80%] mx-auto mt-5 lg:mt-12 mb-10">
              <img
                className="opacity-60 w-1/2"
                src="../../../../public/images/el_2-30b04fbe.png"
                alt="pattern image"
              />
              <img
                className="opacity-60 w-1/2"
                src="../../../../public/images/el_2-30b04fbe.png"
                alt="pattern image"
              />
            </div>
          </div>
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
