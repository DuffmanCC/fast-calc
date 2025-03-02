import useSoroban from "../hooks/useSoroban";
import Beads from "./Beads";

export default function Soroban({
  data,
  columns = 1,
}: {
  data: string;
  columns?: number;
}) {
  const { beads, sorobanSize } = useSoroban(data, columns);

  return (
    <div className="relative">
      <div className="absolute h-[1rem] w-full bg-slate-700 top-[4.05rem] px-4 z-10">
        <div className="h-[.33rem] bg-white relative top-[.33rem]"></div>
      </div>

      <div className="flex gap-.5 border-[1rem] border-slate-700 p-[.1rem] pt-0">
        {Array.from({ length: sorobanSize })
          .map((_, i) => (
            <div className="flex flex-col gap-4 relative " key={i}>
              <div className="w-1 bg-slate-700 left-[1.15rem] -top-[.25rem] -bottom-[.25rem] absolute"></div>
              <div className="h-12">
                <Beads move={beads[i][0]} />
              </div>
              <div className="h-[7.6rem]">
                <Beads
                  move={beads[i][1]}
                  black={(sorobanSize - 1 - i) % 3 === 0}
                />
                <Beads move={beads[i][2]} />
                <Beads move={beads[i][3]} />
                <Beads move={beads[i][4]} />
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}
