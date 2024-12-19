import { CONFIG_LABELS } from "../tools/constants";
import type { Config } from "../types";
import Checkbox from "./Checkbox";
import Input from "./Input";

interface ConfigProps {
  config: Config;
  setConfig: (config: Config) => void;
}

export default function Config({ setConfig, config }: ConfigProps) {
  return (
    <form className="flex flex-col gap-2 justify-center w-full">
      {Object.entries(config).map(([key, value]) =>
        typeof value === "number" ? (
          <Input
            key={key}
            label={CONFIG_LABELS[key as keyof typeof CONFIG_LABELS]}
            onChange={(e) =>
              setConfig({ ...config, [key]: Number(e.target.value) })
            }
            value={value}
          />
        ) : (
          <Checkbox
            key={key}
            label={CONFIG_LABELS[key as keyof typeof CONFIG_LABELS]}
            onClick={() => setConfig({ ...config, [key]: !value })}
          />
        )
      )}
    </form>
  );
}
