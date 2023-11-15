import React, { useMemo } from "react";
import "./styles.scss";

function Slideshow({ attachment, style, className, delayed, children }) {
  const delay = delayed || 6000;
  const [index, setIndex] = React.useState(0);
  const [currentArea, setCurrentArea] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      // setIndex((prevIndex) => prevIndex + 1);
      setIndex((prevIndex) => (prevIndex + 1) % attachment.length);
      setCurrentArea(
        (prevArea) => (prevArea + 100) % (attachment.length * 100)
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index, attachment.length, delay]);

  return (
    <div className={`slideshow ${className}`} style={{ ...style }}>
      <div
        className="slideshowSlider"
        style={{
          height: "100%",
          // transform: `translate3d(${-index * 100}%, 0, 0)`,
          transform: `translate3d(${-currentArea}%, 0, 0)`,
          transition: "transform 0.5s ease-in-out",
          willChange: "transform", // Enable hardware acceleration
          backfaceVisibility: "hidden",
          // Optimize for GPU rendering
        }}
      >
        {attachment?.length > 0 &&
          attachment?.map((value, ind) => (
            <div
              className="slide"
              key={ind}
              style={{
                // transform: `translateX(${currentArea}%)`,
                // width: "100vw",
                height: "100vh",
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 26.56%, rgba(0, 0, 0, 0.75) 71.35%), url(${value}), lightgray 50% / cover no-repeat`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "red",
              }}
            >
              {children}
            </div>
          ))}
      </div>

      <div className="slideshowDots" style={{ display: "none" }}>
        {attachment?.length > 0 &&
          attachment?.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
      </div>
    </div>
  );
}

export default Slideshow;
