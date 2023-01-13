import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="max-w-full max-h-fit fixed inset-0 bg-gray-50 dark:bg-[#181818] z-20">
      <div className="container w-full h-16 flex items-center justify-between mx-auto">
        <h2 className="text-2xl font-bold ">{"<CM />"}</h2>
        <nav>
          <ul className="sm:flex items-center gap-x-2 hidden font-medium text-lg">
            <li className="hover:text-gray-800 transition-colors duration-150 ease-linear cursor-pointer dark:text-white dark:hover:text-gray-400">
              <Link to={`/`}>Hero</Link>
            </li>
            <li className="hover:text-gray-800 transition-colors duration-150 ease-linear cursor-pointer dark:text-white dark:hover:text-gray-400">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-800 transition-colors duration-150 ease-linear cursor-pointer dark:text-white dark:hover:text-gray-400">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
