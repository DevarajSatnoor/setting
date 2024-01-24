import React from 'react'
import Time from 'timesago'


function Messages({ messages, own }) {
  // console.log(messages)
  return (
    <div >
      {
        own ? <div className="mt-[30px]">
          {/* ownmessage */}

          <div className="flex flex-row-reverse mr-[21px] space-x-1">
            <div className="">
              <img
                className="Ellipse22 w-[50px] h-[50px] rounded-full mt-[10px]"
                src="https://via.placeholder.com/50x50"
                alt=""
              />
            </div>
            <div>
              <div className="Rectangle128 w-[365px] h-[69px] mr-[10px] bg-[#2676c3] rounded-tl-[20px] rounded-tr-lg rounded-br-lg border border-gray-200" >
                <div className=" text-[#ffff] text-xs font-normal font-['Poppins'] mt-[16px] ml-[10px]">
                  {messages?.text}
                </div>
              </div>
            </div>
          </div>
          <div className="messageBottom">{Time(messages.createdAt)}</div>
        </div>

          :

          <div className="flex ml-[21px] space-x-1 mb-[30px] mt-[30px]">
            {/* friednmessge */}
            <div className="">
              <img
                className="Ellipse22 w-[50px] h-[50px] rounded-full mt-[10px]"
                src="https://via.placeholder.com/50x50"
                alt=""
              />
            </div>
            <div>
              <div className="Rectangle128 w-[365px] h-[69px] bg-zinc-100 rounded-tl-[20px] rounded-tr-lg rounded-br-lg border border-gray-200" >
                <div className=" text-neutral-500 text-xs font-normal font-['Poppins'] mt-[16px] ml-[10px]">
                  {messages?.text}
                </div>
              </div>
            </div>
            <div className="messageBottom">{Time(messages.createdAt)}</div>
          </div>
      }





    </div>
  )
}

export default Messages