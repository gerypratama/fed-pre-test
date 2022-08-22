import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <div className="flex">
      <Sidenav />
      <div className="flex flex-col px-4 py-3 h-screen overflow-scroll">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
