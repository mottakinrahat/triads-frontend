// VerticalMarquee.js
import "./css/vertical.css";

const VerticalMarquee = ({ margqueNumber = 300 }) => {
  const images = Array(margqueNumber).fill("/images/striaosLogo.png");

  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute w-full animate-vertical-scroll">
        <div className="flex flex-col space-y-4">
          {images.map((item, idx) => (
            <img
              className="w-full"
              key={idx}
              src={item}
              alt={`item ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalMarquee;
