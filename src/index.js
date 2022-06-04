import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import About from './pages/about_me';
import Projects from './pages/projects';
import Loading from './pages/loading';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

ReactDOM.render( 
    <BrowserRouter>
        <Routes Routes>
            <Route exact path = '/' element = { <Loading/> }/>
            <Route path = '/home' element = {<Home/> }/> 
            <Route path = '/about' element = { <About/> }/>
            <Route path = '/projects' element = {<Projects/> }/>

        </Routes >  
    </BrowserRouter > ,
    document.getElementById('App')
);