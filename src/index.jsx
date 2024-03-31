import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/home';
import About from './pages/about_me';
import Projects from './pages/projects';
import Loading from './pages/loading';
import PrivacyPolicy from './pages/privacy_policy';
import Pokedex from './pages/projects/pokedex';

import './App.min.css';
import './static/css/fontawesome/fontawesome.min.css'
import './static/css/bootstrap/bootstrap.min.css'

import 'aos/dist/aos.css'

import {
    Routes,
    Route,
    HashRouter,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter >
        <Routes Routes>
            <Route exact path='/' element={<Loading />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/pokedex' element={<Pokedex />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
        </Routes >
    </HashRouter >,
)