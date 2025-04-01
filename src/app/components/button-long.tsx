export default function ButtonLong({text = ""}) {
  return (
    <div className="relative w-full h-14">
      <div
        className="absolute w-full h-14"
        style={{ border: "solid 1.5px #9a92ab" }}
      ></div>
      <svg className="absolute" width="56" height="56" viewBox="0 0 56 56">
        <polygon points="0,0 0,56 46,56 10,0" fill="#f5f5f5" />
        <polygon
          points="1,10 1,55 31,55"
          stroke="#dd2350"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="10"
          y1="0"
          x2="46"
          y2="56"
          stroke="#9a92ab"
          strokeWidth="1.5"
        />
      </svg>
      <svg
        className="absolute right-0"
        width="56"
        height="56"
        viewBox="0 0 56 56"
      >
        <polygon
          points="1,33 11,23"
          fill="none"
          stroke="#dd2350"
          strokeWidth="2"
        />
        <polyline
          points="1,23 11,23 11,33"
          fill="none"
          stroke="#dd2350"
          strokeWidth="2"
        />
      </svg>
      <div
        className="absolute w-2/4 h-6 top-4 left-24"
        style={{ borderBottom: "solid 1.5px #dd2350" }}
      >
        <h3 className="font-bold text-secondary">{text}</h3>
      </div>
    </div>
  );
}
