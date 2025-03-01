import { Config, ConfigFields } from "../types";

export const OPACITY_DURATION = 75;
export const COUNTDOWN_DURATION = 3000;
export const DEFAULT_CONFIG: Config = {
  speed: 1500,
  numberOfRounds: 10,
  limitMin: 0,
  limitMax: 9,
  includeZero: false,
  showSoroban: true,
};

export const CONFIG_FIELDS: ConfigFields = {
  speed: {
    label: "Speed (ms)",
    min: 100,
    max: 5000,
    step: 100,
  },
  numberOfRounds: {
    label: "Rounds",
    min: 2,
    max: 100,
    step: 1,
  },
  limitMin: {
    label: "Limit sum min",
    min: -10000,
    max: 10000,
    step: 1,
  },
  limitMax: {
    label: "Limit sum max",
    min: -10000,
    max: 10000,
    step: 1,
  },
  includeZero: {
    label: "Include zero?",
  },
  showSoroban: {
    label: "Include soroban?",
  },
};
