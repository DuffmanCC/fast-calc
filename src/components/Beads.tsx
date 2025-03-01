export default function Beads({
  move = false,
  black = false,
}: {
  move?: boolean;
  black?: boolean;
}) {
  return (
    <div
      className={`w-10 h-6 py-px transition-transform ralative ${
        move ? " translate-y-6" : ""
      } `}
    >
      <div
        className={`trapecio w-10 h-3 ${
          black ? "bg-slate-700" : "bg-orange-700"
        } rotate-180`}
      ></div>
      <div
        className={`trapecio w-10 h-3 ${
          black ? "bg-slate-800" : "bg-orange-800"
        }`}
      ></div>
    </div>
  );
}
