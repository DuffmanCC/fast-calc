import { CONFIG_FIELDS } from "../tools/constants";
import type { Config } from "../types";
import Checkbox from "./Checkbox";
import Input from "./Input";

interface ConfigProps {
  config: Config;
  setConfig: (config: Config) => void;
}

export default function Config({ setConfig, config }: ConfigProps) {
  return (
    <form className="flex flex-col gap-4 justify-center w-full p-4 py-20">
      {Object.entries(config).map(([key, value]) =>
        typeof value === "number" ? (
          <Input
            key={key}
            label={CONFIG_FIELDS[key].label}
            onChange={(e) =>
              setConfig({ ...config, [key]: Number(e.target.value) })
            }
            value={value}
            min={CONFIG_FIELDS[key].min}
            max={CONFIG_FIELDS[key].max}
            step={CONFIG_FIELDS[key].step}
          />
        ) : (
          <Checkbox
            key={key}
            label={CONFIG_FIELDS[key].label}
            value={value}
            onClick={() => setConfig({ ...config, [key]: !value })}
          />
        )
      )}
    </form>
  );
}
