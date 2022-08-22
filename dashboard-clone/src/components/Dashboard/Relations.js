import { FaShareAlt } from "react-icons/fa";

const Relations = () => {
  const relationData = [
    {
      id: 1,
      count: 20,
      status: "Memiliki",
    },
    {
      id: 2,
      count: 108,
      status: "Menggunakan",
    },
    {
      id: 3,
      count: 67,
      status: "Meminjam",
    },
  ];

  return (
    <section className="flex flex-col justify-between items-center p-3 bg-white rounded shadow w-full mb-3">
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-sm font-semibold">Relasi</h2>
        <a href="#" className="text-xs text-green-600">
          Lihat semua
        </a>
      </div>
      <div className="flex flex-col w-full mb-3 justify-between items-start">
        {relationData.map((item) => {
          return (
            <div key={item.id} className="flex justify-start items-center w-full mb-3">
              <FaShareAlt size={18} className="mr-2" />
              <div className="flex flex-col justify-center items-start">
                <p className="font-semibold">{item.count}</p>
                <p className="text-xs text-gray-500">{item.status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Relations;
