// VerticalMarquee.js
import "./css/vertical.css";

const VerticalMarquee = () => {
  const images = Array(300).fill("/images/striaosLogo.png");

  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute w-full animate-vertical-scroll">
        <div className="flex flex-col space-y-4">
          {images.map((item, idx) => (
            <img key={idx} src={item} alt={`item ${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalMarquee;
