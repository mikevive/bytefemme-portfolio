import ButtonLong from "./button-long";
import ProjectIcon from "./project-icon";

export default function Projects() {
  return (
    <section className="flex flex-col items-center h-screen w-full">
      <div className="relative flex justify-center items-center w-full h-[100px] mt-10 mb-14">
        <svg
          className="absolute"
          width="450"
          height="100"
          viewBox="0 0 450 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="1,1 449,1 449,55 405,99 45,99 1,55"
            fill="none"
            stroke="#9a92ab"
            strokeWidth="2"
          />
        </svg>
        <h2 className="absolute font-bold text-3xl">PROJECTS</h2>
      </div>
      <div className="w-full flex-grow flex">
        <div className="w-2/5 flex justify-center items-center">
          <ProjectIcon/>
        </div>
        <div className="w-3/5 flex flex-col gap-8 pl-36 pr-20">
          <ButtonLong text="EXPLORATORY DATA ANALYSIS"/>
          <ButtonLong text="EXPLORATORY DATA ANALYSIS"/>
          <ButtonLong text="EXPLORATORY DATA ANALYSIS"/>
          <ButtonLong text="EXPLORATORY DATA ANALYSIS"/>
          <ButtonLong text="EXPLORATORY DATA ANALYSIS"/>
          <ButtonLong text="EXPLORATORY DATA ANALYSIS"/>
        </div>
      </div>
    </section>
  );
}
