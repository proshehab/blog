import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Detail from "./components/pages/Detail";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Profile from "./components/account/Profile";
import MyBlogs from "./components/account/MyBlogs";
import Favorites from "./components/account/Favoruites";
import ChangePassword from "./components/account/ChangePassword";
// import AdminLogin  from './components/admin/Login'
// import {TostContainer,toast} from 'react-toastify'
// import  Dashboard  from './components/admin/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/my-blogs" element={<MyBlogs />} />
          <Route path="/account/saved-blogs" element={<Favorites />} />
          <Route path="/account/change-password" element={<ChangePassword />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <TostContainer />
    </>
  );
}

export default App;
