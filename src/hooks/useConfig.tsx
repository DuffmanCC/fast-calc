import { useEffect, useRef, useState } from "react";
import { DEFAULT_CONFIG } from "../tools/constants";

export function useConfig() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const savedConfig = localStorage.getItem("config");

    if (savedConfig) {
      const parsedConfig = JSON.parse(savedConfig);
      const combinedConfig = { ...DEFAULT_CONFIG, ...parsedConfig };
      setConfig(combinedConfig);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem("config", JSON.stringify(config));
  }, [config]);

  return {
    config,
    setConfig,
  };
}
