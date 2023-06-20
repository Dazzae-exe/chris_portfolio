import React from "react";
import Box from "../../components/Box";
import AboutText from "./Features/AboutText";
import GridSystem from "../../components/GridSystem";

const object = [
  {
    className: "w-full col-span-12 sm:col-span-6 h-fit flex flex-col items-start justify-start gap-y-4",
    title: "Technología",
    list: [
      "Animaciones",
      "Soluciones e-commerce",
      "Soluciones front-end",
      "CMS solutions",
    ],
  },
  {
    className: "w-full col-span-12 sm:col-span-6 h-fit flex flex-col items-start justify-start gap-y-4",
    title: "Stack de desarrollo",
    list: ["React", "framer-motion", "NodeJS", "Strapi"],
  },
];

function About() {
  const [gridObject, setGridObject] = React.useState(object);
  return (
    <section className="w-full h-full">
      <div className="container mx-auto w-full h-full flex flex-col items-start justify-start gap-y-12">
        <AboutText />
        <GridSystem
          gridOpts="grid grid-cols-12 w-full h-fit gap-8"
          gridState={gridObject}
        />
        <Box
          className="w-full h-fit rounded-xl overflow-hidden flex flex-col items-start justify-start gap-y-4 p-4 bg-green-300"
          boxText="He completado varios cursos en Platzi y todavía sigo aprendiendo en esta hermosa comunidad de estudiantes virtuales."
          platziProfile={true}
          paragraphClassName="text-3xl font-medium"
        />
      </div>
    </section>
  );
}

export default About;
