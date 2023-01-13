import { useState } from "react";
import { Puff } from "react-loader-spinner";
import flameSucGif from "../assets/flame-success.gif";

function Contact() {
  const [loader, setLoader] = useState(false);

  return (
    <section className="max-w-full max-h-fit">
      <div className="container mx-auto w-full h-screen pt-12 flex flex-col">
        <h2 className="text-4xl font-bold leading-[2.5]">Contact</h2>

        <p className="text-2xl font-normal">
          I wonder if you're in this section it's because you might want to
          connect with me for some interesting project in your buckets. Feel
          free to contact me. We can book a meeting to talk more about the
          project.
        </p>

        <form method="post" className="grid grid-cols-12 gap-4 pt-12">
          <div className="w-full bg-gray-200 p-4 rounded-xl h-full flex flex-col items-start col-span-6 gap-y-2">
            <label
              htmlFor="name"
              className="dark:text-black text-lg font-normal"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Chris Marín..."
              className="w-full bg-gray-300 focus:bg-gray-400 outline-none rounded-xl py-1 px-2 focus:ring-2 focus:ring-gray-500 shadow-sm transition-all duration-100 ease-linear placeholder:text-gray-600 dark:text-black"
            />
            <label
              htmlFor="email"
              className="dark:text-black text-lg font-normal"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="chris@gmail..."
              className="w-full bg-gray-300 focus:bg-gray-400 outline-none rounded-xl py-1 px-2 focus:ring-2 focus:ring-gray-500 shadow-sm transition-all duration-100 ease-linear placeholder:text-gray-600 dark:text-black"
            />
            <label
              htmlFor="message"
              className="dark:text-black text-lg font-normal"
            >
              Message
            </label>
            <textarea
              placeholder="Your message..."
              name="message"
              id="message"
              className="w-full bg-gray-300 focus:bg-gray-400 outline-none rounded-xl py-1 px-2 focus:ring-2 focus:ring-gray-500 shadow-sm transition-all duration-100 ease-linear placeholder:text-gray-600 dark:text-black"
            ></textarea>
            <button
              type="button"
              className="w-full py-2 px-2 bg-gray-300 focus:bg-gray-400 shadow-sm focus:ring-2 focus:ring-gray-500 transition-all duration-100 ease-linear dark:text-black mt-4 rounded-xl text-center flex items-center justify-center"
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
                "Send me"
              )}
            </button>
          </div>
          <div className="relative top-48 z-10 w-full h-full flex flex-col items-center col-span-6">
            <img
              src={flameSucGif}
              alt="..."
              className="w-80 h-80 object-cover object-center bg-no-repeat drop-shadow-sm"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
