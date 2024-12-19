import { useEffect, useRef, useState } from "react";
import { DEFAULT_CONFIG } from "../tools/constants";

export function useConfig() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const config = localStorage.getItem("config");

    if (config) {
      const { speed, numberOfRounds, min, max, includeZero } =
        JSON.parse(config);
      setConfig({ speed, numberOfRounds, min, max, includeZero });
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
      includeZero: config.includeZero,
    };
    localStorage.setItem("config", JSON.stringify(newConfig));
  }, [config]);

  return {
    config,
    setConfig,
  };
}
