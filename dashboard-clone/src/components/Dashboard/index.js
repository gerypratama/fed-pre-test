import Activities from "./Activities";
import BankAcc from "./BankAcc";
import Info from "./Info";
import Locations from "./Locations";
import Relations from "./Relations";

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start w-full">
      <Info />
      <main className="flex flex-col justify-start items-center sm:w-[64%] md:w-[65%] lg:w-[73%] xl:w-[70%] h-full">
        <Locations />
        <div className="flex flex-col lg:flex-row justify-between items-start w-full">
          <div className="flex flex-col w-full lg:w-[48.5%]">
            <BankAcc />
            <Relations />
          </div>
          <Activities />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
