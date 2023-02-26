import { useRecoilValue } from "recoil";
import { useProjectAnimValue, useProjectSelectValue } from "../../lib/recoil/projects/projectsSelect";

function ProjectSelect() {
  const projectSelected = useRecoilValue(useProjectSelectValue);
  const projectAnim = useRecoilValue(useProjectAnimValue)

  return (
    <div className="relative col-span-6 w-full h-60 bg-transparent flex items-center justify-center border rounded-md overflow-hidden">
      <img
        src={projectSelected}
        alt="project"
        className={`absolute top-0 left-0 w-full h-96 object-cover object-top bg-no-repeat transform transition-all duration-300 ease-in-out ${
          !projectAnim
            ? "-translate-y-2 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      />
      <button
        className={`absolute w-24 py-2.5 bg-gray-200 rounded-md z-10 bottom-8 right-8 shadow-sm transform transition-all delay-150 duration-500 ease-in-out ${
          !projectAnim
            ? "-translate-y-2 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        type="button"
      >
        Info
      </button>
    </div>
  );
}

export default ProjectSelect;
