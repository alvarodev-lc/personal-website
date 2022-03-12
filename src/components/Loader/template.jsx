import React from 'react';
import ReactLoading from 'react-loading';
import './template.css'
 
const LoaderTemplate = ({ type, color }) => (
    <ReactLoading type={"spinningBubbles"} color={"#60fd71"} height={"5%"} width={"5%"}/>
);
 
export default LoaderTemplate;