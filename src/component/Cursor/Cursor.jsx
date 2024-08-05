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
        src="data:image/png;base64,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"
        className="w-full h-full"
        alt="custom cursor"
      />
    </div>
  );
};

export default Cursor;
