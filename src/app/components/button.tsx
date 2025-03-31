export default function Button({ className = "" }) {
  return (
    <button className={`relative w-[256px] h-[64px] ${className}`}>
      <svg
        className="absolute top-0 left-0"
        width="256"
        height="64"
        viewBox="0 0 257 65"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="1,1 256,1 256,64 19,64 1,45"
          fill="none"
          stroke="#dd2350"
          strokeWidth="1"
        />
        <polygon points="8,7 248,7 248,57 24,57 8,41" fill="#dd2350" />
        <polygon
          points="237,8 247,8 247,18"
          fill="#ffffff"
          stroke="#dd2350"
          strokeWidth="2"
        />
        <polygon
          points="197,38 207,28"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />
        <polyline
          points="197,28 207,28 207,38"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
        />
      </svg>
      <p className="absolute top-[20px] left-[40px] text-white font-bold">
        GO TO PROJECTS
      </p>
    </button>
  );
}
