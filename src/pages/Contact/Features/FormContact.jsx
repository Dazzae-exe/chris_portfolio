import React from "react";
import { Puff } from "react-loader-spinner";

function FormContact() {
    const [loader, setLoader] = React.useState(false);

  return (
    <form
      method="post"
      className="w-full h-fit flex flex-col items-start justify-start"
    >
      <label htmlFor="name">
        Nombre
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Carlos M..."
        className="input-field"
      />

      <label htmlFor="email">
        Email
      </label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="chris@gmail..."
        className="input-field"
      />

      <label htmlFor="message">
        Mensaje
      </label>
      <textarea
        placeholder="Tu mensaje..."
        name="message"
        id="message"
        className="input-field"
      ></textarea>

      <button
        type="button"
        className="w-full py-2 px-2 bg-dark-schema/5 dark:bg-light-schema/5 focus:bg-dark-schema/10 dark:focus:bg-light-schema/10 hover:bg-dark-schema/10 dark:hover:bg-light-schema/10 shadow-sm transition-all duration-100 ease-in-out mt-4 rounded-md text-center flex items-center justify-center"
        onClick={() => setLoader(true)}
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
      </button>
    </form>
  );
}

export default FormContact;
