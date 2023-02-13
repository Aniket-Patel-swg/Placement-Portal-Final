import Header from "../Header/Header";
import React from "react";
import './Job_Boarding.css';

const Job_Boarding = () => {
    return ( 
        <>
          <Header/>

          <div className="job-title">Opportunity Boarding Page</div>
            <a href="/recruiter/post_job">
                <button className='Post-Jobs'>Jobs</button>
            </a>
            <div className="Manage-Job">
                <div className="Posting">Part - time Jobs</div>
                <input type="text" placeholder='Search' />

                <a href="/recruiter/post_job">
                    <button className='jobSearch-title'>A to Z</button>
                </a>
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
 
export default Job_Boarding;