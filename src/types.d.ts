export type Config = {
  speed: number;
  numberOfRounds: number;
  limitMin: number;
  limitMax: number;
  includeZero: boolean;
  showSoroban: boolean;
};

export type ConfigFields = {
  [key: string]: {
    label: string;
    min?: number;
    max?: number;
    step?: number;
  };
};

export type ConfigKeys = keyof Config;
