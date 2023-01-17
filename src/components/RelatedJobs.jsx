import { useState } from "react";

function RelatedJobs() {
  const [data, setData] = useState([
    {
      name: "TBet",
      description: "JavaScript, Angular, SCSS",
      id: 0,
    },
    {
      name: "Vediagames",
      description: "JavaScript, SvelteKit, TailwindCSS",
      id: 1,
    },
  ]);

  const whenMouseEnter = (id) => {
    const popUpDoc = document.getElementById(`fade${id}`);

    popUpDoc.classList.remove("hidden");

    const intv = setInterval(() => {
      popUpDoc.classList.replace("popUpHide", "popUpShow");
      clearInterval(intv);
    }, 200);

    return intv;
  };

  const whenMouseLeave = (id) => {
    const popUpDoc = document.getElementById(`fade${id}`);

    popUpDoc.classList.replace("popUpShow", "popUpHide");

    const intv = setInterval(() => {
      popUpDoc.classList.add("hidden");
      clearInterval(intv);
    }, 200);

    return intv;
  };

  return (
    <section className="max-w-full max-h-fit pt-16">
      <div className="container mx-auto w-full h-fit flex flex-col items-start gap-y-16">
        <h2 className="text-4xl font-bold leading-[2.5]">Related Jobs</h2>
        <div className="flex sm:gap-x-4 gap-y-4 sm:flex-row flex-col">
          {data.map((get) => (
            <div
              className="relative w-fit p-2 dark:bg-gray-800 bg-gray-200 rounded-xl"
              key={get.id}
            >
              <h3
                onMouseEnter={() => whenMouseEnter(get.id)}
                onMouseLeave={() => whenMouseLeave(get.id)}
                className="cursor-pointer w-full text-lg h-full"
                key={get.id}
              >
                {get.name}
              </h3>
              <div className="popUpHide hidden" id={`fade${get.id}`}>
                <span>{get.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedJobs;
