import packageJson from "../../package.json";
import { Config, ConfigFields } from "../types";

export const OPACITY_DURATION = 75;
export const COUNTDOWN_DURATION = 3000;
export const CONFIG_KEY = `config-v + ${packageJson.version}`;
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
    error: "Speed must be between 100 and 5000",
    condition: (value: number) => value < 100 || value > 5000,
  },
  numberOfRounds: {
    label: "Rounds",
    min: 2,
    max: 100,
    step: 1,
    error: "Rounds must be between 2 and 100",
    condition: (value: number) => value < 2 || value > 100,
  },
  limitMin: {
    label: "Limit sum min",
    min: 0,
    max: 9999999,
    step: 1,
    error: "Value must be between 0 and 9999999 and less than limit sum max",
    condition: (value, config) =>
      value < 0 || value > 9999999 || value >= config.limitMax,
  },
  limitMax: {
    label: "Limit sum max",
    min: 1,
    max: 9999999,
    step: 1,
    error: "Value must be between 1 and 9999999 and greater than limit sum min",
    condition: (value, config) =>
      value < 1 || value > 9999999 || value <= config.limitMin,
  },
  includeZero: {
    label: "Include zero?",
  },
  showSoroban: {
    label: "Show soroban?",
  },
};
