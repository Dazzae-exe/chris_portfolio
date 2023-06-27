import React from "react";
import { motion } from "framer-motion";
import FormContact from "../pages/Contact/Features/FormContact";
import { XMarkIcon as CloseIcon } from "@heroicons/react/24/outline";

function Modal(props) {
  return (
    <motion.div className="absolute w-full h-screen inset-0 z-20">
      <div className="black-layout absolute inset-0 bg-black/40"></div>
      <motion.div
        className="flex items-center justify-center relative h-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { type: "tween", duration: 0.8 },
        }}
      >
        <div className="w-1/2 h-fit flex flex-col items-start justify-start bg-light-schema dark:bg-dark-schema rounded-xl p-4 gap-y-4">
          <div className="flex items-center justify-between w-full h-fit">
            <h2>{props.title}</h2>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-dark-schema/5 transform hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={props.hideModal}
            >
              <CloseIcon width={24} height={24} />
            </button>
          </div>
          <p>
            Si has contactado con nosotros, no dudes en recibir un correo de
            vuelta lo mas pronto posible. Gracias por confiar en mi trabajo.
          </p>
          <FormContact />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
