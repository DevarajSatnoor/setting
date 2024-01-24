import React, { useEffect, useRef, useState } from "react";
import { UserContext } from "../../usercontext";
import Axios from "axios";
import Conversation from "./Conversation";
import Messages from "./Messages";
import { io } from "socket.io-client";
// import { IoSearchOutline } from "react-icons/io5";
import "../../styles/Chat.css";
import { useSelector } from "react-redux";


// function Chat() {
//   // const { user } = useContext(UserContext);
//   const [conversation, setConversation] = useState([]);
//   const [currentChat, setCurrentChat] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newmessage, setNewmessage] = useState(null);
//   const [arrivalMessage, setArrivalMessage] = useState(null)
//   const socket = useRef();

//   const f = (cid) => {
//     setCurrentChat(cid);
//   };
//   const user=useSelector(({verifyOTP})=>{
//     return verifyOTP.data
//   })
//   console.log(user)
//   useEffect(() => {
//     socket.current = io("http://localhost:4040");
//     socket.current.on("getMessage", (data) => {
//       setArrivalMessage({
//         sender: data.senderId,
//         text: data.text,
//         createdAt: Date.now(),
//       });
//     });
//   }, []);
//   useEffect(() => {
//     arrivalMessage &&
//       conversation[0]?.members.includes(arrivalMessage.sender) &&
//       setMessages((prev) => [...prev, arrivalMessage]);
//   }, [arrivalMessage, conversation]);

//   useEffect(() => {
//     console.log(user)
//     if (user){
//       socket.current.emit("addUser", user._id);
//       socket.current.on("getUsers", (users) => {
//         console.log(users);
//       });

//     }
//   }, [user]);

//   useEffect(() => {
//     const getconversation = async () => {
//       if (user) {
//         await Axios.get(`http://localhost:4000/conversation/${user._id}`)
//           .then((resp) => {
//             // console.log(resp.data);
//             setConversation(resp.data.conversation);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     };
//     getconversation();
//   }, [user]);

//   useEffect(() => {
//     const getmessage = async () => {
//       await Axios.get(`http://localhost:4000/message/${currentChat}`)
//         .then((resp) => {
//           // console.log(resp.data.messages);
//           setMessages(resp.data.messages);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     getmessage();
//   }, [currentChat]);

//   const handlesubmit = async (event) => {
//     event.preventDefault();
//     const message = {
//       sender: user?._id,
//       text: newmessage,
//       conversationId: currentChat,

//     };
//     console.log(conversation,conversation?.members,"helo")
//     const receiver=conversation[0]?.members.filter(m=>m!==user?._id)
//     socket.current.emit('sendMessage',{
//       senderId:user._id,
//       receiverId:receiver[0],
//       text:newmessage

//     })
//     try {
//       await Axios.post("http://localhost:4000/message/addMesage", message).then(
//         (resp) => {
//           console.log(resp.data);
//           setMessages([...messages, resp.data.savedMessage]);
//         }
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   // useEffect(() => {
//   //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
//   // }, [messages]);
//   return (
//     <div className="flex h-screen">
//       <div className="w-1/3 flex flex-col bg-blue-200">
//         <div className="chatMenuWrapper">
//           <div>Chat</div>
//           {conversation?.map((c) => {
//             return (
//               <Conversation
//                 conversation={c}
//                 currentuser={user._id}
//                 onclick={() => f(c._id)}
//               />
//             );
//           })}
//         </div>
//       </div>

//       {currentChat ? (
//         <div className="w-2/3 bg-blue-400 flex flex-col ">
//           <div className="flex-grow">message</div>
//           <div>
//             {messages.map((m) => {
//               return <Messages messages={m} own={m.sender === user._id} />;
//             })}
//           </div>
//           <form className="flex gap-2 mx-2 " onSubmit={handlesubmit}>
//             <input
//               className="bg-white flex-grow border p-2 rounded-sm"
//               type="text"
//               onChange={(e) => {
//                 setNewmessage(e.target.value);
//               }}
//               value={newmessage}
//             />
//             <button className="bg-blue-500 p-2 rounded-sm" type="submit">
//               send
//             </button>
//           </form>
//         </div>
//       ) : null}
//     </div>
//   );
// }

function Chat() {
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newmessage, setNewmessage] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null)

  const user = useSelector(({ user }) => {
    return user
  })

  console.log(user.user._id)
  console.log('messages', messages)
  console.log('conversation', conversation)

  const socket = useRef();

  const f = (cid) => {
    setCurrentChat(cid);
  };
  // console.log(user)

  useEffect(() => {
    socket.current = io("http://localhost:4040");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      conversation[0]?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, conversation]);

  useEffect(() => {
    console.log(user)
    if (user) {
      socket.current.emit("addUser", user?.user._id);
      socket.current.on("getUsers", (users) => {
        console.log(users);
      });
    }
  }, [user]);

  useEffect(() => {
    const getconversation = async () => {
      if (user) {
        await Axios.get(`http://localhost:4000/conversation/${user?.user._id}`)
          .then((resp) => {
            // console.log(resp.data);
            setConversation(resp.data.conversation);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    getconversation();
  }, [user]);

  useEffect(() => {
    const getmessage = async () => {
      await Axios.get(`http://localhost:4000/message/${currentChat}`)
        .then((resp) => {
          // console.log(resp.data.messages);
          setMessages(resp.data.messages);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getmessage();
  }, [currentChat]);

  const handlesubmit = async (event) => {
    event.preventDefault();
    const message = {
      sender: user?._id,
      text: newmessage,
      conversationId: currentChat,

    };
    console.log(conversation, conversation?.members, "helo")
    const receiver = conversation[0]?.members.filter(m => m !== user?.user._id)
    socket.current.emit('sendMessage', {
      senderId: user?.user._id,
      receiverId: receiver[0],
      text: newmessage

    })
    try {
      await Axios.post("http://localhost:4000/message/addMesage", message).then(
        (resp) => {
          console.log(resp.data);
          setMessages([...messages, resp.data.savedMessage]);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);



  return (
    <div className="Rectangle111 w-[1070px] h-[595px] bg-white rounded-lg border border-zinc-300 mt-[20px]  flex gap-[4px]  ">
      <div>
        <div className="w-[355px] h-[555px] rounded border ml-[20px] mt-[20px]">
          <div className="Messages40 text-gray-800 text-xl font-medium font-['Poppins'] mt-[10px] ml-[8px]">
            Messages (40)
          </div>
          <div className="Rectangle49 w-[272px] h-[50px] mt-[10px] ml-[8px] bg-white rounded-[40px] border border-zinc-300 flex  ">
            <input
              className=" outline-none mt-2 ml-5 h-[30px] placeholder-[#888] placeholder:h-[] w-[] font-['Poppins'] "
              type="text"
              placeholder="Search Messges"
            />
            {/* <IoSearchOutline className=" absolute w-[20px] h-[20px] ml-[232px] mt-[14px] mb-[16px] mr-[20px] text-[#888888] " /> */}
          </div>
          <div className="messageChat  mt-[10px] w-[330px]">
            <div className=" w-[317px] h-[70px] bg-white   flex flex-col">
              {conversation?.map((c) => {
                return (
                  <Conversation
                    conversation={c}
                    currentuser={user._id}
                    onclick={() => f(c._id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {
        currentChat?
        <div>
          <div className="w-[675px] h-[555px] rounded border mt-[20px] flex flex-col ">
            <div className="flex">
              <div className=" static">
                <img
                  className="Ellipse21 w-[60px] h-[60px] mt-[10px] ml-[16px]  rounded-full"
                  src="https://via.placeholder.com/60x60"
                  alt=""
                />
              </div>
              <div className="Julia text-gray-800 text-xl font-medium font-['Poppins'] mt-[25px] ml-[20px]">
                {user?.name}
              </div>
            </div>

            <div className="Line10 w-[600px] h-[0px] ml-[20px] mt-[10px] border border-zinc-100 border-opacity-80" />

            <div className=" flex-grow overflow-y-auto chatcontent ">
              {messages?.map((m) => {
                // console.log(m)
                return <Messages messages={m} own={m.sender === user?.user._id} />;
              })}
            </div>

            <div>
              <form className="" onSubmit={handlesubmit}>
                <div className="flex   border border-t ">
                  <div className="flex   w-[650px] h-[54px] ">
                    <input className=" placeholder ml-[30px] placeholder-slate-500 w-[540px] h-[54px] outline-none" type="text" placeholder="Type your message"   onChange={(e) => {
                setNewmessage(e.target.value);
              }}
              value={newmessage} />

                    <svg className="mt-[17px] mb-[17px] absolute ml-[533px]" xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                      <path d="M17.3427 1.36747C15.5194 -0.455823 12.5222 -0.455823 10.6989 1.36747L0.708275 11.3331C0.533439 11.508 0.533439 11.7827 0.708275 11.9575C0.883112 12.1324 1.15785 12.1324 1.33269 11.9575L11.3233 1.99188C12.8219 0.493288 15.2446 0.493288 16.7183 1.99188C17.4426 2.7162 17.8422 3.66531 17.8422 4.68935C17.8422 5.71339 17.4426 6.6625 16.7183 7.38683L13.3964 10.7087L5.70359 18.4015C4.77946 19.3256 3.30584 19.3256 2.38171 18.4015C2.35673 18.3765 2.33175 18.3515 2.2818 18.2766C1.45757 17.3525 1.50753 15.9538 2.38171 15.0796L10.0745 7.38683L13.3714 4.08992C13.5462 3.91508 13.7461 3.84015 13.9708 3.84015C14.1956 3.84015 14.4204 3.94006 14.5703 4.08992C14.895 4.41461 14.895 4.9641 14.5703 5.31377L7.77665 12.1574C7.60181 12.3322 7.60181 12.6069 7.77665 12.7818C7.95148 12.9566 8.22623 12.9566 8.40106 12.7818L15.2197 5.96316C15.894 5.28879 15.894 4.16485 15.2197 3.49048C14.895 3.16578 14.4454 2.99095 13.9958 2.99095C13.5213 2.99095 13.0967 3.16578 12.772 3.49048L1.78227 14.4802C0.583393 15.6791 0.508463 17.6022 1.60743 18.8511C1.65739 18.926 1.70734 18.976 1.78227 19.0509C2.38171 19.6503 3.20593 20 4.05514 20C4.92932 20 5.72857 19.6753 6.32801 19.0509L7.37702 18.0019L17.3427 8.03622C18.2169 7.16204 18.7164 5.96316 18.7164 4.71433C18.7164 3.44052 18.2169 2.24165 17.3427 1.36747Z" fill="#888888" />
                    </svg>

                  </div>
                  <button className="w-[92px] h-[54px] bg-[#2676C2] rounded-br-lg  " type="submit">
                    <svg className="mt-[13px] ml-[31px] mb-[12px] stroke-white" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M4.56411 11.1421L12.2697 11.1421M18.5623 12.732L4.74058 20.0494C3.50192 20.7052 2.88224 21.0332 2.47381 20.9389C2.11953 20.857 1.8268 20.6099 1.68787 20.2739C1.52767 19.8864 1.74914 19.2205 2.19248 17.8904L4.25236 11.7108C4.32271 11.4998 4.35756 11.3945 4.37153 11.2865C4.38393 11.1907 4.38454 11.0938 4.37215 10.998C4.35849 10.8925 4.32404 10.7892 4.25682 10.5876L2.1922 4.3937C1.74885 3.06366 1.52734 2.39839 1.68754 2.01096C1.82648 1.67495 2.11915 1.42722 2.47343 1.34541C2.88193 1.25108 3.50179 1.57883 4.74085 2.2348L18.5626 9.55218C19.5367 10.0679 20.0238 10.326 20.183 10.67C20.3217 10.9696 20.3219 11.315 20.1832 11.6146C20.024 11.9584 19.537 12.2162 18.5639 12.7314L18.5623 12.732Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>:null
      }





    </div>
  );
}

export default Chat;
