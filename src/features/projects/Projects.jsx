// imgs
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Thrumyeyes from "../../assets/png/projectPortfolio--black.png";

const allProjects = [
  {
    name: "Thrumyeyes",
    description:
      "Portfolio made for a professional photographer based in Miami, FL.",
    imgLink: Thrumyeyes,
    projectId: "01",
    projectTailwindClass: "col-span-12 w-full h-fit flex justify-between",
    projectTailwindIdClass:
      "h-full w-full flex items-end text-5xl font-bold justify-end",
    projectTailwindBoxClass: "flex flex-col items-end w-full",
    projectTailwindBoxTextClass: "text-xl font-bold leading-[2.5] text-end",
    projectTailwindBoxDescriptionClass: "w-9/12 h-fit text-lg text-end",
  },
];

function Projects() {
  return (
    <section className="max-w-full max-h-full">
      <div className="container w-full h-fit mx-auto grid grid-cols-12 gap-4">
        <h2 className="text-4xl font-bold col-span-12">Projects</h2>
        <div className="col-span-6 w-full bg-transparent p-4 flex items-center justify-center border rounded-md">
          Img content selected
        </div>
        <div className="col-span-6 w-full h-full border rounded-md">
          <ul className="w-full h-full last:border-b-0">
            <li className="border-b p-4 w-full flex items-center justify-end">
              <h3 className="text-xl font-extrabold">Web development</h3>
            </li>
            <li className="border-b p-4 w-full flex items-center justify-end gap-x-2 hover:gap-x-8 transition-all duration-150 ease-in-out cursor-pointer">
              <span><ArrowLeftIcon width={24}/></span>
              <h4>Thrumyeyes</h4>
            </li>
            <li className="border-b p-4 w-full flex items-center justify-end gap-x-2 hover:gap-x-8 transition-all duration-150 ease-in-out cursor-pointer">
            <span><ArrowLeftIcon width={24}/></span>
              <h4>Option</h4>
            </li>
            <li className="p-4 w-full flex items-center justify-end gap-x-2 hover:gap-x-8 transition-all duration-150 ease-in-out cursor-pointer">
            <span><ArrowLeftIcon width={24}/></span>
              <h4>Option</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
