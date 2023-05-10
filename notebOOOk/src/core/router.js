import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import First from "../pages/First";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Post from "../pages/Post";
import Profile from "../pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route exact path="/" element={<First />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/write" element={<Write />} />
          <Route path="/home/:id" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default Router;
