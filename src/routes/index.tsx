import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home";

const SiteRoutes = (): JSX.Element => {
    return(
        <Routes> 
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default SiteRoutes