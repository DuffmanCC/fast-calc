import { useEffect } from "react";
import { CONFIG } from "../tools/constants";
import type { Config, ConfigKeys } from "../types";
import Checkbox from "./Checkbox";
import Input from "./Input";

interface ConfigProps {
  config: Config;
  setConfig: (config: Config) => void;
}

export default function Config({ setConfig, config }: ConfigProps) {
  useEffect(() => {
    if (config.min > config.max) {
      CONFIG.min.error = "Min must be less than max";
      CONFIG.max.error = "Max must be greater than min";
      config.max = config.min + 1;
    } else {
      CONFIG.min.error = "";
      CONFIG.max.error = "";
    }

    if (config.limitMin >= config.limitMax) {
      CONFIG.limitMin.error = "Min must be less than max";
      CONFIG.limitMax.error = "Max must be greater than min";
      config.limitMax = config.limitMin + 1;
    } else {
      CONFIG.limitMin.error = "";
      CONFIG.limitMax.error = "";
    }
  }, [config]);
  return (
    <form className="flex flex-col gap-4 justify-center w-full p-4 py-20">
      {Object.entries(config).map(([key, value]) =>
        typeof value === "number" ? (
          <Input
            key={key}
            label={CONFIG[key as ConfigKeys].label}
            onChange={(e) =>
              setConfig({ ...config, [key]: Number(e.target.value) })
            }
            value={value}
            min={CONFIG[key as ConfigKeys].min}
            max={CONFIG[key as ConfigKeys].max}
            error={CONFIG[key as ConfigKeys].error}
          />
        ) : (
          <Checkbox
            key={key}
            label={CONFIG[key as ConfigKeys].label}
            onClick={() => setConfig({ ...config, [key]: !value })}
          />
        )
      )}
    </form>
  );
}
