import React from "react";

function Box(props) {
  return (
    <div className={props.className}>
      <p className={props.paragraphClassName}>{props.boxText}</p>
      {props.contactBtn === true ? (
        <button
          type="button"
          className="py-2 px-6 rounded-xl bg-dark-schema/10 dark:bg-light-schema/10 text-lg font-medium"
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
    </div>
  );
}

export default Box;
