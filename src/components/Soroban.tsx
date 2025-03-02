import { beadsCol } from "../tools/helpers";
import Beads from "./Beads";

export default function Soroban({
  data,
  columns = 1,
}: {
  data: string;
  columns?: number;
}) {
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
    .forEach((num, i) => {
      beads[i] = beadsCol(parseInt(num));
    });

  return (
    <div className="relative">
      <div className="absolute h-3 w-full bg-slate-700 top-[3.55rem] px-1 z-10">
        <div className="h-1 bg-white relative top-[.25rem]"></div>
      </div>
      <div className="flex gap-1 border-4 border-slate-700 p-[.1rem]">
        {Array.from({ length: columns }).map((_, i) => (
          <div className="flex flex-col gap-4 relative" key={i}>
            <div className="w-1 bg-slate-700 left-[1.15rem] -top-[.25rem] -bottom-[.25rem] absolute"></div>
            <div className="h-12">
              <Beads move={beads[i][0]} />
            </div>
            <div className="h-[7.5rem]">
              <Beads move={beads[i][1]} black={i % 3 === 0} />
              <Beads move={beads[i][2]} />
              <Beads move={beads[i][3]} />
              <Beads move={beads[i][4]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
