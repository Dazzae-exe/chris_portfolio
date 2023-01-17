import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="max-w-full max-h-fit fixed inset-0 bg-gray-50 dark:bg-[#181818] z-20">
      <div className="container w-full h-16 flex items-center justify-between mx-auto">
        <h2 className="text-2xl font-bold ">{"<CM />"}</h2>
        <nav className="sm:block flex flex-col">
          <button
            className="hover:text-gray-800 transition-colors duration-150 ease-linear cursor-pointer dark:text-white dark:hover:text-gray-200 px-2 py-1 dark:hover:bg-gray-500 dark:hover:bg-opacity-50 hover:bg-gray-200 rounded-xl sm:hidden block"
            onClick={() => (openMenu ? setOpenMenu(false) : setOpenMenu(true))}
          >
            Menu
          </button>
          <div
            className={`block sm:hidden relative w-fit h-fit top-1 transform transition-all duration-150 ease-linear ${
              openMenu
                ? "z-20 opacity-100 translate-y-0"
                : "z-0 opacity-0 -translate-y-1"
            }`}
          >
            <ul className="w-24 h-fit absolute z-20 flex flex-col items-start justify-center gap-y-4 p-2 bg-gray-100 rounded-xl">
              <li>
                <Link
                  to={`/`}
                  className="hover:text-gray-800 transition-colors duration-150 ease-linear cursor-pointer dark:text-white dark:hover:text-gray-200 px-2 py-1 dark:hover:bg-gray-500 dark:hover:bg-opacity-50 hover:bg-gray-200 rounded-xl"
                  onClick={() => setOpenMenu(false)}
                >
                  Hero
                </Link>
              </li>
              <li>
                <Link
                  to={`/about`}
                  className="hover:text-gray-800 transition-colors duration-150 ease-linear cursor-pointer dark:text-white dark:hover:text-gray-200 px-2 py-1 dark:hover:bg-gray-500 dark:hover:bg-opacity-50 hover:bg-gray-200 rounded-xl"
                  onClick={() => setOpenMenu(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={`/contact`}
                  className="hover:text-gray-800 transition-colors duration-150 ease-linear cursor-pointer dark:text-white dark:hover:text-gray-200 px-2 py-1 dark:hover:bg-gray-500 dark:hover:bg-opacity-50 hover:bg-gray-200 rounded-xl"
                  onClick={() => setOpenMenu(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="sm:flex items-center gap-x-2 hidden font-medium text-lg">
            <li className="hover:text-gray-800 transition-colors duration-150 ease-linear cursor-pointer dark:text-white dark:hover:text-gray-200 px-2 py-1 dark:hover:bg-gray-500 dark:hover:bg-opacity-50 hover:bg-gray-200 rounded-xl">
              <Link to={`/`}>Hero</Link>
            </li>
            <li className="hover:text-gray-800 transition-colors duration-150 ease-linear cursor-pointer dark:text-white dark:hover:text-gray-200 px-2 py-1 dark:hover:bg-gray-500 dark:hover:bg-opacity-50 hover:bg-gray-200 rounded-xl">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-800 transition-colors duration-150 ease-linear cursor-pointer dark:text-white dark:hover:text-gray-200 px-2 py-1 dark:hover:bg-gray-500 dark:hover:bg-opacity-50 hover:bg-gray-200 rounded-xl">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
