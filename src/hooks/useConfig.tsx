import { useEffect, useRef, useState } from "react";

import { CONFIG_KEY, DEFAULT_CONFIG } from "../tools/constants";

export function useConfig() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const savedConfig = localStorage.getItem(CONFIG_KEY);

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

    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  }, [config]);

  return {
    config,
    setConfig,
  };
}
