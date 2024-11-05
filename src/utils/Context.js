"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const refreshToken = () => {
        const savedToken = Cookies.get('adminToken');
        setToken(savedToken || ''); 
    };

    useEffect(() => {
        
        refreshToken();
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken, refreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
