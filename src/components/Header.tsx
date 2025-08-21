import { Link } from "react-router-dom";

const Header = () => {
return (
    <header className="bg-gray-900 text-white p-4 md:p-6 lg:p-8">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Seguimiento de Tareas</h1>
        <ul className="list-none p-0 m-0 flex items-center">
          <li className="mr-4">
            <Link to={"/contact"} className="text-gray-300 hover:text-white transition duration-300">
              Contacto
            </Link>
          </li>
          <li className="mr-4">
            <Link to={"/login"} className="text-gray-300 hover:text-white transition duration-300">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;