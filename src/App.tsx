import Soroban from "soroban-react-component";
import "soroban-react-component/style";
import packageJson from "../package.json";
import Button from "./components/Button";
import ButtonMenu from "./components/ButtonMenu";
import Config from "./components/Config";
import Countdown from "./components/Countdown";
import { useConfig } from "./hooks/useConfig";
import { useGame } from "./hooks/useGame";
import { COUNTDOWN_DURATION, SOROBAN_COLUMNS } from "./tools/constants";

export default function App() {
  const { config, setConfig } = useConfig();

  const {
    isPlaying,
    setIsPlaying,
    arr,
    round,
    result,
    showResult,
    opacity,
    isFinished,
    reset,
    setShowResult,
    showCountdown,
    showSoroban,
    showConfig,
    setShowConfig,
  } = useGame(config);

  return (
    <div className="bg-slate-100 flex flex-col gap-2 h-screen p-4 max-w-screen-sm overflow-auto border mx-auto items-center relative">
      <header>
        <h1 className="text-4xl text-center relative z-20">Play Soroban</h1>

        <ButtonMenu
          onClick={() => setShowConfig(!showConfig)}
          isOpen={showConfig}
        />
      </header>

      <main
        className={`grow relative flex flex-col items-center gap-8 bg-slate-100 ${
          showConfig ? "hidden" : ""
        }`}
      >
        <p className="text-2xl h-8">{round ? "Round: " + round : ""}</p>

        <p
          className={`text-[7rem] h-[8rem] leading-none transition-opacity duration-75 ${
            opacity ? "opacity-100" : "opacity-0"
          }`}
          data-testid="number"
        >
          {showResult
            ? result
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

        {showSoroban && <Soroban data={result} columns={SOROBAN_COLUMNS} />}
      </main>

      <aside
        className={`bg-slate-300 absolute z-10 inset-0 flex flex-col h-screen justify-between overflow-hidden transition ${
          showConfig ? "" : "-translate-y-full"
        }`}
      >
        <Config config={config} setConfig={setConfig} />
      </aside>

      {showCountdown && <Countdown init={COUNTDOWN_DURATION} />}

      <footer className={`${showConfig ? "hidden" : ""} w-full`}>
        <div className="bg-slate-900 text-white text-center px-4 py-2 w-full font-mono overflow-x-auto">
          {JSON.stringify(arr)}
        </div>

        <p className="p-2 text-sm text-slate-700 text-center">
          Made with ❤️ by DuffmanCC-{" "}
          <small className="text-xs">v{packageJson.version}</small>
        </p>
      </footer>
    </div>
  );
}
