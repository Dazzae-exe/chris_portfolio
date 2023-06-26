import React from "react";
import { motion } from "framer-motion";

function Box(props) {
  return (
    <motion.div className={props.className} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { type: "tween", duration: 0.8 }}} >
      <p className={props.paragraphClassName}>{props.boxText}</p>
      {props.contactBtn === true ? (
        <button
          type="button"
          className="py-2 px-6 rounded-xl bg-dark-schema/10 dark:bg-light-schema/10 text-lg font-medium"
          onClick={props.onShowModal}
        >
          Entra en contacto
        </button>
      ) : (
        ""
      )}
      {props.platziProfile === true ? (
        <a
          href="https://platzi.com/p/dazz_dev/"
          target="_blank"
          rel="norrefer"
          className="py-2 px-6 rounded-xl bg-dark-schema/10 dark:bg-light-schema/10 text-lg font-medium"
        >
          Platzi Courses Validation
        </a>
      ) : (
        ""
      )}
    </motion.div>
  );
}

export default Box;
