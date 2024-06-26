import { io } from "socket.io-client";

export const initSocket = async =()=>{
    const Options= {
        'force new connection': true,
         reconnectionAttempt:'Infinity',
         timeout:'10000',
         transport:['websocket'], 
    };
    
    return io(process.env.REACT_APP_BACKEND_URL,Options)
}
