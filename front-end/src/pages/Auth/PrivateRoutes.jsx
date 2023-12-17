import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
    return localStorage.getItem("userId") ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );
}

export default PrivateRoutes;
