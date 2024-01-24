import {createContext, useEffect, useState} from "react";
import Axios from "axios";
import Cookies from "js-cookie";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  const [user,setUser]=useState(null)
  // console.log(user)
  useEffect(() => {
    const validtoken=Cookies.get('token')
    // console.log(validtoken)
    Axios.get('http://localhost:4000/user/getuser',{
        headers:{
            Authorization:`Bearer ${validtoken}`
        }
    })
    .then((resp)=>{
        setId(resp.data.user._id)
        setUsername(resp.data.user.name)
        setUser(resp.data.user)
    })
  }, []);
  return (
    <UserContext.Provider value={{username, setUsername, id, setId,user}}>
      {children}
    </UserContext.Provider>
  );
}