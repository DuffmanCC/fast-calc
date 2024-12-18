import type { Config } from "../types";
import Input from "./Input";

interface ConfigProps {
  config: {
    speed: number;
    numberOfRounds: number;
    min: number;
    max: number;
  };
  setConfig: (config: Config) => void;
}

export default function Config({ setConfig, config }: ConfigProps) {
  return (
    <form className="flex gap-2 justify-center w-full">
      <Input
        label="Speed"
        onChange={(e) =>
          setConfig({ ...config, speed: Number(e.target.value) })
        }
        value={config.speed}
      />

      <Input
        label="Rounds"
        onChange={(e) =>
          setConfig({ ...config, numberOfRounds: Number(e.target.value) })
        }
        value={config.numberOfRounds}
      />

      <Input
        label="Min"
        onChange={(e) => setConfig({ ...config, min: Number(e.target.value) })}
        value={config.min}
      />

      <Input
        label="Max"
        onChange={(e) => setConfig({ ...config, max: Number(e.target.value) })}
        value={config.max}
      />
    </form>
  );
}
