import { useEffect, useState } from "react";
import { COUNTDOWN_DURATION, OPACITY_DURATION } from "../tools/constants";
import { randomNumber } from "../tools/helpers";
import type { Config } from "../types";

export function useGame(config: Config) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [arr, setArr] = useState<number[]>([]);
  const [round, setRound] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [opacity, setOpacity] = useState(true);
  const [showCountdown, setShowCountdown] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  function reset() {
    setIsPlaying(false);
    setArr([]);
    setRound(0);
    setShowResult(false);
    setIsFinished(false);
    if (intervalId) clearInterval(intervalId);
  }

  useEffect(() => {
    if (!isPlaying) return;

    setShowCountdown(true);

    const countdownId = setTimeout(() => {
      // first round without delay
      const rand = randomNumber(config.min, config.max, config.includeZero);
      setArr((prev) => [...prev, rand]);
      setRound((prev) => prev + 1);

      const arr = [rand];

      const intervalId = setInterval(() => {
        setOpacity(false);

        const opacityId = setTimeout(() => {
          const sumPrevNumbers = arr.reduce((acc, curr) => acc + curr, 0);

          const rand = randomNumber(
            config.limitMin - sumPrevNumbers,
            config.limitMax - sumPrevNumbers,
            config.includeZero
          );

          arr.push(rand);
          setArr((prev) => [...prev, rand]);
          setRound((prev) => prev + 1);

          setOpacity(true);
          clearInterval(opacityId);
        }, OPACITY_DURATION);
      }, config.speed);

      setIntervalId(intervalId);
      setShowCountdown(false);

      setTimeout(
        () => clearInterval(intervalId),
        config.speed * config.numberOfRounds - 1
      );
    }, COUNTDOWN_DURATION);

    return () => {
      clearTimeout(countdownId);
    };
  }, [isPlaying, config]);

  useEffect(() => {
    if (round === config.numberOfRounds) {
      setIsPlaying(false);
      setIsFinished(true);
    }
  }, [round, config.numberOfRounds]);

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
    showCountdown,
  };
}
