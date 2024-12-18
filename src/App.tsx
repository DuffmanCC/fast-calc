import Button from "./components/Button";
import Config from "./components/Config";
import { useConfig } from "./hooks/useConfig";
import { useGame } from "./hooks/useGame";

export default function App() {
  const {
    speed,
    numberOfRounds,
    min,
    max,
    setSpeed,
    setNumberOfRounds,
    setMin,
    setMax,
  } = useConfig();

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
  } = useGame(min, max, speed, numberOfRounds);

  return (
    <div className="relative container mx-auto text-center flex flex-col h-screen gap-8 max-w-screen-sm py-4 lg:py-12 px-4">
      <h1 className="text-5xl">Calculation</h1>

      <div className="flex flex-col gap-4 items-center">
        <p className="text-6x">Round: {round ? round : ""}</p>

        <div className="h-[10rem] relative flex justify-center items-center">
          <p
            className={`text-[10rem] leading-none transition-opacity ${
              opacity ? "opacity-100" : "opacity-0"
            }`}
          >
            {showResult
              ? arr.reduce((acc, curr) => acc + curr, 0)
              : arr[round - 1] >= 0
              ? `+${arr[round - 1]}`
              : arr[round - 1]}
          </p>
        </div>

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

      <Config
        speed={speed}
        numberOfRounds={numberOfRounds}
        min={min}
        max={max}
        setSpeed={setSpeed}
        setNumberOfRounds={setNumberOfRounds}
        setMin={setMin}
        setMax={setMax}
      />

      <div className="">
        <p className="bg-black text-white px-4 py-2 w-full font-mono">
          {JSON.stringify(arr)}
        </p>
      </div>
    </div>
  );
}
