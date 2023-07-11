import React from "react";
import { Outlet } from "react-router-dom";
import "./authlayout.css";

const AuthLayout = () => {
    return (
        <div className="app__auth-layout">
            <Outlet />
        </div>
    )
}

export default AuthLayout;