import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/a-propos" element={<About/>}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

