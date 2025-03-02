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
    error?: string;
    condition?: (value: number, config: Config) => boolean;
  };
};

export type ConfigKeys = keyof Config;
