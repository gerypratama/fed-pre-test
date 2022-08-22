import { FaRegBuilding, FaWrench } from "react-icons/fa";

const Locations = () => {
  return (
    <section className="flex flex-col p-5 justify-between items-center mb-3 rounded bg-white shadow w-full">
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-sm font-semibold">Lokasi</h2>
        <a href="#" className="text-xs text-green-600">Lihat semua</a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-between items-center px-3 py-2 h-20 rounded w-full my-2 md:w-[32%] bg-green-700 text-white">
          <FaRegBuilding color="white" size={28} />
          <div className="flex flex-col text-right">
            <p className="sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold">20</p>
            <p className="md:text-xs lg:text-sm">Induk</p>
          </div>
        </div>
        <div className="flex justify-between items-center px-3 py-2 h-20 rounded w-full my-2 md:w-[32%] bg-green-600 text-white">
          <FaWrench color="white" size={28} />
          <div className="flex flex-col text-right">
            <p className="sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold">3</p>
            <p className="md:text-xs lg:text-sm">Sub Lokasi Level 1</p>
          </div>
        </div>
        <div className="flex justify-between items-center px-3 py-2 h-20 rounded w-full my-2 md:w-[32%] bg-green-500 text-white">
          <FaWrench color="white" size={28} />
          <div className="flex flex-col text-right">
            <p className="sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold">1</p>
            <p className="md:text-xs lg:text-sm">Sub Lokasi Level 2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
