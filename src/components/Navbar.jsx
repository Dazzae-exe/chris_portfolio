import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full h-24 sticky inset-0 top-2.5 z-20 text-left">
      <div className="container w-full h-full flex items-start justify-start mx-auto">
        <div className="w-fit h-full flex items-center gap-x-4 bg-dark-schema/5 dark:bg-light-schema/5 backdrop-blur-md py-1.5 px-4 rounded-full shadow-navbar">
          <h1>{"<CM />"}</h1>
          <nav className="relative sm:block flex flex-col">
            <ul className="sm:flex items-center gap-x-2 hidden font-medium text-lg">
              <li className="navbar-link">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="navbar-link">
                <Link to="/about">About</Link>
              </li>
              <li className="navbar-link">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
