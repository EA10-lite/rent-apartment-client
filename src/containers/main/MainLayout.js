import React from "react";
import { Outlet } from "react-router-dom";
import "./mainlayout.css";

const MainLayout = () => {
    return (
        <div className="app__main-layout">
            <Outlet />
        </div>
    )
}

export default MainLayout;