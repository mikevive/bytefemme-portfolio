import Image from "next/image";

export default function ProjectIcon() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full flex justify-center items-center">
        <svg
          width="400"
          height="500"
          viewBox="0 0 400 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,0 400,0 400,400 350,450 0,450 0,50"
            fill="#dd2350"
          />
          <polygon
            points="80,50 350,50 350,370 320,400 50,400 50,80"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="absolute w-full h-full flex justify-center items-center">
        <Image
        src="/robot-4.png"
          alt="Bytefemme"
          width={500}
          height={500}
          objectFit="contain"
        />
      </div>
    </div>
  );
}
