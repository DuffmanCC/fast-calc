import { useEffect, useState } from "react";

export default function Countdown({ init }: { init: number }) {
  const [countdown, setCountdown] = useState<number>(init);

  useEffect(() => {
    if (countdown === 0) return;

    const id = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
      clearInterval(id);
    };
  }, [countdown]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
      data-testid="countdown"
    >
      <div
        role="timer"
        aria-live="polite"
        className="text-[20rem] p-6 flex justify-center text-white font-mono no-scrollbar overflow-hidden"
      >
        {countdown}
      </div>
    </div>
  );
}
