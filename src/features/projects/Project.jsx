import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import {
  useProjectAnimState,
  useProjectSelectState,
} from "../../lib/recoil/projects/projectsSelect";
import { allProjects } from "../../utils/getAllProjects";

function Project() {
  const [project, setProject] = useRecoilState(useProjectSelectState);
  const [projectAnim, setProjectAnim] = useRecoilState(useProjectAnimState);

  const projectHandler = (evt) => {
    const timeoutNewProjects = setTimeout(() => {
      setProject([evt]);
      setProjectAnim(true);
    }, 1000);

    const timeoutImg = setTimeout(() => {
      setProject([]);
    }, 400);

    setProjectAnim(false);

    return timeoutNewProjects, timeoutImg;
  };

  return (
    <div className="col-span-6 w-full h-fit border rounded-md">
      <ul className="w-full h-full last:border-b-0">
        <li className="border-b p-4 w-full flex items-center justify-end">
          <h3 className="text-xl font-extrabold">Web development</h3>
        </li>
        {allProjects.map((project) => (
          <li
            className="border-b p-4 w-full flex items-center justify-end gap-x-2 hover:gap-x-8 transition-all duration-150 ease-in-out cursor-pointer last:border-b-0"
            key={project.projectId}
            onClick={() => projectHandler(project.imgLink)}
          >
            <span>
              <ArrowLeftIcon width={24} />
            </span>
            <h4>{project.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
