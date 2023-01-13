import heroImg from "../assets/hero.jpg";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

function Hero() {
  return (
    <main className="max-w-full max-h-screen">
      <div className="container mx-auto w-full h-screen flex flex-col items-center justify-center gap-y-2">
        <div className="w-full flex items-center justify-center gap-x-2">
          <h1 className="text-5xl font-bold leading-loose">Christian Marín</h1>
        </div>
        <p className="text-2xl font-medium leading-relaxed text-center">
          Front-end Developer based in Venezuela.
        </p>
        <figure className="w-full h-1/2 rounded-xl overflow-hidden">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </figure>
        <div className="flex flex-col items-center">
          <ArrowDownCircleIcon
            width={48}
            className="relative top-8 animate-bounce text-black dark:text-white"
          />
          <span className="relative top-8 text-xs font-medium">
            scroll down to check my <span className="font-semibold">projects</span>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Hero;
