import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [loginDetails, setLoginDetails] = useState()
    const [loggedIn, setLoggedIn] = useState(loginDetails?.success)

    const navigate = useNavigate();

    useEffect(() => {
        login()
    }, [loggedIn]);

    function logout() {
        Cookies.remove("loginDetails")
        setLoggedIn((prevState) => {
            return false
        })
        setLoginDetails((prevState) => {
            return null
        })
        navigate('/')
    }

    function login() {
        const userData = Cookies?.get("loginDetails")
        setLoginDetails((prevState) => {
            return userData ? JSON.parse(userData) : null
        })

        if (userData && loginDetails) {
            setLoggedIn((prevState) => {
                return true
            })
            navigate('/dashboard', { replace: true })
        }
        else {
            setLoggedIn((prevState) => {
                return false
            })
        }
    }

    return (
        <AuthContext.Provider
            value={{ user: loginDetails?.data, loggedIn, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };
