import React, { createContext, useContext, useEffect, useState } from "react";
import {type Employee, useAuth} from "@/context/AuthContext.tsx";
import {toast} from "sonner";


export interface Widget {
    id?: number;
    name: string;
    slug: string;
    purchases: number;
    inventory: number;
    cost: number;
    image: string;
    createdBy: Employee | undefined;
    description: string;
    specs: string;
}


interface WidgetContextType {
    topWidgets: Widget[];
    getWidgetById: (id: number) => Promise<Widget | null>
    loading: boolean;
    refreshWidgets: () => Promise<void>;
    widgets: Widget[];
    fetchAllWidgets: () => Promise<void>;
    cart: Map<Widget, number>;
    handleAddToCart: (widget: Widget, qty: number) => void;
    removeFromCart: (widget: Widget, qty: number) => void;
    addWidget: (name: string, cost: number, description: string, specs: string, image: File) => void;
    deleteWidget: (id: number) => void;
    updateWidget: (widget: Widget) => void;
    updateWidgetImage: (id: number, image: File) => void;
}

const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

export const WidgetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const {user} = useAuth();
    const [topWidgets, setTopWidgets] = useState<Widget[]>([]);
    const [loading, setLoading] = useState(true);
    const [widgets, setWidgets] = useState<Widget[]>([]);
    const[cart, setCart] = useState<Map<Widget, number>>(new Map());

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

    const fetchAllWidgets = async() => {
        try {
            setLoading(true);
            const res = await fetch("http://localhost:8080/api/widgets/all");
            if (!res.ok) throw new Error("Failed to fetch top widgets");
            const data = await res.json();
            setWidgets(data);
            console.log(data)
        } catch (err) {
            console.error("Error fetching widgets:", err);
        } finally {
            setLoading(false);
        }
    }

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

    const handleAddToCart = (widget: Widget, qty:number) => {
        const newCart = new Map(cart);
        if(newCart.has(widget)) {
            // @ts-ignore
            newCart.set(widget, cart.get(widget) + qty)
        }
        else {
            newCart.set(widget, qty);
        }
        setCart(newCart);
        toast.success("Added Widget to Cart!")
    }

    const removeFromCart = (widget: Widget, qty: number) => {
        if(!cart.has(widget)) return;

        const newCart = new Map(cart);
        // @ts-ignore
        if(newCart.get(widget) - qty <= 0) {
            newCart.delete(widget);
        }
        else {
            // @ts-ignore
            newCart.set(widget, newCart.get(widget) - qty);
        }

        setCart(newCart);
        toast.success("Removed Widget from Cart!")
    }

    const addWidget = async (name: string, cost: number, description: string, specs: string, image: File) => {
        if(!cost) {
            toast.error("Please insert a number for cost");
            return;
        }
        let newWidget: Widget = {
            name: name,
            slug: name.trim(),
            purchases: 0,
            inventory: 10,
            cost: cost,
            image: "",
            createdBy: user || undefined,
            description: description,
            specs: specs,
        }

        console.log(newWidget);
        const res = await fetch("http://localhost:8080/api/widgets/save", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newWidget),
        })

        if(!res.ok) {
            toast.error("Failed to add Widget");
            return;
        }
        const addedWidget =  await res.json();

        const formData = new FormData();
        formData.append("image", image);

        const res2 = await fetch("http://localhost:8080/api/widgets/image/" + addedWidget.id, {
            method: "POST",
            body: formData,
        })

        if(!res2.ok) {
            toast.error("Failed to upload image");
            return;
        }
        else {
            toast.success("Added Widget!")
        }
    }

    const deleteWidget = async (id: number) => {
        const res = await fetch("http://localhost:8080/api/widgets/delete/" + id, {
            method: "DELETE"
        })

        if(!res.ok) {
            toast.error("Failed to delete widget");
        }

        fetchAllWidgets();
    }

    const updateWidget = async (widget: Widget) => {
        const res = await fetch("http://localhost:8080/api/widgets/save", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(widget),
        })

        if(!res.ok) {
            toast.error("Failed to add Widget");
            return;
        }
        else {
            toast.success("Widget edited!")
        }
    }

    const updateWidgetImage = async (id: number, image: File) => {
        const formData = new FormData();
        formData.append("image", image);

        const res2 = await fetch("http://localhost:8080/api/widgets/image/" + id, {
            method: "POST",
            body: formData,
        })

        if(!res2.ok) {
            toast.error("Failed to upload image");
            return;
        }
        else {
            toast.success("Added Widget!")
        }
    }


    useEffect(() => {
        fetchTopWidgets();
        fetchAllWidgets();
    }, []);

    return (
        <WidgetContext.Provider value={{ topWidgets, getWidgetById, loading, refreshWidgets: fetchTopWidgets, widgets, fetchAllWidgets, cart, handleAddToCart, removeFromCart, addWidget, deleteWidget, updateWidget, updateWidgetImage}}>
            {children}
        </WidgetContext.Provider>
    );
};

export const useWidgets = () => {
    const context = useContext(WidgetContext);
    if (!context) throw new Error("useWidgets must be used within a WidgetProvider");
    return context;
};
