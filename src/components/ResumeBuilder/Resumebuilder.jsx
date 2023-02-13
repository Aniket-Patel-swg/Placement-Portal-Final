import React from "react";
import Header from "../Header/Header";
import './Resumebuilder.css';

const Resume_builder = () => {
    return ( 
        <>
            <Header />
            <div className="main">
                <p>resume Builder</p>
            </div>
            <div className="comming">
              <h1 className="main-text">Comming Soon</h1>
              <p className="text">
                This page is under construction will be completed soon
              </p>
              <div className="Button">
                <a href="/students/apply_page"><button>
                  <p>Apply Job</p>
               </button></a>
              </div>
            </div>
        </>
     );
}
 
export default Resume_builder;