// imgs
import Thrumyeyes from "../assets/projectPortfolio--black.png"
import Soon from "../assets/thrumyeyes.jpeg"


function Projects() {
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
    {
      name: "Coming soon",
      description:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cum ad consectetur ipsa laborum veniam eum dolorem ea, at eaque?",
      imgLink: Soon,
      projectId: "02",
      projectTailwindClass:
        "col-span-12 w-full h-fit flex justify-between flex-row-reverse",
      projectTailwindIdClass:
        "h-full w-full flex items-end text-5xl font-bold justify-start",
      projectTailwindBoxClass: "flex flex-col items-start w-full",
      projectTailwindBoxTextClass: "text-xl font-bold leading-[2.5] text-start",
      projectTailwindBoxDescriptionClass: "w-9/12 h-fit text-lg text-start",
    },
  ];

  return (
    <section className="max-w-full max-h-full">
      <div className="container w-full h-fit mx-auto grid grid-cols-12 gap-y-16">
        <h2 className="text-4xl font-bold leading-[2.5] col-span-12">
          Projects
        </h2>
        {allProjects.map((project) => (
          <>
            <div className={project.projectTailwindClass}>
              <figure className="w-full mobile:w-6/12 h-80 bg-gray-200 rounded-xl shadow-md overflow-hidden">
                <img
                  src={project.imgLink}
                  alt="..."
                  className="w-full object-cover object-center bg-no-repeat h-full"
                />
              </figure>
              <div className={project.projectTailwindBoxClass}>
                <h3 className={project.projectTailwindBoxTextClass}>
                  {project.name}
                </h3>
                <p className={project.projectTailwindBoxDescriptionClass}>
                  {project.description}
                </p>
                <span className={project.projectTailwindIdClass} id="idProject">
                  {project.projectId}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Projects;
