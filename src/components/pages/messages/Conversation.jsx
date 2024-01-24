import React, { useEffect, useState } from "react";
import Axios from "axios";

function Conversation({ conversation, currentuser, onclick }) {
  const [user, setUser] = useState(null);
  const friendid = conversation?.members?.filter((m) => m !== currentuser);
  // console.log('friendid',friendid[0])
    // console.log(user); 
  useEffect(() => {
    Axios.get(`http://localhost:4000/user/${friendid[0]}`)
      .then((resp) => {
        // console.log(resp.data)
        setUser(resp.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div onClick={onclick}>
      <div className="Rectangle115 hover:cursor-pointer  w-[317px] h-[70px] flex justify-between justify-items-center bg-white   rounded-tl-lg rounded-tr-lg">
        <div className="flex">
          <div className="mt-[12px] ml-[10px]">
            <img
              className="Image14 w-[47px] h-[47px] rounded-[50%]"
              src="https://via.placeholder.com/70x47 "
              alt=""
            />
          </div>
          <div className="flex flex-col space-y-1 ml-[10px] mt-[13px] ">
            <div className="Charlie text-gray-800 text-base font-medium font-['Poppins']">
              {user?.name}
            </div>
            <div className="Typing text-neutral-500 text-xs font-normal font-['Poppins']">
              Typing....
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 mr-[10px]">
          <div className="00 text-neutral-500 text-xs font-normal font-['Poppins'] mt-[13px]">
            12.00
          </div>

          <div className="Ellipse17 w-5 h-5 ml-1 text-white bg-sky-600 rounded-full">
            <div className=" text-white text-sm font-normal font-['Poppins'] ml-[5px] mb-[1px]">
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
