import React from "react";
//import ProgressBar from 'react-bootstrap/ProgressBar';

function Progress() {
    return (
        <>
            <h1 style={{ color: 'green' }}>
                <center>Skills</center>
            </h1>
  
            <div class="container">
                <h5><span className="skill-text-left">Node JS</span><span className="skill-text-right">90%</span></h5>
            <div className="progress-bar bg-primary
                            progress-bar-striped
                            progress-bar-animated"
                            style={{width:'90%'}}> &nbsp;</div>
            <br></br>
            <h5><span className="skill-text-left">MongoDB</span><span className="skill-text-right">70%</span></h5>
            <div className="progress-bar bg-success
                            progress-bar-striped 
                            progress-bar-animated" 
                            style={{width:'70%'}}>&nbsp;</div>
            <br></br>
            <h5><span className="skill-text-left">HTML5</span><span className="skill-text-right">80%</span></h5>
            <div className="progress-bar bg-warning 
                            progress-bar-striped
                            progress-bar-animated" 
                            style={{width:'80%'}}>&nbsp;</div>
            <br></br>
            <h5><span className="skill-text-left">CSS3</span><span className="skill-text-right">75%</span></h5>
            <div className="progress-bar bg-danger
                            progress-bar-striped 
                            progress-bar-animated"
                            style={{width:'75%'}}>&nbsp;</div>
            <br></br>
            <h5><span className="skill-text-left">JavaScript</span><span className="skill-text-right">78%</span></h5>
            <div className="progress-bar bg-info 
                            progress-bar-striped 
                            progress-bar-animated" 
                            style={{width:'78%'}}>&nbsp;</div>
            
            <br></br>
            <h5><span className="skill-text-left">Laravel</span><span className="skill-text-right">70%</span></h5>
            <div className="progress-bar bg-warning 
                            progress-bar-striped 
                            progress-bar-animated" 
                            style={{width:'70%'}}>&nbsp;</div>

            </div> 
                
        </>
    )
}
  
export default Progress;