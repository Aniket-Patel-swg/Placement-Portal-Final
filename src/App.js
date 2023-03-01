import CardPage from "./pages/CardPage.jsx"
import data from "./components/Card/CardData"
import HomePage from "./pages/HomePage"
import {ProfilePage} from "./pages/ProfilePage.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import {Route, Routes} from "react-router-dom"
import ClubIntro from "./components/ClubInfo/ClubIntro.jsx"
import PlacementStats from "./components/PlacementStats/PlacementStats.jsx"
import Resumebuilder from "./components/ResumeBuilder/Resumebuilder.jsx"
import AllClubs from "./components/AllCubs.jsx"
import JobBoarding from "./components/JobBoarding/JobBoarding.jsx"
import ApplyPage from "./pages/ApplyPage.jsx"
import RecruiterLogin from "./pages/RecruiterLogin.jsx"
import RecruiterAdminPanel from "./pages/RecruiterAdminPanel.jsx"
import PostJob from "./pages/PostJob.jsx"
import TechnicalTestLogin from "./pages/TechnicalTestLogin.jsx"
import JobPosting from "./components/JobPosting/JobPosting.jsx"
import QuizApp from "./pages/QuizApp.jsx"
import Register from "./pages/Register.jsx"
import Resources from "./pages/Resources.jsx"
import PlacementRoadmap from "./components/ResourcePageComponents/PlacementRoadmap.jsx"
import FacingInterview from "./components/ResourcePageComponents/FacingInterview.jsx"
import Companies from "./components/ResourcePageComponents/Companies.jsx"
import Analytics from './components/ResourcePageComponents/Analytics.jsx'
import EventDetails from "./components/ResourcePageComponents/EventsDetails.jsx"
// import { Profile } from "./components/Profile Page Component/Profile.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/dashboard" element={<></>} />
        <Route path="/students/profile" element={<ProfilePage />} />
        <Route path="/students/register" element={<Register />} />
        <Route path="/students/community" element={<CardPage data={data} />} />
        <Route path="/students/club" element={<ClubIntro />} />
        <Route path="/students/placementstats" element={<PlacementStats />} />
        <Route path="/students/resumebuilder" element={<Resumebuilder />} />
        <Route path="/students/allclubs" element={<AllClubs />} />
        <Route path="/students/jobboarding" element={<JobBoarding />} />
        <Route path="/students/applypage" element={<ApplyPage />} />
        <Route path="/recruiter/login" element={<RecruiterLogin />} />
        <Route path="/recruiter/adminpanel" element={<RecruiterAdminPanel />} />
        <Route path="/recruiter/postjob" element={<PostJob />} />
        <Route
          path="/students/technicaltestlogin"
          element={<TechnicalTestLogin />}
        />
        <Route path="/recruiter/jobposting" element={<JobPosting />} />
        <Route path="/students/quizapp" element={<QuizApp />} />
        <Route path="/students/resource" element={<Resources />} />
        <Route
          path="/students/resource/process"
          element={<PlacementRoadmap />}
        />
        <Route
          path="/students/resource/interview"
          element={<FacingInterview />}
        />
        <Route path="/students/resource/companies" element={<Companies />} />
        <Route path="/students/resource/analytics" element={<Analytics />} />
        <Route path="/students/resource/eventdetails" element={<EventDetails />} />
      </Routes>
    </div>
  )
}

export default App
