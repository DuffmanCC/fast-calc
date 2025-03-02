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
    <form className="flex flex-col gap-6 justify-center w-full px-8 py-24">
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
            error={
              CONFIG_FIELDS[key].condition &&
              CONFIG_FIELDS[key].condition(value, config)
                ? CONFIG_FIELDS[key].error
                : ""
            }
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
