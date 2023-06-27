import React from "react";
import { motion } from "framer-motion";
import { Puff } from "react-loader-spinner";

const formVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      staggerChildren: 0.3,
      duration: 0.8,
    },
  },
};

function FormContact() {
  const [loader, setLoader] = React.useState(false);

  return (
    <motion.form
      method="post"
      className="w-full h-fit flex flex-col items-start justify-start"
      variants={formVariant}
      initial="initial"
      animate="animate"
    >
      <motion.label htmlFor="name" variants={itemVariant}>
        Nombre
      </motion.label>
      <motion.input
        type="text"
        name="name"
        id="name"
        placeholder="Carlos M..."
        className="input-field"
        variants={itemVariant}
      />

      <motion.label htmlFor="email" variants={itemVariant}>
        Email
      </motion.label>
      <motion.input
        type="text"
        name="email"
        id="email"
        placeholder="chris@gmail..."
        className="input-field"
        variants={itemVariant}
      />

      <motion.label htmlFor="message" variants={itemVariant}>
        Mensaje
      </motion.label>
      <motion.textarea
        placeholder="Tu mensaje..."
        name="message"
        id="message"
        className="input-field"
        variants={itemVariant}
      ></motion.textarea>

      <motion.button
        type="button"
        className="w-full py-2 px-2 bg-dark-schema/5 dark:bg-light-schema/5 focus:bg-dark-schema/10 dark:focus:bg-light-schema/10 hover:bg-dark-schema/10 dark:hover:bg-light-schema/10 shadow-sm transition-all duration-100 ease-in-out mt-4 rounded-md text-center flex items-center justify-center"
        onClick={() => setLoader(true)}
        variants={itemVariant}
      >
        {loader ? (
          <Puff
            height="24"
            width="24"
            radius={1}
            color="#181818"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          "Enviar"
        )}
      </motion.button>
    </motion.form>
  );
}

export default FormContact;
