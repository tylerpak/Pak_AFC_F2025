import React, { createContext, useContext, useEffect, useState } from "react";
import {toast} from "sonner";
import {useNavigate} from "react-router-dom";


export interface Employee {
    id: number;
    username: string;
    password: string;
}


interface AuthContextType {
    user: Employee | null;
    login: (username: string, password: string) => void;
    signUp: (username: string, password: string) => void;
    logOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<Employee | null>(null);
    const navigate = useNavigate();


    function logOut() {
        setUser(null)
    }
    const login = async (username: string, password: string) => {
        const res = await fetch("http://localhost:8080/api/widgets/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password}),
        });

        if (!res.ok) {
            console.error("Login failed");
            return
        }

        const data = await res.json();
        setUser(data);
        toast("Successfully logged in", {className: "bg-card text-card-foreground border-border"})
        navigate("/");
        console.log("Successfully logged in " + data.userId);
    }

    const signUp = async (username: string, password: string) => {
        const res = await fetch("http://localhost:8080/api/widgets/newEmployee", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password}),
        })

        if(!res.ok) {
            toast.error("Failed to sign up, make sure both username and password are filled out and username is unique");
            return;
        }
        const data = await res.json();
        setUser(data);
        toast("Successfully signed up and logged in", {className: "bg-card text-card-foreground border-border"});
        navigate("/");
    }




    useEffect(() => {

    }, []);

    return (
        <AuthContext.Provider value={{user, login, signUp, logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useWidgets must be used within a WidgetProvider");
    return context;
};
