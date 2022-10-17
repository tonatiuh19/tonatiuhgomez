import React, { useEffect, useState } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions/useWindowDimensions";
import { isMobile } from "react-device-detect";

const Constants = () => {
  const { height, width } = useWindowDimensions();
  const canvasGridSize = 20;
  const minGameSpeed = 10;
  const maxGameSpeed = 15;
  const [constants, setConstants] = useState({
    canvasWidth: isMobile ? width - width * 0.1 : width - width * 0.2,
    canvasHeight: height - height * 0.35,
    canvasGridSize: canvasGridSize,
    minGameSpeed: minGameSpeed,
    maxGameSpeed: maxGameSpeed,
  });

  useEffect(() => {
    setConstants({
      canvasWidth: isMobile ? width - width * 0.1 : width - width * 0.2,
      canvasHeight: isMobile ? height - height * 0.45 : height - height * 0.35,
      canvasGridSize: canvasGridSize,
      minGameSpeed: minGameSpeed,
      maxGameSpeed: maxGameSpeed,
    });
  }, [height, width]);

  return constants;
};

export default Constants;
