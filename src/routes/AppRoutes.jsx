import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "../views/HomeView";
import Vista1View from "../views/Vista1View";
import Vista2View from "../views/Vista2View";
import Sidebar from "../components/Sidebar";

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-6 bg-[#E3F4FF]">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/vista1" element={<Vista1View />} />
            <Route path="/vista2" element={<Vista2View />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
