import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './pages/about_me';
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
            <Route path = '/about' element = { <About/> }/>
            <Route path = '/home' element = {<App/> }/>
        </Routes >  
    </BrowserRouter > ,
    document.getElementById('App')
);