import { useState } from "react";
import Box from "../../components/Box";
import Modal from "../../components/Modal";
import HomeProjects from "./features/Projects/HomeProjects";

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-fit flex flex-col items-start gap-y-8">
      <HomeProjects />
      <Box
        className="container mx-auto w-full h-fit bg-dark-schema/5 dark:bg-light-schema/5 flex flex-col items-start justify-center rounded-xl gap-4 p-4"
        boxText="Creando todo diseño web que me encuentre en internet y mejorando el rendimiento de aplicaciones web como solo freelancer desarrollador front-end."
        contactBtn={true}
        paragraphClassName="text-3xl font-medium"
        onShowModal={() => setShowModal(true)}
      />
      {showModal ? (<Modal title="Contacto" hideModal={() => setShowModal(false)} />) : ""}
    </div>
  );
}

export default Home;
