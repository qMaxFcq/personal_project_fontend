export function WannIcon() {
  return (
    <div className="w-28 h-12">
      <img src="https://wann.io/images/wann-logo.png" />
    </div>
  );
}

export function EllipsisIcon({ className = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      height="1rem"
      width="1rem"
      className={className}
    >
      <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </svg>
  );
}
