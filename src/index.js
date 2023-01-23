import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from "./components/Card/CardData"
import App from './App';
import PlacementTable from "./components/Table/PlacementTable";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import HomePage from './pages/HomePage';
import { ProfilePage } from './pages/ProfilePage';
import Dashboard from './pages/Dashboard.jsx';
import CardPage from './pages/CardPage';
import Resume from './pages/BuildYourResume.jsx';
import Club_intro from './components/Club_info/Club_intro';
import Placement_stats from './components/PlacementStats/PlacementStats';
import Resume_builder from './components/ResumeBuilder/Resumebuilder';
import All_clubs from './components/All_clubs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/students/dashboard",
    element: <Dashboard />
  },
  {
    path: "/students/profile",
    element: <ProfilePage />
  },
  {
    path: "/students/community",
    element: <CardPage data={data} />
  },
  {
    path: "/studnets/resume",
    element: <Resume />
  },
  // {
  //   path: "/students/tables",
  //   element: <PlacementTable/>
  // },
  {
    path: "/students/club",
    element: <Club_intro />
  },
  {
    path: "/students/placement_stats",
    element: <Placement_stats />
  },
  {
    path: "/students/resume_bulider",
    element: <Resume_builder />
  },
  {
    path: "/students/all_clubs",
    element: <All_clubs />
  }
  // {
  //   path:"/resumeBuilder",
  //   element: 
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

