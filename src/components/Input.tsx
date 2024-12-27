interface InputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  min?: number;
  max?: number;
  error?: string | null;
}

export default function Input({
  label,
  onChange,
  value = 0,
  min,
  max,
  error,
}: InputProps) {
  return (
    <label className="flex flex-col gap-1 items-start">
      {label}
      <input
        type="number"
        className="border px-4 py-2 leading-none w-24 md:w-24 text-center rounded"
        onChange={onChange}
        value={value}
        min={min}
        max={max}
      />

      {error && <small className="text-red-500">{error}</small>}
    </label>
  );
}
