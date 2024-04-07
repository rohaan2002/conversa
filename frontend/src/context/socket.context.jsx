import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext, useAuthContext } from "./auth.context.jsx";

export const SocketContext = createContext();

export const useSocketContext=()=>{
  return useContext(SocketContext);  // hook we created infile and then exported
}

import io from 'socket.io-client';

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const {authUser} = useAuthContext();
  useEffect(() => {
    if(authUser){
        const socket = io("http://localhost:5000", {
          query:{
            userId: authUser._id
          }
        });
        setSocket(socket);
        console.log(" \nSocket looks like this ",socket);

        // socket.on is actually listening to the events // is used on both client as well as servers
        socket.on("getOnlineUsers", (users)=> { setOnlineUsers(users);
        })

        return ()=> socket.close(); //cleanup fn- works after component unmounts
    }
    else{
        if(socket){
            socket.close();
            setSocket(null);
        }
    }
  }, [authUser]);  // everytime the auth user is changes or added, you gotta send the info again to the backend
  return (
    <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>
  );
};
