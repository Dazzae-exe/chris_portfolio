import React from "react";

function Grid(props) {
  return (
    <div className={props.className}>
      <h2 className="py-2 px-4 bg-green-300 rounded-full w-fit">{props.title}</h2>
      <ul className="w-full flex flex-col items-start justify-start h-fit p-4 rounded-xl bg-dark-schema/5 dark:bg-light-schema/5">
        {props.list.map((listItem) => (
          <li key={listItem} className="text-lg font-medium">{listItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default Grid;
