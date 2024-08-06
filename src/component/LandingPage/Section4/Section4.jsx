import ReuseMarquee from "../../ReusableMarquee/ReuseMarquee";

const Section4 = () => {
  return (
    <div>
      <div className="py-6 bg-red-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-5 md:px-8 lg:px-0 lg:max-w-[1300px] mx-auto">
            {/* col 1  */}
          <div className="flex flex-col items-center gap-2">
            <div className="overflow-hidden w-full">
              <img
                className="w-full  rounded-xl shadow-xl"
                src="/public/images/gif_1-c0e5b9ca.webp"
                alt="image"
              />
            </div>
            <div className="overflow-hidden w-full">
              <img
                className="w-full  rounded-xl shadow-xl"
                src="/public/images/gif_2-5dd6d925.webp"
                alt="image"
              />
            </div>
            <div className="overflow-hidden w-full">
              <img
                className="w-full  rounded-xl shadow-xl"
                src="/public/images/_triads_poster_1-606c415d.jpg"
                alt="image"
              />
            </div>
          </div>
            {/* col 2  */}
          <div className="flex flex-col items-center gap-2">
            <div className="overflow-hidden w-full">
              <img
                className="w-full  rounded-xl shadow-xl"
                src="/public/images/_triads_poster_3-3dc34e90.jpg"
                alt="image"
              />
            </div>
            <div className="overflow-hidden w-full">
              <img
                className="w-full  rounded-xl shadow-xl"
                src="/public/images/_triads_poster_4-a4509adc.jpg"
                alt="image"
              />
            </div>
          </div>
            {/* col 3  */}
          <div className="flex flex-col items-center gap-2">
            <div className="overflow-hidden w-full">
              <img
                className="w-full  rounded-xl shadow-xl"
                src="/public/images/_triads_poster_5-57a0864a.jpg"
                alt="image"
              />
            </div>
            <div className="overflow-hidden w-full">
              <img
                className="w-full  rounded-xl shadow-xl"
                src="/public/images/_triads_poster_6-309acb61.jpg"
                alt="image"
              />
            </div>
            <div className="overflow-hidden w-full">
              <img
                className="w-full  rounded-xl shadow-xl"
                src="/public/images/_triads_poster_7-0bf95dcb.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* marquee  */}
      <ReuseMarquee
        className={"max-h-[100px] overflow-hidden border-y-2 border-red-700"}
        direction={"left"}
      >
        <img
          className="object-fill h-[80px]"
          src="/public/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/public/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/public/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/public/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/public/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/public/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/public/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/public/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/public/images/divider_-d86f4e6d.png"
          alt="image"
        />
      </ReuseMarquee>
    </div>
  );
};

export default Section4;
