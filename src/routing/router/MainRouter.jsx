import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SharedLayout from "../../screens/SharedLayout";
import Home from "../../screens/Home";

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
