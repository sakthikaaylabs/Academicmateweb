import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/dashboard";
import Sidebar from "../components/Sidebar/Sidebar";
import TopBar from "../components/Topbar/Topbar";
import Login from "../pages/Login/login";
import Signup from "../pages/Registraion/registration";
import ChangePassword from "../components/ChangePassword/changePassword";
import ForgotPassword from "../components/ForgetPassowrd/forgetPassword";
import ComingSoon from "../components/CommingSoon/ComingSoon";
import Notfound from "../components/404Page/page";
import Group from "../pages/Groups/groups";
import Academy from "../pages/Academy/academy";
import Notification from "../pages/Notifications/notification";
import Details from "../pages/Details/details";
import Profile from "../pages/Profile/profile";

const Routers = () => {
  return (
    <div style={{ width: "100vw",height:'100vh' }}>
      <BrowserRouter>
        <div style={{ textAlign: "center" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Signup />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/group" element={<Group />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/details" element={<Details />} />
            <Route path="/members" element={<Profile />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path='/*' element={<Notfound />} />
          </Routes>
        </div>
        <TopBar />
        <Sidebar />
      </BrowserRouter>
    </div>
  );
};
export default Routers;
