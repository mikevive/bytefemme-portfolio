import Image from "next/image";

export default function ArticleIcon({ className = "" }) {
  return (
    <figure
      className={`relative mt-5 w-[300px] h-[250px] ${className}`}
    >
      <div className="absolute w-[300px] h-[200px] bg-white border-1 border-gray-300"></div>
      <div className="absolute w-[100px] h-[100px] bg-primary top-[50px]"></div>
      <Image
        className="absolute"
        src="/test-tubes-3.png"
        alt="Bytefemme"
        width={275}
        height={275}
        objectFit="contain"
      />
      <div className="absolute top-[-50px]">
        <svg
          width="350"
          height="300"
          viewBox="0 0 350 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="150,50 170,30 320,30 320,100 299,100"
            fill="none"
            stroke="#9a92ab"
            strokeWidth="1"
          />
          <polyline
            points="299,150 310,150 320,160 320,180 310,190 310,230 299,240"
            fill="none"
            stroke="#9a92ab"
            strokeWidth="1"
          />
        </svg>
      </div>
    </figure>
  );
}
