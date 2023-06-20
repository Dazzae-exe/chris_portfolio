import FormContact from "./Features/FormContact";

function Contact() {
  return (
    <section className="w-full h-full">
      <div className="container mx-auto w-full h-fit flex flex-col gap-y-4">
        <div className="w-full h-fit flex flex-col gap-y-4">
          <h2 className="text-4xl font-bold">Formulario de contacto</h2>
        </div>

        <FormContact />
      </div>
    </section>
  );
}

export default Contact;
