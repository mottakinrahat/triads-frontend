import ReuseMarquee from "../../ReusableMarquee/ReuseMarquee";

const GallerySection = () => {
  return (
    <div id="gallery">
      <ReuseMarquee className={"max-h-[80px] overflow-hidden border-y-4 border-red-700"}>
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

      <div className="py-5 bg-[url('/')] bg-red-800">
        <div>
          <img
            className="max-w-[80vw] md:max-w-[60vw] lg:max-w-[600px] mx-auto "
            src="/public/images/art_deco-2bd3e172.png"
            alt="img"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto gap-5 my-10 w-[90%]">
          <div className="w-full mx-auto ">
            <video
              muted
              autoPlay
              loop
              playsInline
              poster
              className="w-full h-full rounded-xl border-[6px] border-red-950 shadow-xl"
            >
              <source
                src="https://api.flydex.io/media_data/triads_vid.mp4"
                type="video/mp4"
              />
              <p>Sorry! Your browser does not support HTML5 videos.</p>
            </video>
          </div>
          <div className="w-full mx-auto  ">
            <video
              muted
              autoPlay
              loop
              playsInline
              poster
              className="w-full h-full rounded-xl border-[6px] border-red-950 shadow-xl"
            >
              <source
                src="https://api.flydex.io/media_data/triads_vid.mp4"
                type="video/mp4"
              />
              <p>Sorry! Your browser does not support HTML5 videos.</p>
            </video>
          </div>
          <div className="w-full mx-auto  ">
            <video
              muted
              autoPlay
              loop
              playsInline
              poster
              className="w-full h-full rounded-xl border-[6px] border-red-950 shadow-xl"
            >
              <source
                src="https://api.flydex.io/media_data/triads_vid.mp4"
                type="video/mp4"
              />
              <p>Sorry! Your browser does not support HTML5 videos.</p>
            </video>
          </div>
        </div>
        <div>
          <img
            className="max-w-[80vw] lg:max-w-[600px] md:max-w-[60vw] mx-auto "
            src="/public/images/art_deco-2bd3e172.png"
            alt="img"
          />
        </div>
      </div>
      <ReuseMarquee
        className={"max-h-[100px] overflow-hidden border-y-4 border-red-700"}
        direction={"right"}
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

export default GallerySection;
