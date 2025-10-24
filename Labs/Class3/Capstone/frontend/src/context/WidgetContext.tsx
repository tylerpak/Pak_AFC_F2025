import React, { createContext, useContext, useEffect, useState } from "react";


export interface Widget {
    id: number;
    name: string;
    slug: string;
    purchases: number;
    inventory: number;
    cost: number;
    image: string;
    createdBy: number;
    description: string;
    specs: string;
}


interface WidgetContextType {
    topWidgets: Widget[];
    getWidgetById: (id: number) => Promise<Widget | null>
    loading: boolean;
    refreshWidgets: () => Promise<void>;
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

export const WidgetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [topWidgets, setTopWidgets] = useState<Widget[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchTopWidgets = async () => {
        try {
            setLoading(true);
            const res = await fetch("http://localhost:8080/api/widgets/top5");
            if (!res.ok) throw new Error("Failed to fetch top widgets");
            const data = await res.json();
            setTopWidgets(data);
        } catch (err) {
            console.error("Error fetching widgets:", err);
        } finally {
            setLoading(false);
        }
    };

    const getWidgetById = async (id : number): Promise<Widget | null> => {
        try {
            console.log(id);
            setLoading(true);
            const res = await fetch("http://localhost:8080/api/widgets/" + id);
            if (!res.ok) throw new Error("Failed to fetch widget with id " + id);
            const data = await res.json();
            return data;
        } catch (err) {
            console.error("Error fetching widget", err);
            return null;
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTopWidgets();
    }, []);

    return (
        <WidgetContext.Provider value={{ topWidgets, getWidgetById, loading, refreshWidgets: fetchTopWidgets }}>
            {children}
        </WidgetContext.Provider>
    );
};

export const useWidgets = () => {
    const context = useContext(WidgetContext);
    if (!context) throw new Error("useWidgets must be used within a WidgetProvider");
    return context;
};
