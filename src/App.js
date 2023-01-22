import CardPage from "./pages/CardPage.jsx"
import data from "./components/Card/CardData"
import HomePage from "./pages/HomePage"
import { ProfilePage } from "./pages/ProfilePage.jsx";
import Dashboard from './pages/Dashboard.jsx';
import { Route, Routes } from "react-router-dom";
import PlacementTable from "./components/Table/PlacementTable";
import Club_intro from "./components/Club_info/Club_intro.jsx";
import Placement_stats from "./components/PlacementStats/PlacementStats.jsx";
import Resumebuilder from "./components/ResumeBuilder/Resumebuilder.jsx";
// import { Profile } from "./components/Profile Page Component/Profile.jsx";
function App() {
    
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/dashboard" element={<></>} />
        <Route path="/students/student" element={<ProfilePage />} />
        <Route path="/students/community" element={<CardPage data={data} />} />
        <Route path="/studnets/tables" element={<PlacementTable/>} />
        <Route path="/students/club" element={<Club_intro />} />
        <Route path="/students/placement_stats" element={<Placement_stats />} />
        <Route path="/students/resume_builder" element={<Resumebuilder />} />
      </Routes>
    </div>
  );
}

export default App;
