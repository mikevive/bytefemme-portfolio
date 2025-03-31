import Image from "next/image";
import Button from "./button";
import ButtonSmall from "./button-small";
import ArticleIcon from "./icons/article-icon";

export default function Hero() {
  return (
    <section className="relative flex flex-col w-full h-full">
      <figure className="absolute h-[90%] sm:h-full w-full sm:w-3/4 md:w-2/4 bottom-0 -right-28 sm:right-0 overflow-hidden">
        <Image
          className="object-contain object-right-bottom md:object-left-bottom "
          src="/person.png"
          alt="Bytefemme"
          fill
        />
      </figure>
      <div className="absolute flex flex-col items-start gap-6 top-14 right-auto lg:right-2/4 left-[5%] sm:left-20 md:left-42 lg:left-auto text-left w-2/4 sm:w-2/6 lg:w-auto">
        <blockquote className="text-5xl sm:text-6xl font-bold text-secondary">
          TURNING <span className="outlined lg:text-4xl">DATA</span> <br /> INTO CURES
        </blockquote>
        <p className="border-l-4 w-2/3 border-black pl-5">
          Hi, I’m Nath, a data scientist with a passion for drug discovery.
        </p>
        <Button className="hidden md:block" />
        <ButtonSmall className="block md:hidden" />
        <ArticleIcon className="hidden lg:block" />
      </div>
    </section>
  );
}
