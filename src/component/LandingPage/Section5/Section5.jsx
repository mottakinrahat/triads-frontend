const Section5 = () => {
  return (
    <div className="bg-[url('/public/images/bg-images.jpg')] overflow-hidden">
      <div className="w-full h-full bg-red-700 bg-opacity-70  min-h-screen flex flex-col pt-10 px-2">
        <img
          className="max-w-full px-5  mx-auto"
          src="/public/images/boardCards.png"
          alt=""
        />
        <div
          style={{ marginBottom: "-60px" }}
          className="p-12 bg-black rounded-full bg-opacity-80  max-w-[1600px] w-full lg:mx-auto pb-20 mt-10 "
        >
          <h2 className="text-red-700 text-xl md:text-2xl font-bold text-center">
            $TRIADS is a meme coin devoid of any inherent worth or anticipation
            of financial gains.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section5;
