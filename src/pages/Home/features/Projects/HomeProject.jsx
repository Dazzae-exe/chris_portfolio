import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HomeProject(props) {
  return (
    <motion.div className="col-span-3 w-full h-fit flex flex-col items-start justify-start">
      <a target="_blank" rel="norrefer" href={props.url} className="w-full h-60 rounded-xl overflow-hidden">
        <img
          src={props.image}
          alt=""
          className="w-full h-full rounded-xl object-cover bg-no-repeat object-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
        />
      </a>
      <h2>{props.title}</h2>
      <p>{props.appDescription}</p>
    </motion.div>
  );
}

export default HomeProject;
