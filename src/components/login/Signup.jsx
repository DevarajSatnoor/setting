import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateOtp } from "../../redux/action/siginup.action";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import HeaderImg from "../assets/HeaderBg.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SliderSignin from "../slider/SliderSignin";
import { styled } from "@mui/system";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import Dropdown from "./Dropdown";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Data } from "../slider/Data";
import Slider from "react-slick";


const ZoomableMailOutlineIcon = styled(MailOutlineIcon)`
  color: #ffff;
  background-color: #ffffff80;
  fill: #2676c3;
  font-size: 3.76rem;
  border-radius: 50%;
  padding: 10px;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    background-color 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
    background-color: #ffff;
  }
`;


function Signup() {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((state) => state.generateOTP);
  // console.log(message)
  const navigate = useNavigate();
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleGenerateOTP = async (e) => {
    e.preventDefault();
    // <e className="stopPropogation"></e>
    if (phoneNumber.length !== 10) {
      toast.error("Please enter a 10-digit number");
    } else {
      dispatch(generateOtp(phoneNumber))
        .then((response) => {
          // localStorage.setItem('phoneNumber', phoneNumber);
          Cookies.set("phoneNumber", phoneNumber);
          if (message) {
            toast.success(message, {
              style: { backgroundColor: "#4CAF90", color: "#ffffff" },
            });
            setTimeout(() => {
              navigate("/otpverify");
            }, 2000);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="sigin-page-parent">
      <div className="parent-signin">
        <div className="logo-header-parent">
          <div className="logo-header-container">
            <div>
              <img src={HeaderImg} alt="" />
            </div>
            <div className="lang-bar ">
              <div className="">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M11.2441 11.1227C11.5288 10.2455 12.0503 9.46494 12.7513 8.86581C13.4524 8.26668 14.3063 7.87297 15.2171 7.72846C16.1279 7.58396 17.0604 7.694 17.9124 8.04671C18.7645 8.39943 19.5024 8.98124 20.0446 9.72721C20.5868 10.4732 20.9115 11.3543 20.9839 12.2736C21.0564 13.1929 20.8731 14.1146 20.4545 14.9364C20.0359 15.7581 19.399 16.4475 18.6127 16.9294C17.8264 17.4112 16.9222 17.6663 16 17.6663V19.3337M16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31ZM16.083 24.3333V24.5L15.917 24.5003V24.3333H16.083Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className="parent-signin">
        <div className="signin-parent">
          <div className="signin-container ">
            <div className="signin-left">
              <h1 className="signin-header">Welcome To SISSOO</h1>
              <h3 className="sigin-mobile">Mobile number</h3>
              <label className="sigin-label" htmlFor="mobileNumber">
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your mobile number"
                  maxLength={10}
                  minLength={10}
                  required
                  className="w-[400px]"
                />
              </label>
              <button className="sigin-otp" onClick={handleGenerateOTP}>
                GET OTP
              </button>
            </div>
            {/* <div className="sigin-right">
              <SliderSignin />
            </div> */}
             <div className="Carousel">
            <Slider
              autoplay
              autoplaySpeed={2500}
              dots={false}
              arrows={false}
              fade={true}
              infinite
            >
              {Data.map((item) => (
                <img className="SliderImg" src={item} alt="SliderImages" />
              ))}
            </Slider>
          </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="parent-signin">
        <div className="line-parent">
          <hr style={{ width: "40%", marginRight: "10px" }} />
          <span className="line-para">Or With</span>
          <hr style={{ width: "40%", marginLeft: "10px" }} />
        </div>
      </div>
      {/* section 4 */}
      <div className="parent-signin">
        <div className="icon-parent">
          <div className="">
            <ZoomableMailOutlineIcon />
          </div>
          <div>
            <GitHubIcon
              className="hover:fill-[#ffff] transform transition-transform duration-300 hover:scale-125  "
              sx={{ color: "#FFFFFF80", fontSize: "3.55rem" }}
            />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Signup;
