import "./App.css";
import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import Home from './pages/home/Home';
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
    const { authUser } = useAuthContext();
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <Routes>
                    
                        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
                        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
                        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
                </Routes>
                <Toaster />
            </div>
        </>

    )
}

export default App