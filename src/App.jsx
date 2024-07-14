import "./App.css";
import Navbar from "./components/Navbar";
import { getConfigData } from "./data/configReader";
import Social from "./components/Social";
import Footer from "./components/Footer";
import SiteRoutes from "./Router";

function App() {
  const configData = getConfigData();

  return (
    <>
      <Navbar />
      <div className="pt-[5rem] px-2 py-2">
        <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <SiteRoutes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
