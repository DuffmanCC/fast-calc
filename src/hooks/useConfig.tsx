import { useEffect, useRef, useState } from "react";

export function useConfig() {
  const [config, setConfig] = useState({
    speed: 2500,
    numberOfRounds: 10,
    min: -9,
    max: 9,
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    const config = localStorage.getItem("config");

    if (config) {
      const { speed, numberOfRounds, min, max } = JSON.parse(config);
      setConfig({ speed, numberOfRounds, min, max });
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const newConfig = {
      speed: config.speed,
      numberOfRounds: config.numberOfRounds,
      min: config.min,
      max: config.max,
    };
    localStorage.setItem("config", JSON.stringify(newConfig));
  }, [config]);

  return {
    config,
    setConfig,
  };
}
