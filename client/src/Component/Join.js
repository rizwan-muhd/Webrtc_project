import { Button } from "@mui/material";
import { useContext } from "react";
import { RoomContext, RoomProvider } from "../Context/RoomContext";

export const Join = () => {
  const WS = useContext(RoomContext);
  const CreateRoom = () => {
    WS.emit("create-room");
  };
  return (
    <Button onClick={CreateRoom} variant="contained">
      New Meeting
    </Button>
  );
};
