import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Aos from 'aos';

import Home from './pages/home';
import About from './pages/about_me';
import Projects from './pages/projects';
import Loading from './pages/loading';
import PrivacyPolicy from './pages/privacy_policy';
import Pokedex from './pages/projects/pokedex';
import PortalVR from './pages/projects/portal-vr';

import './App.min.css';
import './static/css/fontawesome/fontawesome.min.css'
import './static/css/bootstrap/bootstrap.min.css'

import 'aos/dist/aos.css'

import { ROUTES } from './routes';

Aos.init();

const router = createHashRouter([
  { path: '/',                      element: <Loading /> },
  { path: ROUTES.HOME,              element: <Home /> },
  { path: ROUTES.ABOUT,             element: <About /> },
  { path: ROUTES.PROJECTS,          element: <Projects /> },
  { path: ROUTES.PROJECTS_POKEDEX,  element: <Pokedex /> },
  { path: ROUTES.PROJECTS_PORTAL_VR, element: <PortalVR /> },
  { path: ROUTES.PRIVACY,           element: <PrivacyPolicy /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
