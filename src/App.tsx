import { useState } from "react";
import packageJson from "../package.json";
import Button from "./components/Button";
import ButtonMenu from "./components/ButtonMenu";
import Config from "./components/Config";
import Countdown from "./components/Countdown";
import { useConfig } from "./hooks/useConfig";
import { useGame } from "./hooks/useGame";

export default function App() {
  const { config, setConfig } = useConfig();

  const {
    isPlaying,
    setIsPlaying,
    arr,
    round,
    showResult,
    opacity,
    isFinished,
    reset,
    setShowResult,
    showCountdown,
  } = useGame(config);

  const [showConfig, setShowConfig] = useState(false);

  return (
    <main className="relative container mx-auto text-center flex flex-col h-screen gap-8 max-w-screen-sm py-4 lg:py-12 px-4 bg-slate-100 overflow-hidden">
      <header className="mt-10">
        <h1 className="text-5xl">Fast Calc</h1>

        <ButtonMenu
          onClick={() => setShowConfig(!showConfig)}
          isOpen={showConfig}
        />
      </header>

      <div className="flex flex-col gap-12 items-center grow">
        <p className="text-6x">Round: {round ? round : ""}</p>

        <p
          className={`text-[8rem] h-[8rem] leading-none transition-opacity duration-75 ${
            opacity ? "opacity-100" : "opacity-0"
          }`}
          data-testid="number"
        >
          {showResult
            ? arr.reduce((acc, curr) => acc + curr, 0)
            : arr[round - 1] >= 0
            ? `+${arr[round - 1]}`
            : arr[round - 1]}
        </p>

        <div className="flex flex-col gap-4">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            disabled={isPlaying || isFinished}
          >
            Start
          </Button>

          <Button onClick={reset}>Reset</Button>

          <Button
            onClick={() => setShowResult(true)}
            disabled={!isFinished || showResult}
          >
            Show Result
          </Button>
        </div>
      </div>

      <aside
        className={`bg-slate-300 absolute inset-0 flex flex-col justify-between transition ${
          showConfig ? "" : "-translate-x-full"
        }`}
      >
        <Config config={config} setConfig={setConfig} />

        <p className="p-2 text-sm text-slate-700">
          Made with ❤️ by {packageJson.author}-{" "}
          <small className="text-xs">v{packageJson.version}</small>
        </p>
      </aside>

      {showCountdown && <Countdown init={3} />}

      <footer className="bg-slate-900 text-white px-4 py-2 w-full font-mono overflow-x-auto">
        {JSON.stringify(arr)}
      </footer>
    </main>
  );
}
