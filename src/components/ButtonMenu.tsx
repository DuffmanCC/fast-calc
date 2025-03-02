export default function ButtonMenu({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <button
      className="absolute right-4 top-6 hover:scale-105 z-20"
      onClick={onClick}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

        {isOpen ? (
          <>
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </>
        ) : (
          <>
            <path d="M7 6h10" />
            <path d="M4 12h16" />
            <path d="M7 12h13" />
            <path d="M7 18h10" />
          </>
        )}
      </svg>
    </button>
  );
}
