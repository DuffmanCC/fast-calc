import { useState } from "react";
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
    <main className="relative container mx-auto text-center flex flex-col h-screen gap-8 max-w-screen-sm py-4 lg:py-12 px-4">
      <header className="relative z-10">
        <h1 className="text-5xl">Fast Calc</h1>

        <ButtonMenu onClick={() => setShowConfig(!showConfig)} />
      </header>

      <div className="flex flex-col gap-4 items-center grow">
        <p className="text-6x">Round: {round ? round : ""}</p>

        <p
          className={`text-[10rem] h-[10rem] leading-none transition-opacity duration-75 ${
            opacity ? "opacity-100" : "opacity-0"
          }`}
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
            disabled={isFinished}
          >
            {isPlaying ? "Stop" : "Start"}
          </Button>

          <Button onClick={reset} disabled={!isFinished}>
            Reset
          </Button>

          <Button onClick={() => setShowResult(true)} disabled={!isFinished}>
            Show Result
          </Button>
        </div>
      </div>

      <aside
        className={`pt-28 w-full h-screen bg-white absolute block transition ${
          showConfig ? "" : "-translate-x-full"
        }`}
      >
        <Config config={config} setConfig={setConfig} />
      </aside>

      {showCountdown && <Countdown init={3} />}

      <footer className="bg-black text-white px-4 py-2 w-full font-mono">
        {JSON.stringify(arr)}
      </footer>
    </main>
  );
}
