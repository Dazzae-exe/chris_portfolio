import { motion } from "framer-motion";
import FormContact from "./Features/FormContact";

function Contact() {
  return (
    <section className="w-full h-full">
      <div className="container mx-auto w-full h-fit flex flex-col gap-y-4">
        <motion.h2 className="text-4xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { type: "tween", duration: 0.8}}}>
          Formulario de contacto
        </motion.h2>
        <FormContact />
      </div>
    </section>
  );
}

export default Contact;
