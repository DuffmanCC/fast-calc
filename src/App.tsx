import { useState } from "react";
import packageJson from "../package.json";
import Button from "./components/Button";
import ButtonMenu from "./components/ButtonMenu";
import Config from "./components/Config";
import Countdown from "./components/Countdown";
import Soroban from "./components/Soroban";
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
    showSoroban,
    sorobanColumns,
  } = useGame(config);

  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="bg-slate-100 flex flex-col gap-2 h-screen p-4">
      <header className="">
        <h1 className="text-5xl text-center">Fast Calc</h1>

        <ButtonMenu
          onClick={() => setShowConfig(!showConfig)}
          isOpen={showConfig}
        />
      </header>

      <main className="grow relative container mx-auto text-center flex flex-col items-center gap-8 max-w-screen-sm bg-slate-100">
        <p className="text-6x">Round: {round ? round : ""}</p>

        <p
          className={`text-[7rem] h-[8rem] leading-none transition-opacity duration-75 ${
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

        {showSoroban && (
          <Soroban data={JSON.stringify(arr)} columns={sorobanColumns} />
        )}
      </main>

      <aside
        className={`bg-slate-300 absolute inset-0 flex flex-col justify-between transition ${
          showConfig ? "" : "-translate-x-full"
        }`}
      >
        <Config config={config} setConfig={setConfig} />

        <p className="p-2 text-sm text-slate-700 text-center">
          Made with ❤️ by {packageJson.author}-{" "}
          <small className="text-xs">v{packageJson.version}</small>
        </p>
      </aside>

      {showCountdown && <Countdown init={3} />}

      <footer className="bg-slate-900 text-white px-4 py-2 w-full font-mono overflow-x-auto">
        {JSON.stringify(arr)}
      </footer>
    </div>
  );
}
