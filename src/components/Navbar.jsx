import NavLink from "./Navlink";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    id: "about",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Contact",
    id: "contact",
  },
];

const scrollToSection = (sectionId) => {
  const section = document.querySelector("#" + sectionId); // Add '#' before the sectionId
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [navbarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a
          className="text-lg md:text-5xl border border-purple-900 p-4 text-white font-semibold"
          href="/"
        >
          ELLI RAYNAI
        </a>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavBarOpen(!navbarOpen)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FontAwesomeIcon className="h-5 w-5" icon={faTimes} />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(!navbarOpen)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <FontAwesomeIcon className="h-5 w-5" icon={faBars} />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={"#" + link.id}
                  title={link.title}
                  onClick={() => scrollToSection(link.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} onClick={scrollToSection} />
      ) : null}
    </nav>
  );
};
export default Navbar;
