import React from "react";
import { motion } from "framer-motion";

function AboutText() {
  return (
    <motion.div className="flex flex-col items-start justify-center w-full h-fit">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, type: "tween" },
        }}
      >
        Quien es Christian Marín?
      </motion.h2>
      <motion.p
        className="text-2xl font-normal"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, type: "tween", delay: 0.15 },
        }}
      >
        Desarollador Front-end aprendiendo paso a paso que pasa entre JavaScript
        y TypeScript. He estado aprendiendo programación por 2 años y todavía
        sigo aprendiendo mucho de esta hermosa carrera. Estoy en busca de
        construir y dejar mi grano de arena detras de cada proyecto en el que
        este envuelto.
      </motion.p>
    </motion.div>
  );
}

export default AboutText;
