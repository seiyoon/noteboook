import "./App.css";
import { Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Edit from "./pages/Edit";
import Star from "./pages/Star";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/write" element={<Write />} />
      <Route path="/home/edit" element={<Edit />} />
      <Route path="/home/star" element={<Star />} />
    </Routes>
  );
};

export default App;
