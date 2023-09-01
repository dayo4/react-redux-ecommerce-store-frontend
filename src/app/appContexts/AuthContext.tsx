import React, { createContext, ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import Cookies from "js-cookie";

interface LoginDetails {
    success: boolean
    data: {}
}

const AuthContext = createContext({})

const AuthProvider = ({ children } : {children: ReactNode}) => {
    const [loginDetails, setLoginDetails] = useState<LoginDetails>()
    const [loggedIn, setLoggedIn] = useState<boolean | undefined>(loginDetails?.success)

    const { push, replace } = useRouter()

    useEffect(() => {
        login()
    }, [loggedIn]);

    function logout() {
        Cookies.remove("loginDetails")
        setLoggedIn(() => {
            return false
        })
        setLoginDetails(() => {
            return null
        })
        push('/')
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
            replace('/dashboard')
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
