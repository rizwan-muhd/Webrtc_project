import React from "react";
import { useParams } from "react-router-dom";

function RoomPage() {
  const { id } = useParams();
  return <div>RoomPageklsdklfk {id}</div>;
}

export default RoomPage;
