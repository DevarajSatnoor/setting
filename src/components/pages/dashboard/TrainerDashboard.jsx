import React, { useEffect, useState } from "react";
import "../../styles/MainDashboard.css"; // Import your CSS file for styling
 
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Header from "../../header&footer/Header";
import { useDispatch } from "react-redux";
import { userAction } from "../../../redux/action/user.action";
import { optionTrainer } from "./TrainerData";
 
function TrainerDashboard() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
 
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="w-[100%]">
        <div className="w-[100%]">
          <Header />
        </div>
        {/* <div> */}
        <div className="Reactangle-dash w-[100%]">
          <div className="Rectangle48 bg-white shadow mt-[2px]">
            <div className="Rectangle-side shadow">
                {optionTrainer.map(({ name, icon }) => {
                  return (
                    <div
                      className={`sidebar-option ${
                        selectedOption === name && "active"
                      }`}
                      onClick={() => handleOptionClick(name)}
                    >
                      <ArrowForwardIosOutlinedIcon className="arrow-icon" />
                      {icon}
                      {name}
                    </div>
                  );
                })}
              </div>
            </div>
 
            <div className="Reactangle-right ">
            <div className="dash_head fixed w-[inherit] z-10 h-[60px] pl-[20px] pr-[20px] bg-white flex items-center justify-between">
              <div className="Dashboard flex items-center  text-zinc-500 text-base font-normal font-['Poppins'] space-x-3   ">
                <span> Dashboard</span>
                <span className="ml-[10px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="#2676C2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
 
                <span className=" text-[#2676C2] text-base font-normal font-['Poppins']  ml-[10px]">
                  {selectedOption}
                </span>
 
                <div
                  className={`${
                    selectedOption === "Post a Requirements" ? "" : "hidden"
                  }`}
                >
                  <div className=" flex items-center  ">
                    <span className=" ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                      >
                        <path
                          d="M1 1L7 7L1 13"
                          stroke="#2676C2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span className=" text-[#2676C2] text-base font-normal font-['Poppins']  ml-[10px]">
                      PostTraining
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={` ${
                    selectedOption === "TrainerList" ? "relative" : "hidden"
                  }`}
                >
                </div>
              </div>
            </div>
            <div className="content">
              <div className="w-[100%]">
              {optionTrainer.map(({ name, show }) => {
                if (name === selectedOption) {
                  return show;
                }
                return null;
              })}
              </div>
            </div>
          </div>
          </div>
        {/* </div> */}
        {/* sidebar */}
      </div>
    </>
  );
}
 
export default TrainerDashboard;