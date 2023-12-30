import { useEffect, useState } from "react";

export const useWindowHeight = () => {
  const getSize = () => ({
    Height: window.innerHeight,
  });

  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
