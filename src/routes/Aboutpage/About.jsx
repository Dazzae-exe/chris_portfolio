import {
  ArrowRightIcon,
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import Gif from "../../assets/gif/flame-no-connection.gif";

function About() {
  return (
    <section className="max-w-full min-h-screen">
      <div className="container mx-auto w-full h-full pt-12 flex flex-col gap-y-12">
        <div className="flex flex-col items-start justify-center w-full h-fit py-2">
          <h2 className="text-4xl font-bold leading-[2.5]">
            Who is Christian Marín?
          </h2>
          <p className="text-5xl font-normal leading-normal">
            Christian Marín is an front-end developer learning step by step what
            is going on between JavaScript and TypeScript.
          </p>
        </div>
        <div className="grid grid-cols-12 w-full h-fit gap-4">
          <div
            className="col-span-12 sm:col-span-6 w-full h-fit rounded-md border p-4 flex flex-col justify-center gap-y-4 cursor-pointer"
            onClick={() => (window.location.href = "/contact")}
          >
            <p className="text-4xl font-medium dark:text-gray-600">
              Feel free to contact me for projects and collaborations.
            </p>
            <figure className="w-[256px] h-[256px] mx-auto">
              <img src={Gif} alt="gif..." className="w-full h-full" />
            </figure>
            <div className="w-full flex items-center justify-end">
              <ArrowRightIcon
                width={48}
                className="transform rotate-45 dark:text-gray-600"
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 w-full h-fit rounded-md bg-transparent flex flex-col justify-center gap-y-4">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg dark:text-gray-600 bg-gray-200 py-1 px-2 w-fit rounded-md font-semibold">
                Technologies
              </h3>
              <p className="text-2xl font-normal">
                <span>HTML</span>, <span>CSS</span>, <span>TailwindCSS</span>,{" "}
                <span>JavaScript</span>, <span>ReactJS</span>,{" "}
                <span>SvelteKit</span>.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg dark:text-gray-600 bg-gray-200 py-1 px-2 w-fit rounded-md font-semibold">
                Goals for 2023
              </h3>
              <p className="text-2xl font-normal">
                <span>Dream job</span>, <span>Get my first car</span>,{" "}
                <span>Learn more about full-stack engineering</span>,{" "}
                <span>Read more books</span>, <span>Workout harder</span>,{" "}
                <span>Healthy life</span>,{" "}
                <span>Travel in Venezuela and out of the country</span>.
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 w-full h-fit rounded-md bg-transparent flex flex-col justify-center gap-y-4">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg bg-gray-200 py-1 px-2 w-fit rounded-md font-semibold flex gap-x-2 dark:text-gray-600">
                Email <EnvelopeIcon width={24} />
              </h3>
              <p className="text-2xl font-normal">
                <a
                  href="mailto:chrismarin0607@gmail.com"
                  className="hover:underline"
                >
                  chrismarin0607@gmail.com
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-y-4 sm:col-span-6 col-span-12">
              <h3 className="text-lg bg-gray-200 py-1 px-2 w-fit rounded-md font-semibold dark:text-gray-600 flex gap-x-2">
                Whatsapp me <PhoneArrowDownLeftIcon width={24} />
              </h3>
              <p className="text-2xl font-normal">
                <a href="tel:+584243157104" className="hover:underline">
                  +58 424 315 7104
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
