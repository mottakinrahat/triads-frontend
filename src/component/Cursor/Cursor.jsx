import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX - cursor.clientWidth / 2}px, ${e.clientY - cursor.clientHeight / 2}px)`;
      }
    };

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.opacity = "0";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-[50px] h-[50px] pointer-events-none"
      style={{
        zIndex: 9999,
        opacity: 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <img
        src="../../../public/images/cursor.png"
        className="w-full h-full"
        alt="custom cursor"
      />
    </div>
  );
};

export default Cursor;
