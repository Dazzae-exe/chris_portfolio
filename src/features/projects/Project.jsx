import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { useProjectSelectState } from "../../lib/recoil/projects/projectsSelect";

function Project() {
  const [projects, setProjects] = useRecoilState(useProjectSelectState);

  const projectHandler = (id) => {
    let obj = JSON.parse(JSON.stringify(projects));

    obj.map((arr) => {
      if (arr.id === id) {
        arr.selected = true;
      } else {
        arr.selected = false;
      }

      return arr;
    });

    setProjects(obj);
  };

  return (
    <div className="col-span-12 md:col-span-4 w-full h-fit border rounded-md">
      <ul className="w-full h-full last:border-b-0">
        <li className="border-b p-4 w-full flex items-center justify-end">
          <h3 className="text-xl font-extrabold">Choose</h3>
        </li>
        {projects.map((project, idx) => (
          <li
            className="border-b p-4 w-full flex items-center justify-end gap-x-2 hover:gap-x-8 transition-all duration-150 ease-in-out cursor-pointer last:border-b-0"
            key={project.id}
            onClick={() => projectHandler(idx)}
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
