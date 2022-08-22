import Cover from "../../assets/img/cover-placeholder.png";
import MigLogo from "../../assets/img/white-mig-logo-sq.png";
import {
  FaPen,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaToggleOn,
} from "react-icons/fa";
import { Data } from "./constants/InfoData";

const Info = () => {
  return (
    <aside className="flex flex-col justify-start items-center shadow rounded h-full overflow-hidden bg-white mb-3 sm:w-1/3 lg:w-1/4 xl:w-[27%] ">
      <div className="relative">
        <img src={Cover} alt="Cover" />
        <img
          src={MigLogo}
          alt="MIG"
          width={100}
          className="rounded-full border-2 border-gray-200 absolute w-28 top-[8.5rem] left-[30%] sm:w-20 sm:top-[105px] md:w-24 md:top-[105px] lg:top-28 xl:w-28 xl:top-[155px] xl:left-1/3"
        />
      </div>
      <div className="mt-16 text-center mb-3 sm:px-3">
        <h1 className="font-semibold sm:text-sm md:text-base mb-1">
          Mitramas Infosys Global
        </h1>
        <p className="text-gray-400 font-normal text-xs mb-3">Layanan IT</p>
        <a href="#">
          <div className="flex justify-center items-center">
            <FaPen color="green" size={14} className="mr-2" />
            <p className="text-xs font-semibold text-green-600">
              Sunting profil
            </p>
          </div>
        </a>
      </div>
      <div className="flex flex-col p-3 w-[100%]">
        <p className="self-start text-gray-400 text-xs mb-2">
          Status perusahaan
        </p>
        <div className="flex justify-between items-center">
          <p className="text-green-600 text-xs font-semibold">Active</p>
          <FaToggleOn color="green" size={24} />
        </div>
      </div>
      {Data.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col justify-between items-start w-[100%] px-3 mb-3 text-xs"
          >
            <p className="text-gray-400 mb-2">{item.attr}</p>
            <p>{item.val}</p>
          </div>
        );
      })}
      <div className="flex flex-col justify-between items-start w-[100%] px-3 mb-3 text-xs">
        <p className="text-gray-400 mb-2">E-mail</p>
        <div className="flex">
          <FaEnvelope color="green" className="mr-2" />
          <a href="#" className="text-green-600">
            mig@mitrasolusi.group
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start w-[100%] px-3 mb-3 text-xs">
        <p className="text-gray-400 mb-2">No. Telp</p>
        <div className="flex">
          <FaPhoneAlt color="green" className="mr-2" />
          <a href="#" className="text-green-600">
            021-5678-1234
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start w-[100%] px-3 mb-8 text-xs">
        <p className="text-gray-400 mb-2">Situs Web</p>
        <div className="flex">
          <FaGlobe color="green" className="mr-2" />
          <a href="#" className="text-green-600">
            mitramas.com
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Info;
