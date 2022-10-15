import React, { useEffect, useState } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions/useWindowDimensions";

const Constants = () => {
  const { height, width } = useWindowDimensions();
  const canvasGridSize = 20;
  const minGameSpeed = 10;
  const maxGameSpeed = 15;
  const [constants, setConstants] = useState({
    canvasWidth: width - width * 0.35,
    canvasHeight: height - height * 0.35,
    canvasGridSize: canvasGridSize,
    minGameSpeed: minGameSpeed,
    maxGameSpeed: maxGameSpeed,
  });

  useEffect(() => {
    setConstants({
      canvasWidth: width - width * 0.35,
      canvasHeight: height - height * 0.35,
      canvasGridSize: canvasGridSize,
      minGameSpeed: minGameSpeed,
      maxGameSpeed: maxGameSpeed,
    });
  }, [height, width]);

  return constants;
};

export default Constants;
