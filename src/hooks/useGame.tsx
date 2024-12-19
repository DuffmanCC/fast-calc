import { useEffect, useState } from "react";
import { COUNTDOWN_DURATION, OPACITY_DURATION } from "../tools/constants";
import type { Config } from "../types";

export function useGame(config: Config) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [arr, setArr] = useState<number[]>([]);
  const [round, setRound] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);

  function randomNumber(min: number, max: number, includeZero = false) {
    if (includeZero) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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

    setShowCountdown(true);

    const countdownId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setOpacity(false);

        const opacityId = setTimeout(() => {
          const rand = randomNumber(config.min, config.max, config.includeZero);
          setArr((prev) => [...prev, rand]);
          setRound((prev) => prev + 1);

          setOpacity(true);
          clearInterval(opacityId);
        }, OPACITY_DURATION);
      }, config.speed);

      setShowCountdown(false);

      setTimeout(
        () => clearInterval(intervalId),
        config.speed * config.numberOfRounds
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
