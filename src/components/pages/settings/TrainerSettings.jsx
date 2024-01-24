import React, { useState } from "react";
import "./TrainerSetting.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Stack } from "@mui/material";

import { ArrowForwardIos } from "@mui/icons-material";

function TrainerSettings() {
  const [activeOption, setActiveOption] = useState("Account Preference");
  const [model, setModel] = useState(0);
  const [modell, setModell] = useState(0);
  const [modelv, setModelv] = useState(0);
  const [modeln, setModeln] = useState(0);
  // const [radios1, setRadios1] = useState(false)
  //   const [radios2, setRadios2] = useState(false)
  //   const [radios3, setRadios3] = useState(false)
  const handleOptionClick = (option) => {
    setActiveOption(option);
    setModel(0);
    setModell(0);
    setModelv(0);
    setModeln(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [selectLanguage, setSelectLanguage] = useState("English");
  const [selectedValuevm, setSelectedValuevm] = useState(null);
  const [selectedValuevp, setSelectedValuevp] = useState(null);
  const [selectedValuevb, setSelectedValuevb] = useState(null);
  const [selectedValuevc, setSelectedValuevc] = useState(null);
  const [selectedValueva, setSelectedValueva] = useState(null);
  const [selectedValueasc, setSelectedValueasc] = useState(null);
  const [selectedValueasp, setSelectedValueasp] = useState(null);



  const handleLanguage = (e) => {
    setModel(0);
    setModell(0);
    setModelv(0);
    setModeln(0);
    setSelectLanguage(e.target.value);
    // console.log(e.target.value)
  };
  // const handleRadioChange = (value) => {
  //   // setModel(0);
  //   setModel(0);
  //   setModell(0);
  //   setModelv(0);
  //   setModeln(0);
  // };
  const handleRadioAccountProfile = (value) => {
    setModel(0);
    setModell(0);
    setModelv(0);
    setModeln(0);
    setSelectedValueasp(value);
    // setRadios1(!radios1);
    //  setRadios2(false);
    //  setRadios3(false)
  };
  const handleRadioAccountContact = (value) => {
    setModel(0);
    setModell(0);
    setModelv(0);
    setModeln(0);
    setSelectedValueasc(value);
  };
  const handleRadioMode = (value) => {
    setModel(0);
    setModell(0);
    setModelv(0);
    setModeln(0);
    setSelectedValuevm(value);
  };
  const handleRadioProfile = (e) => {
    // setModel(0);
    // setModell(0);
    // setModelv(0);
    // setModeln(0);
    setSelectedValuevp(e.target.value);
    // setSelectedValuevp(e.target.checked);
  };
  const handleRadioBannerImage = (value) => {
    setModel(0);
    setModell(0);
    setModelv(0);
    setModeln(0);
    setSelectedValuevb(value);
  };
  const handleRadioCertificationInformation = (value) => {
    setModel(0);
    setModell(0);
    setModelv(0);
    setModeln(0);
    setSelectedValuevc(value);
  };
  const handleRadioAvailableDates = (value) => {
    setModel(0);
    setModell(0);
    setModelv(0);
    setModeln(0);
    setSelectedValueva(value);
  };

  return (
    <div className="trainer-settings">
      <div className="main-setting">
        <div className="settings">
          <button
            className={activeOption === "Account Preference" ? "active" : ""}
            onClick={() => handleOptionClick("Account Preference")}
          >
            Account Preference
          </button>
          <button
            className={activeOption === "Login and Security" ? "active" : ""}
            onClick={() => handleOptionClick("Login and Security")}
          >
            Login and Security
          </button>
          <button
            className={activeOption === "Visibility" ? "active" : ""}
            onClick={() => handleOptionClick("Visibility")}
          >
            Visibility
          </button>
          <button
            className={activeOption === "Notification" ? "active" : ""}
            onClick={() => handleOptionClick("Notification")}
          >
            Notification
          </button>
        </div>
        {model === 0 ? (
          <div className="content-settings">
            <div className="account-preference">
              {activeOption === "Account Preference" && (
                <div>
                  <div className="border1 flex flex-col ">
                    <h4
                      style={{
                        color: "#263128",
                        paddingLeft: "20px",
                        paddingRight: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      Profile Information
                    </h4>
                    <div
                      className="settings-para"
                      // style={{ paddingLeft: "20px", paddingRight: '12px' }}
                    >
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          height: "60px",
                          paddingLeft: "20px",
                          paddingRight: "10px",
                        }}
                      >
                        Name, Occupation, Company, skills, certification &
                        Contact Information{" "}
                        <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="border2">
                    <h4
                      style={{
                        color: "#263128",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                        // paddingLeft: "20px",
                        // padding: "10px",
                      }}
                    >
                      General Preference
                    </h4>
                    <div
                      // style={{ paddingLeft: "20px", paddingRight: '12px' }}
                      className="settings-para"
                    >
                      {/* <div> */}
                      <p
                        onClick={() => {
                          setModel(1);
                        }}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          height: "60px",
                          alignItems: "center",
                          paddingLeft: "20px",
                          paddingRight: "10px",
                        }}
                      >
                        <p style={{ marginBottom: "10px" }}>Language</p>{" "}
                        <span
                          style={{
                            display: "inline-flex",
                            gap: "10px",
                            color: "#b6b6b6",
                          }}
                        >
                          <div>{selectLanguage}</div>
                          <div>
                            {" "}
                            <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                          </div>
                        </span>
                      </p>
                      {/* </div> */}
                    </div>

                    <hr />
                    <div
                      className="settings-para"
                      // style={{ padding: "10px", paddingLeft: "20px" }}
                    >
                      <p
                        // className="settings-para"
                        onClick={() => {
                          setModel(2);
                        }}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          height: "60px",
                          alignItems: "center",
                          paddingLeft: "20px",
                          margin: "auto",
                          paddingRight: "10px",
                        }}
                      >
                        Showing Profile
                        <button
                          style={{
                            display: "inline-flex",
                            gap: "10px",
                            color: "#b6b6b6",
                          }}
                        >
                          <div>{selectedValueasp}</div>
                          <div>
                            <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                          </div>
                        </button>
                      </p>
                    </div>
                    <hr />
                    <div className="settings-para">
                      {" "}
                      <p
                        onClick={() => {
                          setModel(3);
                        }}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          height: "60px",
                          alignItems: "center",
                          paddingLeft: "20px",
                          paddingRight: "10px",
                          // gap:"10px"
                        }}
                      >
                        <p>Show contact Information</p>
                        <span
                          style={{
                            display: "inline-flex",
                            gap: "10px",
                            color: "#b6b6b6",
                          }}
                        >
                          <div>{selectedValueasc}</div>
                          <div>
                            <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                          </div>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {modell === 0 ? (
              <div className="login-and-security">
                {" "}
                {activeOption === "Login and Security" && (
                  <div>
                    <div className="border2">
                      <h4
                        style={{
                          padding: "10px",
                          paddingLeft: "20px",
                          color: "#263128",
                        }}
                      >
                        Account Access
                      </h4>
                      <div
                        // style={{ padding: "10px", paddingLeft: "20px" }}
                        className="settings-para"
                      >
                        <div>
                          <p
                            onClick={() => {
                              setModell(1);
                            }}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              height: "60px",
                              alignItems: "center",
                              color: "#535353",
                              paddingLeft: "20px",
                              paddingRight: "10px",
                              // padding:'10px'
                            }}
                          >
                            Mobile No
                            <p
                              style={{
                                color: "#B6B6B6",
                                gap: "10px",
                                display: "inline-flex",
                              }}
                            >
                              8825984044
                              <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                            </p>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="settings-para"
                        // style={{ padding: "10px", paddingLeft: "20px" }}
                      >
                        <p
                          onClick={() => {
                            setModell(2);
                          }}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center",
                            paddingLeft: "20px",
                            paddingRight: "10px",
                          }}
                        >
                          Activated Devices
                          <button
                            style={{
                              color: "#B6B6B6",
                              gap: "10px",
                              display: "inline-flex",
                            }}
                          >
                            02
                            <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                          </button>
                        </p>
                      </div>
                      <hr />
                      <div
                        className="settings-para"
                        // style={{ padding: "10px", paddingLeft: "20px" }}
                      >
                        <p
                          onClick={() => {
                            setModell(3);
                          }}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center",
                            paddingLeft: "20px",
                            paddingRight: "10px",
                          }}
                        >
                          Close Account
                          <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            {modelv === 0 ? (
              <div className="visibility">
                {activeOption === "Visibility" && (
                  <div>
                    <div className="border1">
                      <h4 style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                        Display
                      </h4>
                      <div className="settings-para">
                        {" "}
                        <p
                          onClick={() => setModelv(1)}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center",
                            paddingLeft: "20px",
                            paddingRight: "10px",
                            // paddingRight: '10px'
                          }}
                        >
                          <div> Mode </div>
                          <div>
                            {selectedValuevm}
                            <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                          </div>
                        </p>
                      </div>
                    </div>{" "}
                    <br />
                    <div className="border2">
                      <div>
                        <h4 style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                          Visibility of your Profile
                        </h4>
                        <div className="settings-para">
                          <p
                            onClick={() => setModelv(2)}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              height: "60px",
                              alignItems: "center ",
                              paddingLeft: "20px",
                              paddingRight: "10px",
                              // paddingRight: '10px'
                            }}
                          >
                            <div>Profile Image</div>
                            <div style={{ display: "flex", gap: "10px" }}>
                              {selectedValuevp}
                              <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                            </div>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="settings-para"
                        //  style={{ padding: "10px", paddingLeft: "20px" }}
                      >
                        {" "}
                        <p
                          onClick={() => setModelv(3)}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center",
                            paddingLeft: "20px",
                            paddingRight: "10px",
                          }}
                        >
                          <div> Banner Image</div>
                          <button style={{ display: "flex", gap: "10px" }}>
                            {" "}
                            {selectedValuevb}
                            <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                          </button>
                        </p>
                      </div>
                      <hr />
                      <div
                        className="settings-para"
                        // style={{ padding: "10px", paddingLeft: "20px" }}
                      >
                        <p
                          onClick={() => setModelv(4)}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center",
                            paddingLeft: "20px",
                            paddingRight: "10px",
                          }}
                        >
                          <div>Certication Information</div>
                          <div style={{ display: "flex", gap: "10px" }}>
                            {selectedValuevc}
                            <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                          </div>
                        </p>
                      </div>
                      <hr />
                      <div
                        className="settings-para"
                        // style={{ padding: "10px", paddingLeft: "20px" }}
                      >
                        {" "}
                        <p
                          onClick={() => setModelv(5)}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center",
                            paddingLeft: "20px",
                            paddingRight: "10px",
                          }}
                        >
                          <div>Available Dates</div>
                          <div style={{ display: "flex", gap: "10px" }}>
                            {selectedValueva}
                            <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            {modeln === 0 ? (
              <div className="notification">
                {activeOption === "Notification" && (
                  <div>
                    <div className="border2">
                      <h4 style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                        Notification You Recieve
                      </h4>
                      <div className="settings-para">
                        <p
                          onClick={() => setModeln(1)}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center ",
                            paddingLeft: "20px",
                            paddingRight: "10px",
                            // paddingRight: '13px'
                            // padding:"10px"
                          }}
                        >
                          Messages <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                        </p>
                      </div>
                      <hr />
                      <div
                        className="settings-para"
                        //  style={{ padding: "10px", paddingLeft: "20px" }}
                      >
                        {" "}
                        <p
                          onClick={() => setModeln(2)}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center",
                            paddingLeft: "20px",
                            paddingRight: "10px",
                          }}
                        >
                          Update profile
                          <button>
                            <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                          </button>
                        </p>
                      </div>
                      <hr />
                      <div
                        className="settings-para"
                        //  style={{ padding: "10px", paddingLeft: "20px" }}
                      >
                        <p
                          // className="settings-para"
                          onClick={() => setModeln(3)}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center",
                            paddingLeft: "20px",
                            paddingRight: "10px",
                          }}
                        >
                          News And Reports
                          <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                        </p>
                      </div>
                      <hr />
                      <div
                        className="settings-para"
                        // style={{ padding: "10px", paddingLeft: "20px" }}
                      >
                        {" "}
                        <p
                          // className="settings-para"
                          onClick={() => setModeln(4)}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            height: "60px",
                            alignItems: "center",
                            paddingLeft: "20px",
                            paddingRight: "10px",
                          }}
                        >
                          Propasals{" "}
                          <ArrowForwardIos sx={{ color: "#b6b6b6" }} />
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        ) : null}
        {model === 1 ? (
          <Stack direction={"column"} spacing={1.5} className="right-settings">
            <button
              style={{
                color: "#888888",
                display: "flex",
                gap: "5px",
                marginTop: "10px",
              }}
              onClick={() => {
                setModel(0);
              }}
            >
              <ArrowBackIcon />
              Back{" "}
            </button>{" "}
            <Stack spacing={1} sx={{ position: "relative", left: "5px" }}>
              <p className=" font-medium text-[#535353]">
                Select the language you used on Sisso
              </p>

              <div className="pb-[10px]">
                <select
                  onChange={handleLanguage}
                  name=""
                  id=""
                  style={{
                    border: "1px solid #cecece",
                    width: "239px",
                    height: "30px",
                    paddingLeft: "10px",
                    borderRadius: "2px",
                    outline: "none",
                    fontWeight: "600px",
                    marginBottom: "20px",
                  }}
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Kannada">Kannada</option>
                  <option value="Spanish">Spanish</option>
                </select>
              </div>
            </Stack>
          </Stack>
        ) : (
          ""
        )}
        {model === 2 ? (
          <div className="right-settings">
            <button
              className="radios"
              onClick={() => {
                setModel(0);
              }}
              style={{
                position: "relative",
                right: "5px",
                marginBottom: "10px",
                marginTop: "10px",
                display: "flex",
                gap: "10px",
              }}
            >
              <ArrowBackIcon />
              Back
            </button>
            <h4 style={{ color: "#535353", marginBottom: "10px" }}>
              Show your profile
            </h4>
            <Stack
              direction={"column"}
              spacing={""}
              sx={{ marginBottom: "20px" }}
            >
              <label
                // className={`${radio1 ? " text-[#2676c2] text-base font-normal font-['Poppins']" : " text-zinc-500 text-base font-normal font-['Poppins']"}`}
                htmlFor="No one"
                className={`radios ${
                  selectedValueasp === "No one" ? "selected" : ""
                }`}
              >
                <input
                  // onChange={() => { setRadio1(!radio1); setRadio2(false); }} checked={radio1}
                  type="radio"
                  name="selectone"
                  id="No one"
                  value="No one"
                  onChange={() => handleRadioAccountProfile("No one")}
                />
                No one
              </label>

              <label
                htmlFor="Your Friends"
                className={`radios ${
                  selectedValueasp === "Your Friends" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="selectone"
                  id="Your Friends"
                  value="Your Friends"
                  onChange={() => handleRadioAccountProfile("Your Friends")}
                />
                Your Friends
              </label>

              <label
                htmlFor="All sisso members"
                className={`radios ${
                  selectedValueasp === "All sisso members" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="selectone"
                  value="All sisso members"
                  id="All sisso members"
                  onChange={() =>
                    handleRadioAccountProfile("All sisso members")
                  }
                  // checked
                />
                All sisso members
              </label>
            </Stack>
          </div>
        ) : (
          ""
        )}
        {model === 3 ? (
          <div className="right-settings">
            <button
              className="radios"
              onClick={() => {
                setModel(0);
              }}
              style={{
                position: "relative",
                right: "5px",
                marginBottom: "10px",
                marginTop: "10px",
                display: "flex",
                gap: "10px",
              }}
            >
              <ArrowBackIcon />
              Back
            </button>
            {/* <br /> */}
            <h4 style={{ color: "#535353", marginBottom: "10px" }}>
              Show your contact information
            </h4>{" "}
            {/* <br /> */}
            <Stack
              direction={"column"}
              spacing={""}
              sx={{ marginBottom: "20px" }}
            >
              <label
                htmlFor="No one"
                className={`radios ${
                  selectedValueasc === "No one" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="selectone"
                  value="No one"
                  id="No one"
                  onChange={() => handleRadioAccountContact("No one")}
                />
                No one
              </label>

              <label
                htmlFor="Your Friends"
                className={`radios ${
                  selectedValueasc === "Your Friends" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="selectone"
                  value="Your Friends"
                  id="Your Friends"
                  onChange={() => handleRadioAccountContact("Your Friends")}
                />
                Your Friends
              </label>

              <label
                htmlFor="All sisso members"
                className={`radios ${
                  selectedValueasc === "All sisso members" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="selectone"
                  value="All sisso members"
                  id="All sisso members"
                  onChange={() =>
                    handleRadioAccountContact("All sisso members")
                  }
                />
                All sisso members
              </label>
            </Stack>
          </div>
        ) : (
          ""
        )}
      </div>

      {modell === 1 ? (
        <div className="right-settings ">
          <button
            className="radios"
            onClick={() => {
              setModell(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back{" "}
          </button>{" "}
          <form action="">
            <Stack
              direction={"column"}
              spacing={1}
              sx={{ marginBottom: "20px" }}
            >
              {/* <h4>If you want change registered mobile no</h4>
              <p>8825984044</p>
              <button
                type="submit"
                style={{ color: "#2676c2", display: "flex" }}
              >
                Send otp to this no
              </button> */}


              <h4>If you want change registered mobile no</h4>
              <p style={{display:'flex',gap:'5px'}}>
                8825984044<button style={{ color: "#2676c2" }}>Verified</button>
              </p>
              <h4 style={{ color: "#535353",fontSize:'18px',fontWeight:400 }}>New Number</h4>
              <div style={{display:'flex',alignItems:'center'}}><input
                type="text"
                placeholder="Enter Mobile number"
                style={{
                  width: "25rem",
                  height: "2.5rem",
                  flexShrink: 0,
                  border: "1px solid rgba(185, 185, 185, 1)",
                  outline: "none",
                  padding:'15px'
                }}
              /><span style={{fontWeight:500,color:'#2676c2',position:"relative",right:'70px',fontSize:'14px'}}>Get otp</span></div>
            </Stack>
          </form>
        </div>
      ) : ('')}
      {modell === 2 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModell(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back
          </button>
          <Stack sx={{ marginBottom: "20px" }}>
            <h4 style={{ marginBottom: "10px" }}>
              This profile activated in 2 devices
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="radios" style={{}}>
                Samsung GanaXy @9
              </p>
              <p
                className="hovering"
                style={{
                  color: "#2676c2",
                  fontSize: "14px",
                  marginRight: "10px",
                }}
              >
                Deactivate
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className="radios">Samsung GanaXy @9</p>
              <p
                className="hovering"
                style={{
                  color: "#2676c2",
                  fontSize: "14px",
                  marginRight: "10px",
                }}
              >
                Deactivate
              </p>
            </div>
          </Stack>
        </div>
      ) : (
        ""
      )}
      {modell === 3 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModell(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back{" "}
          </button>
          <h4 style={{ marginBottom: "10px" }}>Close account</h4>
          <h4 style={{ marginBottom: "10px" }}>
            Surely , If u want to close your sisso account
          </h4>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ marginBottom: "20px" }}
            // style={{
            //   display: "flex",
            //   justifyContent: "space-around",
            //   alignItems: "flex-start",
            // }}
          >
            <button className="button1">Sign Out</button>
            <button className="button2">Cancel</button>
          </Stack>
          <span></span>
        </div>
      ) : (
        ""
      )}

      {modelv === 1 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModelv(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back{" "}
          </button>
          <h4 style={{ marginBottom: "10px" }}>
            If u want To change mode of colour
          </h4>
          <Stack
            direction={"column"}
            spacing={""}
            sx={{ marginBottom: "20px" }}
          >
            <label
              htmlFor="Dark"
              className={`radios ${
                selectedValuevm === "Dark" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="Dark"
                id="Dark"
                onChange={() => handleRadioMode("Dark")}
              />
              Dark
            </label>

            <label
              htmlFor="Light"
              className={`radios ${
                selectedValuevm === "Light" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="Light"
                id="Light"
                onChange={() => handleRadioMode("Light")}
              />
              Light
            </label>

            <label
              htmlFor="Normal"
              className={`radios ${
                selectedValuevm === "Normal" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="Normal"
                id="Normal"
                onChange={() => handleRadioMode("Normal")}
              />
              Normal
            </label>
          </Stack>
        </div>
      ) : (
        ""
      )}
      {modelv === 2 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModelv(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back{" "}
          </button>
          <h4 style={{ marginBottom: "10px" }}>Profile picture privacy</h4>
          <div className="flex flex-col mb-[20px]">
            <label
              htmlFor="profilepic"
              className="flex flex-col"
              onChange={handleRadioProfile}
            >
              <label
                htmlFor="No one"
                className={`radios ${
                  selectedValuevp === "No one" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="profilepic"
                  value="No one"
                  id="No one"
                  // checked= {`selectedValuevp == "No one" ? ${true} : ${false}`}
                />
                No one
              </label>

              <label
                htmlFor="Your Friends"
                className={`radios ${
                  selectedValuevp === "Your Friends" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="profilepic"
                  value="Your Friends"
                  id="Your Friends"
                  // checked= {`selectedValuevp == "Your Friends" ? ${true} : ${false}`}
                />
                Your Friends
              </label>

              <label
                htmlFor="All sisso members"
                className={`radios ${
                  selectedValuevp === "All sisso members" ? "selected" : ""
                }`}
              >
                <input
                  type="radio"
                  name="profilepic"
                  value="All sisso members"
                  id="All sisso members"
                  // checked= {`selectedValuevp == "All sisso member" ? ${true} :  ${false}`}
                />
                All sisso members
              </label>
            </label>
          </div>
        </div>
      ) : (
        ""
      )}
      {modelv === 3 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModelv(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back{" "}
          </button>{" "}
          {/* <br /> */}
          <h4 style={{ marginBottom: "10px" }}>Banner images</h4>
          <Stack
            direction={"column"}
            spacing={""}
            sx={{ marginBottom: "20px" }}
          >
            <label
              htmlFor="No one"
              className={`radios ${
                selectedValuevb === "No one" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="No one"
                id="No one"
                onChange={() => handleRadioBannerImage("No one")}
              />
              No one
            </label>

            <label
              htmlFor="Your Friends"
              className={`radios ${
                selectedValuevb === "Your Friends" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="Your Friends"
                id="Your Friends"
                onChange={() => handleRadioBannerImage("Your Friends")}
              />
              Your Friends
            </label>

            <label
              htmlFor=""
              className={`radios ${
                selectedValuevb === "All sisso members" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="All sisso members"
                id="All sisso members"
                onChange={() => handleRadioBannerImage("All sisso members")}
              />
              All sisso members
            </label>
          </Stack>
        </div>
      ) : (
        ""
      )}
      {modelv === 4 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModelv(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back{" "}
          </button>

          <h4 style={{ marginBottom: "10px" }}>
            Who are all see your certification
          </h4>
          <Stack
            direction={"column"}
            spacing={""}
            sx={{ marginBottom: "20px" }}
          >
            <label
              htmlFor="No one"
              className={`radios ${
                selectedValuevc === "No one" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="No one"
                id="No one"
                onChange={() => handleRadioCertificationInformation("No one")}
              />
              No one
            </label>

            <label
              htmlFor="Your Friends"
              className={`radios ${
                selectedValuevc === "Your Friends" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="Your Friends"
                id="Your Friends"
                onChange={() =>
                  handleRadioCertificationInformation("Your Friends")
                }
              />
              Your Friends
            </label>

            <label
              htmlFor="All sisso members"
              className={`radios ${
                selectedValuevc === "All sisso members" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="All sisso members"
                id="All sisso members"
                onChange={() =>
                  handleRadioCertificationInformation("All sisso members")
                }
              />
              All sisso members
            </label>
          </Stack>
        </div>
      ) : (
        ""
      )}
      {modelv === 5 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModelv(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back{" "}
          </button>
          <h4 style={{ marginBottom: "10px" }}>
            Who are all see your available dates
          </h4>
          <Stack
            direction={"column"}
            spacing={""}
            sx={{ marginBottom: "20px" }}
          >
            <label
              htmlFor="No one"
              className={`radios ${
                selectedValueva === "No one" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="No one"
                id="No one"
                onChange={() => handleRadioAvailableDates("No one")}
              />
              No one
            </label>

            <label
              htmlFor="Your Friends"
              className={`radios ${
                selectedValueva === "Your Friends" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="Your Friends"
                id="Your Friends"
                onChange={() => handleRadioAvailableDates("Your Friends")}
              />
              Your Friends
            </label>

            <label
              htmlFor="All sisso members"
              className={`radios ${
                selectedValueva === "All sisso members" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="selectone"
                value="All sisso members"
                id="All sisso members"
                onChange={() => handleRadioAvailableDates("All sisso members")}
              />
              All sisso members
            </label>
          </Stack>
        </div>
      ) : (
        ""
      )}

      {modeln === 1 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModeln(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back
          </button>
          <h4 style={{ marginBottom: "10px" }}>
            If you want change message notification
          </h4>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ marginBottom: "20px" }}
            // style={{
            //   display: "flex",
            //   justifyContent: "space-around",
            //   alignItems: "flex-start",
            // }}
          >
            <button className="button1">Don't Shown</button>
            <button className="button2">Shown</button>
          </Stack>
        </div>
      ) : (
        ""
      )}

      {modeln === 2 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModeln(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back
          </button>

          <h4 style={{ marginBottom: "10px" }}>
            If You want change update profile notification
          </h4>
          <Stack direction={"row"} spacing={2} sx={{ marginBottom: "20px" }}>
            <button className="button1">Don't Shown</button>
            <button className="button2">Shown</button>
          </Stack>
        </div>
      ) : (
        ""
      )}
      {modeln === 3 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModeln(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back
          </button>

          <h4 style={{ marginBottom: "10px" }}>
            If You want change new & report notification
          </h4>
          <Stack direction={"row"} spacing={2} sx={{ marginBottom: "20px" }}>
            <button className="button1">Don't Shown</button>
            <button className="button2">Shown</button>
          </Stack>
        </div>
      ) : (
        ""
      )}
      {modeln === 4 ? (
        <div className="right-settings">
          <button
            className="radios"
            onClick={() => {
              setModeln(0);
            }}
            style={{
              position: "relative",
              right: "5px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <ArrowBackIcon />
            Back
          </button>
          <p style={{ marginBottom: "10px" }}>
            If you want change propasal notification
          </p>
          <Stack direction={"row"} spacing={2} sx={{ marginBottom: "20px" }}>
            <button className="button1">Don't Shown</button>
            <button className="button2">Shown</button>
          </Stack>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TrainerSettings;
