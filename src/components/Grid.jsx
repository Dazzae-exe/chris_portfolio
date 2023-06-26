import React from "react";
import { animate, motion } from "framer-motion";

function Grid(props) {
  return (
    <motion.div
      className={props.className}
      initial={props.initial}
      animate={props.animate}
    >
      <motion.h2
        className="py-2 px-4 bg-green-300 rounded-full w-fit dark:text-dark-schema"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, type: "spring", staggerChildren: 0.25 },
        }}
      >
        {props.title}
      </motion.h2>
      <motion.ul
        className="w-full flex flex-col items-start justify-start h-fit p-4 rounded-xl bg-dark-schema/5 dark:bg-light-schema/5"
        variants={props.variants}
        initial="hidden"
        animate="active"
      >
        {props.list.map((listItem) => (
          <motion.li
            key={listItem}
            className="text-lg font-medium"
            variants={props.item}
          >
            {listItem}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Grid;
