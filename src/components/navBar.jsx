import { useEffect, useState } from "react";
import LogoEmpresa from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Actualiza el enlace activo cuando cambia la ubicación
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Restaura el título almacenado en localStorage al cargar la página
    const storedTitle = localStorage.getItem("pageTitle");
    document.title = storedTitle || "Lss Energy Solar";
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (link, title) => {
    if (showMenu) {
      setShowMenu(false);
    }

    setActiveLink(link);

    document.title = title;
    localStorage.setItem("pageTitle", title);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getLinkStyle = (link) => {
    return `hover:text-white hover:bg-green-600 hover:py-2 hover:px-4 px-2 py-2 text-black ${
      activeLink === link ? "text-white bg-green-600 py-2 px-4" : ""
    }`;
  };

  return (
    <nav
      className={`lg:px-[74px] p-[20px] w-full flex justify-between items-center fixed top-0 z-10 bg-white ${
        isScrolled ? "lg:bg-white" : "lg:bg-opacity-0"
      }`}
    >
      {showMenu ? (
        ""
      ) : (
        <div className="navbar-left ">
          <LogoEmpresa />
        </div>
      )}
      <div className="navbar-right hidden lg:flex space-x-4 ">
        <Link
          to="/"
          className={getLinkStyle("/")}
          onClick={() => handleLinkClick("/", "Lss Energy Solar")}
        >
          Inicio
        </Link>
        <Link
          to="/on-grid"
          className={getLinkStyle("/on-grid")}
          onClick={() => handleLinkClick("/on-grid", "On-Grid")}
        >
          Ongrid
        </Link>
        <Link
          to="/off-grid"
          className={getLinkStyle("/off-grid")}
          onClick={() => handleLinkClick("/off-grid", "Off-Grid")}
        >
          Offgrid
        </Link>
        <Link
          to="/hibrido"
          className={getLinkStyle("/hibrido")}
          onClick={() => handleLinkClick("/hibrido", "Híbrido")}
        >
          Híbrido
        </Link>
        <Link
          to="/mantenciones"
          className={getLinkStyle("/mantenciones")}
          onClick={() => handleLinkClick("/mantenciones", "Mantenimientos")}
        >
          Mantenciones
        </Link>
      </div>
      <div className="lg:hidden">
        {showMenu ? (
          <FiX
            className="text-2xl text-black cursor-pointer fixed top-4 right-4"
            onClick={handleMenuClick}
          />
        ) : (
          <FiMenu
            className="text-2xl text-black cursor-pointer fixed top-4 right-4"
            onClick={handleMenuClick}
          />
        )}

        {showMenu && (
          <>
            <LogoEmpresa />
            <div className="w-auto items-center justify-center h-full bg-white  flex flex-col ">
              <ul className=" ">
                <li>
                  <Link
                    to="/"
                    className={`mr-[20px]  text-[23px] hover:text-black ${
                      activeLink === "/" ? "font-bold" : ""
                    }`}
                    onClick={() => handleLinkClick("/", "Inicio")}
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/on-grid"
                    className={` text-[23px] hover:text-black ${
                      activeLink === "/on-grid" ? "font-bold" : ""
                    }`}
                    onClick={() => handleLinkClick("/on-grid", "On-Grid")}
                  >
                    Ongrid
                  </Link>
                </li>
                <li>
                  <Link
                    to="/off-grid"
                    className={` text-[23px] hover:text-black ${
                      activeLink === "/off-grid" ? "font-bold" : ""
                    }`}
                    onClick={() => handleLinkClick("/off-grid", "Off-Grid")}
                  >
                    Offgrid
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hibrido"
                    className={` text-[23px] hover:text-black ${
                      activeLink === "/hibrido" ? "font-bold" : ""
                    }`}
                    onClick={() => handleLinkClick("/hibrido", "Híbrido")}
                  >
                    Híbrido
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mantenciones"
                    className={`text-[23px] hover:text-black ${
                      activeLink === "/mantenciones" ? "font-bold" : ""
                    }`}
                    onClick={() =>
                      handleLinkClick("/mantenciones", "Mantenimientos")
                    }
                  >
                    Mantenciones
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
