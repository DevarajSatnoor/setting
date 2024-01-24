import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderImage from "../assets/LOGO.png";
import "../styles/Header.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Paper from "@mui/material/Paper";
import Favi from "../assets/favi.png";
const Header = () => {
  // State for search bar dropdown
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const toggleDropdown = () => {
    setDropdownActive(!isDropdownActive);
  };
 
  // State for profile dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
 
  const options = [
    { label: "The Godfather", id: 1 },
    { label: "Godfather", id: 2 },
    { label: "Pulp Fiction", id: 3 },
    { label: " Fiction", id: 4 },
  ];
  // Sample data for notification messages
  const notificationMessages = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4",
    "Message 4",
    "Message 4",
  ];
 
  // Sample data for profile dropdown
  const profileOptions = [
    "Option 1",
    "Profile Option 2",
    "Profile Option 3",
    "Profile Option 4",
  ];
 
  // const win=window.open()
 
  return (
    <div className="header">
      {/* Company Logo */}
      <div className="logo">
        <img src={HeaderImage} alt="Company Logo" />
      </div>
 
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="What are you looking for....."
          className="search-input"
          onFocus={toggleDropdown}
          onBlur={toggleDropdown}
        />
        {/* <SearchIcon " /> */}
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M17 17L25 25M10.3333 19.6667C5.17868 19.6667 1 15.488 1 10.3333C1 5.17868 5.17868 1 10.3333 1C15.488 1 19.6667 5.17868 19.6667 10.3333C19.6667 15.488 15.488 19.6667 10.3333 19.6667Z"
            stroke="#888888"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className={`dropdown-search ${isDropdownActive ? "active" : ""}`}>
          {/* Your dropdown content goes here */}
          <ul className="search-input-suggestion">
            {options.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
 
      {/* Notification Icon */}
      <div
        className="notification-icon"
        onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
          >
            <path
              d="M15.6667 19.6667V21C15.6667 23.2091 13.8758 25 11.6667 25C9.45753 25 7.66667 23.2091 7.66667 21V19.6667M15.6667 19.6667H7.66667M15.6667 19.6667H20.454C20.964 19.6667 21.2203 19.6667 21.4268 19.597C21.8213 19.4639 22.13 19.1542 22.263 18.7597C22.333 18.5524 22.333 18.2953 22.333 17.7813C22.333 17.5563 22.3327 17.4438 22.3151 17.3366C22.2818 17.1339 22.2032 16.9418 22.0834 16.775C22.0201 16.6868 21.9397 16.6064 21.7811 16.4478L21.2617 15.9284C21.0942 15.7608 21 15.5335 21 15.2965V10.3333C21 5.17867 16.8213 0.999987 11.6667 1C6.51202 1.00001 2.33333 5.17869 2.33333 10.3333V15.2966C2.33333 15.5336 2.23899 15.7608 2.07142 15.9284L1.55208 16.4477C1.39301 16.6068 1.31339 16.6867 1.25 16.775C1.13021 16.9418 1.05086 17.1339 1.0176 17.3366C1 17.4438 1 17.5563 1 17.7813C1 18.2953 1 18.5523 1.06994 18.7597C1.203 19.1541 1.51306 19.4639 1.90755 19.597C2.11408 19.6667 2.36935 19.6667 2.87941 19.6667H7.66667"
              stroke="#888888"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        {showNotificationDropdown && (
          <div className="notification-dropdown">
            {/* Scrollable area for notification messages */}
            <div className="notification-scroll">
              <div className="h-[48.5px] flex justify-center items-center">
                <div className="text-neutral-700 text-base font-normal font-['Poppins']">Notifications</div>
                <div className="Ellipse17 w-5 h-5 ml-1 text-white bg-sky-600 rounded-full">
                  <div className=" text-white text-sm font-normal font-['Poppins'] ml-[5px] mb-[1px]">
                    5
                  </div>
                </div>
              </div>
              <hr />
              {notificationMessages.map((message, index) => (
                <div key={index} className="notification-message">
                  {message}
                </div>
              ))}
            </div>
            <div className="triangle"></div>
          </div>
        )}
      </div>
 
      {/* Profile Dropdown */}
      <div
        className="profile"
        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
      >
        <div className="profile-header">
          <img src={Favi} alt="" style={{ float: "left", clear: "both" }} />
          <div>
            <h4>Martin Hook</h4>
            <p>UI UX Developer</p>
          </div>
        </div>
        {showProfileDropdown && (
          <div className="profile-dropdown">
            {/* Dropdown content goes here */}
            {/* <div className="profile-option">Pr.ofile Option 1</div> */}
            <div className="profile-option">
              {profileOptions.map((message, index) => (
                <div key={index} className="profile-list">
                  {message}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
 
export default Header;