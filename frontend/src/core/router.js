import { Route, Routes, BrowserRouter } from "react-router-dom";

import First from "../pages/First";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Edit from "../pages/Edit";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<First />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/write" element={<Write />} />
        <Route path="/home/edit" element={<Edit />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
