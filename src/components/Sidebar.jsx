import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-64 h-screen sticky top-0 text-white bg-[#787878]">
      <div className="p-5 mx-5 my-5 text-lg font-bold text-center text-[#787878] bg-white rounded-md">
        Logo
      </div>
      <nav className="mt-10">
        <ul>
          <li className="mb-4 mx-5 rounded-md bg-[#787878] text-[#787878]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "block py-2.5 px-4 bg-white rounded-md font-bold"
                  : "block py-2.5 px-4 text-white rounded-md font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mb-4 mx-5 rounded-md bg-[#787878] text-[#787878]">
            <NavLink
              to="/vista1"
              className={({ isActive }) =>
                isActive
                  ? "block py-2.5 px-4 bg-white rounded-md font-bold"
                  : "block py-2.5 px-4 text-white rounded-md font-bold"
              }
            >
              Vista 1
            </NavLink>
          </li>
          <li className="mb-4 mx-5 rounded-md bg-[#787878] text-[#787878]">
            <NavLink
              to="/vista2"
              className={({ isActive }) =>
                isActive
                  ? "block py-2.5 px-4 bg-white rounded-md font-bold"
                  : "block py-2.5 px-4 text-white rounded-md font-bold"
              }
            >
              Vista 2
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
