import { useRecoilValue } from "recoil";
import { useProjectSelectValue } from "../../lib/recoil/projects/projectsSelect";

function ProjectSelect() {
  const projectSelected = useRecoilValue(useProjectSelectValue);

  return (
    <div className="relative col-span-12 md:col-span-8 w-full h-60 bg-transparent flex items-center justify-center border rounded-md overflow-hidden">
      {projectSelected.map((project) => (
        <div key={project.id}>
          <img
            src={project.projectImg}
            alt="project"
            className={`absolute top-0 left-0 w-full h-96 object-cover object-top bg-no-repeat transform transition-all duration-300 ease-in-out ${
              project.selected === false
                ? "-translate-y-8 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          />
          <a
            className={`absolute w-24 py-2.5 bg-gray-200 dark:bg-zinc-700 rounded-md z-10 bottom-8 right-8 shadow-sm transform transition-all duration-500 ease-in-out text-center ${
              project.selected === false
                ? "-translate-y-8 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
            type="button"
            href={project.link}
            target="_blank"
          >
            Info
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProjectSelect;
