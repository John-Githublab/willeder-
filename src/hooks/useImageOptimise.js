import React from "react";
const useAsyncImage = (src) => {
  const [loadedSrc, setLoadedSrc] = React.useState(null);
  React.useEffect(() => {
    setLoadedSrc(null);
    if (src) {
      const handleLoad = () => {
        setLoadedSrc(src);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [src]);
  if (loadedSrc === src) {
    return src;
  }
  //   return null;
};
export default useAsyncImage;
