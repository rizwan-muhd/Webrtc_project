import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RoomProvider } from "./Context/RoomContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HoomPage from "./Pages/HoomPage";
import RoomPage from "./Pages/RoomPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoomProvider>
        <Routes>
          <Route path="/home" element={<HoomPage />} />
          <Route path="/room/:id" element={<RoomPage />} />
        </Routes>
      </RoomProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
