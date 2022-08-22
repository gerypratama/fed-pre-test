import { IconContext } from "react-icons/lib/esm/iconContext";
import { FaBell, FaSearch } from "react-icons/fa";
import User from "../assets/img/user-placeholder.png";

const Header = () => {
  return (
    <IconContext.Provider value={{ color: "gray" }}>
      <header className="flex flex-col sm:flex-row justify-between sm:items-center mb-3 w-full xl:w-[93vw] text-[12px] sm:text-sm">
        <div className="sm:flex sm:justify-between sm:items-center sm:w-[45%] md:w-2/5 lg:w-[28%] xl:w-[24%]">
          <a href="#" className="text-gray-400 font-semibold">Perusahaan</a>
          <span className="text-gray-400"> &gt; </span>
          <a href="#" className="font-semibold">Mitramas Infosys Global</a>
        </div>
        <div className="flex justify-end items-center w-full sm:w-1/3 xl:w-[25%]">
          <div className="flex justify-between items-center sm:w-1/6 sm:mr-4 md:mr-6 lg:w-[12.5%] xl:w-1/6 xl:mr-12">
            <FaSearch />
            <FaBell />
          </div>
          <div className="flex justify-between items-center sm:w-[55%] md:w-[45%] lg:w-1/3 xl:w-2/5">
            <img src={User} alt="John Doe" className="w-8 sm:w-9"/>
            <span>John Doe</span>
          </div>
        </div>
      </header>
    </IconContext.Provider>
  );
};

export default Header;
