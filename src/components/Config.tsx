import Input from "./Input";

interface ConfigProps {
  speed: number;
  numberOfRounds: number;
  min: number;
  max: number;
  setSpeed: (speed: number) => void;
  setNumberOfRounds: (numberOfRounds: number) => void;
  setMin: (min: number) => void;
  setMax: (max: number) => void;
}

export default function Config({
  speed,
  numberOfRounds,
  min,
  max,
  setSpeed,
  setNumberOfRounds,
  setMin,
  setMax,
}: ConfigProps) {
  return (
    <form className="flex gap-2 justify-center w-full">
      <Input
        label="Speed"
        onChange={(e) => setSpeed(Number(e.target.value))}
        value={speed}
      />

      <Input
        label="Rounds"
        onChange={(e) => setNumberOfRounds(Number(e.target.value))}
        value={numberOfRounds}
      />

      <Input
        label="Min"
        onChange={(e) => setMin(Number(e.target.value))}
        value={min}
      />

      <Input
        label="Max"
        onChange={(e) => setMax(Number(e.target.value))}
        value={max}
      />
    </form>
  );
}
