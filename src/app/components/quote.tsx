import Image from "next/image";

export default function Quote() {
  return (
    <section className="h-[50vh] w-full relative">
      <Image
        className="absolute object-cover"
        src="/person-coding.png"
        fill
        alt="Bytefemme"
      />
      <div className="absolute h-full h-full flex items-center mx-5">
        <blockquote className="text-3xl md:text-5xl text-white">
          Data, Logic and Coffee <br /> In that Order
        </blockquote>
      </div>
    </section>
  );
}
