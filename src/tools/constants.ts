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

export const CONFIG = {
  speed: { label: "Speed (ms)", min: 100, max: 5000, error: "", step: 100 },
  numberOfRounds: { label: "Rounds", min: 1, max: 100, error: "", step: 1 },
  min: { label: "Next min", min: -10000, max: 10000, error: "", step: 1 },
  max: { label: "Next max", min: -10000, max: 10000, error: "", step: 1 },
  limitMin: {
    label: "Limit sum min",
    min: -10000,
    max: 10000,
    error: "",
    step: 1,
  },
  limitMax: {
    label: "Limit sum max",
    min: -10000,
    max: 10000,
    error: "",
    step: 1,
  },
  includeZero: { label: "Include zero?", min: 0, max: 0, error: "", step: 1 },
};
