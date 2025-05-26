import { ReactNode } from "react";

interface CheckboxProps {
  label?: string;
  name?: string;
  required?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  value: boolean;
}

export default function Checkbox({
  label,
  name,
  required = false,
  onClick,
  children,
  value,
}: CheckboxProps) {
  return (
    <label className="flex flex-col gap-1 items-start" onClick={onClick}>
      <div>{label || children}</div>

      <div className="relative">
        <input
          type="checkbox"
          name={name}
          className={`
            w-8 h-8 appearance-none peer
            border rounded text-white bg-white
            checked:bg-blue-500 checked:border-0
            focus:border-blue-500
          `}
          required={required}
          checked={value}
        />

        <svg
          className="absolute w-7 h-7 top-0.5 left-0.5 hidden peer-checked:block pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </label>
  );
}
