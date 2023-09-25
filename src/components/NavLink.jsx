import { Link } from "react-router-dom";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
    >
      {title}
    </Link>
  );
};
export default NavLink;
