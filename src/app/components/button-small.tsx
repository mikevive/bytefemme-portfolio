export default function ButtonSmall({ className = "" }) {
  return (
    <button className={`w-12 h-12 bg-primary ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="15,15 33,33"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />
        <polyline
          points="33,18 33,33 18,33"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}
