import { Config } from "../types";

export const OPACITY_DURATION = 75;
export const COUNTDOWN_DURATION = 3000;
export const DEFAULT_CONFIG: Config = {
  speed: 1500,
  numberOfRounds: 10,
  min: -9,
  max: -9,
  limitMin: 0,
  limitMax: 0,
  includeZero: false,
};
export const CONFIG_LABELS = {
  speed: "Speed (ms)",
  numberOfRounds: "Rounds",
  min: "Min",
  max: "Max",
  limitMin: "Limit sum min",
  limitMax: "Limit sum max",
  includeZero: "Include zero?",
};
