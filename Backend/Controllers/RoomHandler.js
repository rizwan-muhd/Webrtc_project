const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid");

const RoomHandler = (socket) => {
  const createRoom = () => {
    const roomId = uuidv4();
    socket.join(roomId);
    socket.emit("room-created", { roomId });
    console.log("room is created");
  };
  const joinRoom = () => {
    console.log("join is room");
  };
  socket.on("create-room", createRoom);
  socket.on("join-room", joinRoom);
};

module.exports = {
  RoomHandler,
};
