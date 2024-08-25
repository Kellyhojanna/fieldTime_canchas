import { createContext, useState } from "react";
{/*
    1. Se crea un contexto
    2. se crea el proveedor
        2.1 verificar la autenticacion
    3. Exporta
*/}

const propiedad = {
    var1: 5,
    var2:8,
    var10:200
}

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = () => {
        setIsAuthenticated(true);
    }

    const logout = () => {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}