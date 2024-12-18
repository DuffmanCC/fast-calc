import { useEffect, useState } from "react";

export function useGame(
  min: number,
  max: number,
  speed: number,
  numberOfRounds: number
) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [arr, setArr] = useState<number[]>([]);
  const [round, setRound] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [opacity, setOpacity] = useState(false);

  function randomNumber(min: number, max: number) {
    let num;
    do {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (num === 0);
    return num;
  }

  function reset() {
    setIsPlaying(false);
    setArr([]);
    setRound(0);
    setShowResult(false);
    setIsFinished(false);
  }

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setOpacity(false);

      setTimeout(() => {
        const rand = randomNumber(min, max);
        setArr((prev) => [...prev, rand]);
        setRound((prev) => prev + 1);

        setOpacity(true);
      }, 150);
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed, min, max]);

  useEffect(() => {
    if (round === numberOfRounds) {
      setIsPlaying(false);
      setIsFinished(true);
    }
  }, [round, numberOfRounds]);

  return {
    isPlaying,
    setIsPlaying,
    arr,
    round,
    showResult,
    isFinished,
    opacity,
    reset,
    setShowResult,
  };
}
