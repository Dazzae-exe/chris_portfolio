import Project from "./Project";
import ProjectSelect from "./ProjectSelect";

function Projects() {
  return (
    <section className="max-w-full max-h-full">
      <div className="container w-full h-fit mx-auto grid grid-cols-12 gap-4">
        <h2 className="text-4xl font-bold col-span-12">Projects</h2>
        <ProjectSelect />
        <Project />
      </div>
    </section>
  );
}

export default Projects;
