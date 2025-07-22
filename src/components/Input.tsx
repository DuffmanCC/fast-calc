interface InputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  error?: string | null;
}

export default function Input({
  label,
  onChange,
  value = 0,
  min,
  max,
  step,
  error,
}: InputProps) {
  return (
    <label className="flex flex-col gap-1 items-start">
      {label}
      <input
        type="number"
        className="border px-4 py-2 leading-none w-32 text-center rounded-lg"
        onChange={onChange}
        value={value}
        min={min}
        max={max}
        step={step}
      />

      {error && <small className="text-red-600">{error}</small>}
    </label>
  );
}
