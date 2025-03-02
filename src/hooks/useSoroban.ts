import { beadsCol } from "../tools/helpers";

export default function useSoroban(data: string, columns: number) {
  const dataArr = JSON.parse(data);
  const value = [false, true, true, true, true];
  const beads = Array(columns)
    .fill(null)
    .map(() => [...value]);

  let result = 0;

  for (let i = 0; i < dataArr.length; i++) {
    result += dataArr[i];
  }

  result
    .toString()
    .split("")
    .reverse()
    .forEach((num, i) => {
      beads[i] = beadsCol(parseInt(num));
    });

  return {
    beads,
    sorobanSize: columns,
  };
}
