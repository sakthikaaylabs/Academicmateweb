import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "../pages/Dashboard/dashboard";
import Sidebar from "../components/Sidebar/Sidebar";
import TopBar from  "../components/Topbar/Topbar"

const Routers = () => {
    return (
        <div style={{width:'100vw'}}>
            <BrowserRouter>
                <TopBar/>
                <Sidebar/>
                <div style={{ textAlign: "center" }}>
                    <Routes>
                        <Route path='/home' element={<Dashboard />} />
                        <Route path='/' element={<Dashboard />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default Routers;