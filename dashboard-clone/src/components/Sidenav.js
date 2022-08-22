import React from "react";
import MigIcon from "../assets/ico/mig.png";
import { IconContext } from "react-icons";
import {
  FaHome,
  FaTicketAlt,
  FaClipboardCheck,
  FaArchive,
  FaRegBuilding,
  FaUsers,
  FaLayerGroup,
  FaCube,
  FaSearchDollar,
} from "react-icons/fa";

const Sidenav = () => {
  return (
    <IconContext.Provider value={{color: "gray", size: "0.75em"}}>
      <nav className="flex flex-col bg-white w-40 sm:w-20 md:w-16 lg:w-12 py-3 px-2 shadow-md h-screen">
        <img src={MigIcon} alt="MIG" className="my-4 sm:mb-3 lg:mb-4 xl:mb-8" width={30} />
        <div className="flex flex-col justify-around items-center h-1/3 sm:h-[35%] md:h-1/4 lg:h-[30vh] xl:h-[35vh] mb-3">
            <a href="#"><FaHome /></a>
            <FaTicketAlt />
            <FaClipboardCheck />
            <FaArchive />
            <FaRegBuilding />
        </div>
        <div className="flex flex-col justify-around items-center h-1/3 sm:h-[35%] md:h-1/4 lg:h-[30vh] xl:h-[35vh] mb-3">
            <FaUsers />
            <FaLayerGroup />
            <FaCube />
            <FaCube />
            <FaSearchDollar />
        </div>
        <div className="flex justify-center items-center sm:h-[10%] md:h-[8.125%] h-[10%] mb-3">
            <FaCube />
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Sidenav;
