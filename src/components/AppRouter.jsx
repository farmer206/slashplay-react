import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../hoc/AuthProvider";
import { Layout } from "./Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import RequireAuth from "../hoc/RequireAuth";
import Profile from "../pages/Profile";
import NotFoundPage from '../pages/NotFoundPage';


const AppRouter = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<Register />} />
                    <Route path="profile"element={
                        <RequireAuth>
                            <Profile /> 
                        </RequireAuth>
                    }/>
                    {/* <Route path="price-page" element={<PricePage />} /> */}
                    {/* <Route path="rules" element={<RulesPage />} /> */}
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default AppRouter;