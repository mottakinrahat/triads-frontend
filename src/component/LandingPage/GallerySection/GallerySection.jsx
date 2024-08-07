import ReuseMarquee from "../../ReusableMarquee/ReuseMarquee";

const GallerySection = () => {
  return (
    <div id="gallery" className="relative   ">
      <ReuseMarquee
        className={"max-h-[80px] overflow-hidden border-y-4 border-red-700"}
      >
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
      </ReuseMarquee>

      <div
        
        className="h-full bg-[url('/images/gallery-bg.png')] bg-auto  bg-center  bg-repeat-x py-5 z-20 relative"
      >
        <div className="bg-primary-color absolute top-0 left-0 size-full opacity-30 z-10"></div>
        <div className="relative z-30">
          <img
            className="max-w-[80vw] md:max-w-[60vw] lg:max-w-[600px] mx-auto "
            src="/images/art_deco-2bd3e172.png"
            alt="img"
          />
        </div>
        <div className="grid relative z-30 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center justify-center items-center mx-auto gap-5 my-10 w-[90%]">
          <div className="w-full mx-auto ">
            <video
              muted
              autoPlay
              loop
              playsInline
              poster
              className="w-full h-full rounded-xl shadow-2xl"
            >
              <source src="/triads_vid.mp4" type="video/mp4" />
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
              className="w-full h-full rounded-xl shadow-2xl"
            >
              <source src="/t_vid_2_compressed-c77853cb.mp4" type="video/mp4" />
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
              className="w-full h-full rounded-xl shadow-2xl"
            >
              <source
                src="/t_vid_3_compressed_resized-9a4c835e.mp4"
                type="video/mp4"
              />
              <p>Sorry! Your browser does not support HTML5 videos.</p>
            </video>
          </div>
        </div>
        <div className="relative z-30">
          <img
            className="max-w-[80vw] lg:max-w-[600px] md:max-w-[60vw] mx-auto "
            src="/images/art_deco-2bd3e172.png"
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
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
        <img
          className="object-fill h-[80px]"
          src="/images/divider_-d86f4e6d.png"
          alt="image"
        />
      </ReuseMarquee>
    </div>
  );
};

export default GallerySection;
