import React from "react";
// import "./TrainingResources.css";
import '../../styles/TrainingResources.css'
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const TrainingResources = () => {
  return (
    <div className="TrainingResources">
      {/* <div className="BreadCrumbs">
        <span className="Dashboard"> Dashboard</span>
        <span className="Training_Resources">{" > Training Resources"}</span>
      </div> */}
      <br />
      <br />
      <div className="Main_Content">
        <div className="Program">
          <p>Training Program Name</p>
          <h3>Full Stack Developer</h3>
          <p>Training Topics & Subjects</p>
          <h2>Java, Js, Python, React Native</h2>
          <p>Program Status</p>
          <h2>
            Review & Update Program
            <br />
            Results
          </h2>
          <button>In Progress</button>
        </div>
        <div className="Resources">
          <p>Resources</p>
          <div className="R_Content">
            <h2><FileDownloadOutlinedIcon sx={{color:'#2676c2', fontSize:'1.5rem'}} />
              Fundamentals Of Full Stack Developer 
            </h2>
            <h2> <FileDownloadOutlinedIcon  sx={{color:'#2676c2',fontSize:'1.5rem'}}/>Rules of Java Script</h2>
            <h2><FileDownloadOutlinedIcon sx={{color:'#2676c2',fontSize:'1.5rem'}} />Ways To Set Domain</h2>
            <h2><FileDownloadOutlinedIcon sx={{color:'#2676c2',fontSize:'1.5rem'}} />Fundamentals Of Full Stack Developer</h2>
            <h2><FileDownloadOutlinedIcon sx={{color:'#2676c2',fontSize:'1.5rem'}} />Fundamentals Of Full Stack Developer</h2>
            <h2><FileDownloadOutlinedIcon sx={{color:'#2676c2',fontSize:'1.5rem'}} />Rules of Java Script</h2>
            <h2><FileDownloadOutlinedIcon  sx={{color:'#2676c2',fontSize:'1.5rem'}}/>Ways To Set Domain</h2>
            <h2>Fundamentals Of Full Stack Developer</h2>
            <h2><FileDownloadOutlinedIcon  sx={{color:'#2676c2',fontSize:'1.5rem'}}/>Ways To Set Domain</h2>
            <h2>Fundamentals Of Full Stack Developer</h2>
            <h2><FileDownloadOutlinedIcon  sx={{color:'#2676c2',fontSize:'1.5rem'}}/>Ways To Set Domain</h2>
            <h2>Fundamentals Of Full Stack Developer</h2>
            <h2><FileDownloadOutlinedIcon  sx={{color:'#2676c2',fontSize:'1.5rem'}}/>Ways To Set Domain</h2>
            <h2>Fundamentals Of Full Stack Developer</h2>
          </div>
        </div>
      </div>  <br />

      <div className="Main_Content">
        <div className="Program">
          <p>Training Program Name</p>
          <h3>Full Stack Developer</h3>
          <p>Training Topics & Subjects</p>
          <h2>Java, Js, Python, React Native</h2>
          <p>Program Status</p>
          <h2>
            Review & Update Program
            <br />
            Results
          </h2>
          <button>completed</button>
        </div>
        <div className="Resources">
          <p>Resources</p>
          <div className="R_Content">
            <h2><FileDownloadOutlinedIcon sx={{color:'#2676c2', fontSize:'1.5rem'}} />
              Fundamentals Of Full Stack Developer 
            </h2>
            <h2> <FileDownloadOutlinedIcon  sx={{color:'#2676c2',fontSize:'1.5rem'}}/>Rules of Java Script</h2>
            <h2><FileDownloadOutlinedIcon sx={{color:'#2676c2',fontSize:'1.5rem'}} />Ways To Set Domain</h2>
            <h2><FileDownloadOutlinedIcon sx={{color:'#2676c2',fontSize:'1.5rem'}} />Fundamentals Of Full Stack Developer</h2>
            <h2><FileDownloadOutlinedIcon sx={{color:'#2676c2',fontSize:'1.5rem'}} />Fundamentals Of Full Stack Developer</h2>
            <h2><FileDownloadOutlinedIcon sx={{color:'#2676c2',fontSize:'1.5rem'}} />Rules of Java Script</h2>
            <h2><FileDownloadOutlinedIcon  sx={{color:'#2676c2',fontSize:'1.5rem'}}/>Ways To Set Domain</h2>
            <h2>Fundamentals Of Full Stack Developer</h2>
            <h2><FileDownloadOutlinedIcon  sx={{color:'#2676c2',fontSize:'1.5rem'}}/>Ways To Set Domain</h2>
            <h2>Fundamentals Of Full Stack Developer</h2>
            <h2><FileDownloadOutlinedIcon  sx={{color:'#2676c2',fontSize:'1.5rem'}}/>Ways To Set Domain</h2>
            <h2>Fundamentals Of Full Stack Developer</h2>
            <h2><FileDownloadOutlinedIcon  sx={{color:'#2676c2',fontSize:'1.5rem'}}/>Ways To Set Domain</h2>
            <h2>Fundamentals Of Full Stack Developer</h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TrainingResources;
