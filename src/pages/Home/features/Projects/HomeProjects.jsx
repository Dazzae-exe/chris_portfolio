import HomeProject from "./HomeProject";
import ProjectData from "../../../../data/ProjectList.json";
import { useState } from "react";

function HomeProjects() {
  const [projectList, setProjectList] = useState(ProjectData);

  return (
    <div className="container mx-auto w-full h-fit grid lg:grid-cols-12 md:grid-cols-9 sm:grid-cols-6 grid-cols-3 gap-8 overflow-hidden">
      {projectList.map((project) => (
        <HomeProject key={project.name} title={project.name} image={project.projectImg} url={project.link} appDescription={project.appDescription} />
      ))}

    </div>
  );
}

export default HomeProjects;
