import React from "react";
import { Outlet } from "react-router-dom";
import "./mainlayout.css";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="app__layout d-flex flex-column p-relative w-100 h-100">
            <Navbar />
            <main className="app__layout-content flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;