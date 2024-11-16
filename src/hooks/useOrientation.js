import { useState, useEffect, useCallback } from "react";

const useOrientation = () => {
  const [orientation, setOrientation] = useState(false);

  const handleResize = useCallback(() => {
    setOrientation(window.innerHeight > window.innerWidth);
  }, []);

  useEffect(() => {
    window.screen.orientation.lock("landscape").catch((e) => {
      console.log('Orientation lock failed: ', e);
    });

    window.addEventListener("resize", handleResize, false);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return orientation;
};

export default useOrientation;