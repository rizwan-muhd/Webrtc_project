const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connection = require("./Database/Connection");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const { createServer } = require("http");
const { RoomHandler } = require("./Controllers/RoomHandler");

const app = express();
app.use(express.json());

//cors policy
app.use(cors());

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User is Connected");
  RoomHandler(socket);
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

//load env vars
dotenv.config({ path: "./.env" });

//connect to DB
// connection();

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//route files
// const user = require("./routes/User");
// const movies = require("./routes/Movies");

//mount routes
// app.use("/api/user", user);
// app.use("/api/movies", movies);

app.use(bodyParser.json());

server.listen(8008, () => {
  console.log("server running on port 8008");
});

module.exports = app;
