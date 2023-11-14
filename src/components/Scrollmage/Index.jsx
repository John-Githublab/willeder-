import React, { useMemo } from "react";
import "./styles.scss";

function Slideshow({ attachment, style, className, delayed, children }) {
  const delay = delayed || 9500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === attachment.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={`slideshow ${className}`} style={{ ...style }}>
      <div
        className="slideshowSlider"
        style={{
          height: "100%",
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {attachment?.length > 0 &&
          attachment?.map((value, index) => (
            <div
              className="slide"
              key={index}
              style={{
                width: "100vw",
                height: "100vh",
                backgroundRepeat: "no-repeat",
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 26.56%, rgba(0, 0, 0, 0.75) 71.35%), url(${value}), lightgray 50% / cover no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {children}
              {/* <img
                src={value}
                style={{
                  objectFit: "stretch",
                  // height: "100%",
                  width: "100%",
                }}
              /> */}
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
