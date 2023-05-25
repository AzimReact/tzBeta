import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../router";
const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, key) => (
                <Route element={route.component} path={route.path} key={key} />
            ))}
        </Routes>
    );
};

export default AppRouter;
