import React, { useEffect, useState } from "react";
import "../../styles/Dashboard.css"; // Import your CSS file for styling
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import { useNavigate } from "react-router-dom";
import Header from "../../header&footer/Header";
import { useDispatch } from "react-redux";
import {userAction} from '../../../redux/action/user.action'


import { option } from './Data'
import Cookies from "js-cookie";
const DashboardApp = () => {
  const token=Cookies.get('token')
  const [selectedOption, setSelectedOption] = useState("dashboard");
  // const navigate = useNavigate();
  const dispatch=useDispatch()
  // const user = useSelector((state) => {
  //   return state;
  // });
  // console.log(user.verifyOTP);
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(()=>{
      dispatch(userAction())
  },[])

  return (
    <>
      <div className="w-[1400px] bg-white ">
        <div className="">   
          <Header />
        </div>

        <div className="flex  top-[100px]">

          <div className="">
            <div className="Rectangle48 w-[290px]   bg-white shadow mt-[10px]">
              {option.map(({ name, icon }) => {
                return (
                  <div
                    className={`sidebar-option ${selectedOption === name && "active"
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

          <div className="">
            <div className="w-[1108px] h-[697px]   ">

              <div className="Rectangle108 w-[1140px] h-[60px] flex items-center bg-white  mt-[1px] ml-[2px] shadow  ">
                {/* <div className=" bg-black items-center"> */}
                <div className="ml-[16px]">
                  <div className="Dashboard flex items-center  text-zinc-500 text-base font-normal font-['Poppins'] space-x-3   ">
                    <span> Dashboard</span>
                    <span className="ml-[10px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                        <path d="M1 1L7 7L1 13" stroke="#2676C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>

                    <span className=" text-[#2676C2] text-base font-normal font-['Poppins']  ml-[10px]">{selectedOption}</span>
                    <div className={`${selectedOption==='Post a Requirements'?"":"hidden"}`}>
                      <div className=" flex items-center  ">
                        <span className=" ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M1 1L7 7L1 13" stroke="#2676C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                        <span className=" text-[#2676C2] text-base font-normal font-['Poppins']  ml-[10px]">PostTraining</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>

              <div className="Rectangle208  h-[637px] m-[20px] w-[1140px]">
                <div className=" ">
                  {
                    option.map(({ name, show }) => {
                      if (name === selectedOption) {
                        return show
                      }
                      return null
                    })
                  }
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default DashboardApp;
