import Image from "next/image";
import _ from "lodash";

export default function ArticleIcon({ className = "" }) {
  return (
    <figure
      className={`relative  mt-5 bg-white border-1 border-gray-300 w-[320px] h-[200px] ${className}`}
    >
      <div className="absolute w-[100px] h-[100px] bg-primary top-[50px]"></div>
      <Image
        className="absolute"
        src="/test-tubes.png"
        alt="Bytefemme"
        width={250}
        height={250}
        objectFit="contain"
      />
      <div className="absolute flex flex-col gap-1 w-[150px] h-[100px] top-4 right-4">
        {_.times(12, (i: number) => (
          <div key={i} className="bg-gray-200 h-1"></div>
        ))}
      </div>
      <div className="absolute top-[-50px]">
        <svg
          width="350"
          height="300"
          viewBox="0 0 350 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="150,50 170,30 340,30 340,100 319,100"
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
          <polyline
            points="319,150 330,150 340,160 340,180 330,190 330,230 319,240"
            fill="none"
            stroke="#D1D5DB"
            strokeWidth="1"
          />
        </svg>
      </div>
    </figure>
  );
}
