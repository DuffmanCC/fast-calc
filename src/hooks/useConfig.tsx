import { useEffect, useRef, useState } from "react";

export function useConfig() {
  const [speed, setSpeed] = useState(2500);
  const [numberOfRounds, setNumberOfRounds] = useState(10);
  const [min, setMin] = useState(-9);
  const [max, setMax] = useState(9);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const config = localStorage.getItem("config");

    if (config) {
      const { speed, numberOfRounds, min, max } = JSON.parse(config);
      setSpeed(speed);
      setNumberOfRounds(numberOfRounds);
      setMin(min);
      setMax(max);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const config = {
      speed,
      numberOfRounds,
      min,
      max,
    };
    localStorage.setItem("config", JSON.stringify(config));
  }, [speed, numberOfRounds, min, max]);

  return {
    speed,
    numberOfRounds,
    min,
    max,
    setSpeed,
    setNumberOfRounds,
    setMin,
    setMax,
  };
}
