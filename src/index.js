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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/student",
    element: <ProfilePage />
  },
  {
    path: "/community",
    element: <CardPage data={data} />
  },
  {
    path: "/resume",
    element: <Resume />
  },
  {
    path: "/tables",
    element: <PlacementTable/>
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

