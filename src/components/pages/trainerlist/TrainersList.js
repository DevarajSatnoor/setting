// TrainersList.js
import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ReactImg from "../../assets/react.png";
import FigmaImg from "../../assets/figma.png";
import AdobeImg from "../../assets/adobe.png";
import PythonImg from "../../assets/python.png";
import ProfileImg from "../../assets/profileTrainer.png";
import "../../styles/TrainersList.css";
// import LocationIcon from "../../assets/LocationIcon.svg";
// import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const TrainersList = () => {
  const data = [
    {
      name: "Kowshik",
      location: "Mysore",
      domain: "UX UI Developer",
      date: 11,
      experience: 10,
      react: 8,
      figma: 10,
      python: 7,
      adobe: 9,
      star: 4,
      trainingSession: 350,
      available: "10 jan",
    },
    {
      name: "Rohit",
      location: "Mumbai",
      domain: "Frontend Developer",
      date: 15,
      experience: 7,
      react: 10,
      figma: 8,
      python: 9,
      adobe: 8,
      star: 3,
      trainingSession: 300,
      available: "10 dec",
    },
    {
      name: "Kowshik",
      location: "Bengaluru",
      domain: "UX UI Developer",
      date: 11,
      experience: 10,
      react: 8,
      figma: 10,
      python: 7,
      adobe: 9,
      star: 4,
      trainingSession: 200,
      available: "20 dec",
    },
    {
      name: "Rohit",
      location: "Mumbai",
      domain: "Frontend Developer",
      date: 15,
      experience: 7,
      react: 10,
      figma: 8,
      python: 9,
      adobe: 8,
      star: 3,
      trainingSession: 300,
      available: "10 dec",
    },
    {
      name: "Kowshik",
      location: "Bengaluru",
      domain: "UX UI Developer",
      date: 11,
      experience: 10,
      react: 8,
      figma: 10,
      python: 7,
      adobe: 9,
      star: 4,
      trainingSession: 200,
      available: "20 dec",
    },
    {
      name: "Rohit",
      location: "Mumbai",
      domain: "Frontend Developer",
      date: 15,
      experience: 7,
      react: 10,
      figma: 8,
      python: 9,
      adobe: 8,
      star: 3,
      trainingSession: 300,
      available: "10 dec",
    },
    {
      name: "Kowshik",
      location: "Bengaluru",
      domain: "UX UI Developer",
      date: 11,
      experience: 10,
      react: 8,
      figma: 10,
      python: 7,
      adobe: 9,
      star: 4,
      trainingSession: 200,
      available: "20 dec",
    },
    {
      name: "Rohit",
      location: "Mumbai",
      domain: "Frontend Developer",
      date: 15,
      experience: 7,
      react: 10,
      figma: 8,
      python: 9,
      adobe: 8,
      star: 3,
      trainingSession: 300,
      available: "10 dec",
    },
    {
      name: "Kowshik",
      location: "Bengaluru",
      domain: "UX UI Developer",
      date: 11,
      experience: 10,
      react: 8,
      figma: 10,
      python: 7,
      adobe: 9,
      star: 4,
      trainingSession: 200,
      available: "20 dec",
    },
    {
      name: "Rohit",
      location: "Mumbai",
      domain: "Frontend Developer",
      date: 15,
      experience: 7,
      react: 10,
      figma: 8,
      python: 9,
      adobe: 8,
      star: 3,
      trainingSession: 300,
      available: "10 dec",
    },
    {
      name: "Kowshik",
      location: "Bengaluru",
      domain: "UX UI Developer",
      date: 11,
      experience: 10,
      react: 8,
      figma: 10,
      python: 7,
      adobe: 9,
      star: 4,
      trainingSession: 200,
      available: "20 dec",
    },
    {
      name: "Rohit",
      location: "Mumbai",
      domain: "Frontend Developer",
      date: 15,
      experience: 7,
      react: 10,
      figma: 8,
      python: 9,
      adobe: 8,
      star: 3,
      trainingSession: 300,
      available: "10 dec",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="trainers-list">
      {data.map((trainer, index) => (
        <div
          key={index}
          className={`trainer-card ${hoveredIndex === index ? "hovered" : ""}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="centered-content">
            <div>
              <img
                src={ProfileImg}
                alt={`Profile of ${trainer.name}`}
                className="profile-img"
              />
            </div>
            <div style={{ marginTop: "5px", textAlign: "center" }}>
              <h3
                style={{
                  color: "#2676C2",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                {trainer.name}
              </h3>
              <p
                style={{
                  color: "#6A6A6A",
                  fontSize: " 0.875rem",
                  fontWeight: "400",
                }}
              >
                {trainer.domain}
              </p>
              <Stack
                spacing={1}
                sx={{ width: "6rem", height: "0.95363rem" }}
                direction="row"
                alignItems="center"
              >
                <Rating
                  name={`rating-${index}`}
                  value={trainer.star}
                  precision={1}
                  readOnly
                  sx={{
                    color: "#FFDE30", // Default color for all stars (grey border for empty stars)
                    "& .MuiRating-iconFilled": {
                      color: "#FFDE30", // Filled stars will be yellow
                    },
                    "& .MuiRating-iconEmpty": {
                      borderColor: "#FFDE30", // Outline color for empty stars
                    },
                  }}
                />
              </Stack>
            </div>
            <div className="image-row">
              <img
                src={ReactImg}
                alt="React"
                title={`React: ${trainer.react}`}
              />
              <img
                src={FigmaImg}
                alt="Figma"
                title={`Figma: ${trainer.figma}`}
              />
              <img
                src={PythonImg}
                alt="Python"
                title={`Python: ${trainer.python}`}
              />
              <img
                src={AdobeImg}
                alt="Adobe"
                title={`Adobe: ${trainer.adobe}`}
              />
            </div>
          </div>
          <div className="card-back">
            <div className="card-back-top">
              <div className="card-back-image">
                <img
                  src={ProfileImg}
                  alt={`Profile of ${trainer.name}`}
                  className="profile-img-back"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <img
                    // src={LocationIcon}
                    style={{ height: "0.9rem", color: "#2676C2" }}
                    alt=""
                  />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "400",
                      color: "#6A6A6A",
                    }}
                  >
                    {" "}
                    {trainer.location}
                  </span>
                </div>
              </div>
              <div className="card-back-content">
                <h3 className="card-back-name">{trainer.name}</h3>
                <p className="card-back-domain">{trainer.domain}</p>
                <h4 className="card-back-exp">
                  <p>{trainer.experience}Years</p>
                </h4>
                <Stack
                  spacing={1}
                  sx={{
                    width: "6rem",
                    height: "0.95363rem",
                    marginTop: "0.31rem",
                    marginLeft: "1.11rem",
                  }}
                  direction="row"
                  alignItems="center"
                >
                  <Rating
                    name={`rating-${index}`}
                    value={trainer.star}
                    precision={1}
                    readOnly
                    sx={{
                      color: "#FFDE30", // Default color for all stars (grey border for empty stars)
                      "& .MuiRating-iconFilled": {
                        color: "#FFDE30", // Filled stars will be yellow
                      },
                      "& .MuiRating-iconEmpty": {
                        borderColor: "#FFDE30", // Outline color for empty stars
                      },
                    }}
                  />
                </Stack>
                <h4 className="session-list">
                  <span className="session-list-span">
                    +{trainer.trainingSession} Training Session
                  </span>
                </h4>
              </div>
            </div>
            <div className="slider-container-parent">
              <div className="slider-container">
                <label htmlFor={`react-slider-${index}`}>
                  <img src={ReactImg} alt="React" className="card-slider-img" />
                </label>
                <input
                  type="range"
                  id={`react-slider-${index}`}
                  min="1"
                  max="10"
                  value={trainer.react}
                  readOnly
                />
                <span className="slider-span">{trainer.react}0%</span>
              </div>
              <div className="slider-container">
                <label htmlFor={`python-slider-${index}`}>
                  <img
                    src={PythonImg}
                    alt="Python"
                    className="card-slider-img"
                  />
                </label>
                <input
                  type="range"
                  id={`python-slider-${index}`}
                  min="1"
                  max="10"
                  value={trainer.python}
                  readOnly
                />
                <span className="slider-span">{trainer.python}0%</span>
              </div>
              <div className="slider-container">
                <label htmlFor={`figma-slider-${index}`}>
                  <img src={FigmaImg} alt="figma" className="card-slider-img" />
                </label>
                <input
                  type="range"
                  id={`figma-slider-${index}`}
                  min="1"
                  max="10"
                  step="1"
                  value={trainer.figma}
                  readOnly
                />
                <span className="slider-span">{trainer.figma}0%</span>
              </div>
              <div className="slider-container">
                <label htmlFor={`adobe-slider-${index}`}>
                  <img src={AdobeImg} alt="adobe" className="card-slider-img" />
                </label>
                <input
                  type="range"
                  id={`adobe-slider-${index}`}
                  min="1"
                  max="10"
                  value={trainer.adobe}
                  readOnly
                />
                <span className="slider-span">{trainer.adobe}0%</span>
              </div>
            </div>
            <p className="trainer-available">
              <span>Avail On {trainer.available}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainersList;
