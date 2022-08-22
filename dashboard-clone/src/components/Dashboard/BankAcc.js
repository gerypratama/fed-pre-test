import { FaPen, FaRegTrashAlt, FaCcVisa } from "react-icons/fa";
import { BankData } from "./constants/BankData";

const BankAcc = () => {
  return (
    <section className="flex flex-col justify-between items-center p-3 bg-white rounded shadow w-full mb-3">
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-sm font-semibold">Akun Bank</h2>
        <button className="text-xs bg-green-600 text-white px-3 py-2 rounded">
          + Tambah Akun Bank
        </button>
      </div>
      <div className="flex flex-col justify-between items-center w-full">
        {BankData.map((el) => {
          return (
            <div key={el.id} className="flex justify-between items-center w-full h-[4.5rem] my-2">
              <div
                className={`flex justify-end items-end w-[30%] h-full p-2 rounded ${el.bgColor}`}
              >
                <FaCcVisa color="white" size={20} />
              </div>
              <div className="flex flex-col h-full justify-between items-start text-xs">
                <p className="font-semibold">{el.bankName}</p>
                <div className="flex flex-col text-gray-500">
                  <p>{`${el.cardNumber} - ${el.ownerName}`}</p>
                  <p>{el.currency}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end my-1 sm:flex-row sm:justify-end sm:items-start h-full sm:w-1/4">
                <FaPen color="green" size={14} className="mr-2" />
                <FaRegTrashAlt color="red" size={14} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BankAcc;
