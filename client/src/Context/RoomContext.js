import { createContext, useEffect } from "react";
import SocketIO from "socket.io-client";
import { useNavigate } from "react-router-dom";

const ws = "http://localhost:8008/";

export const RoomContext = createContext(null);
const WS = SocketIO(ws);

export const RoomProvider = ({ children }) => {
  const navigate = useNavigate();
  const enterRoom = ({ roomId }) => {
    console.log("roomId", roomId);
    navigate(`/room/${roomId}`);
  };
  useEffect(() => {
    WS.on("room-created", enterRoom);
  }, []);
  return <RoomContext.Provider value={WS}>{children}</RoomContext.Provider>;
};
