import {useWidgets, type Widget} from "@/context/WidgetContext.tsx";
import WidgetCard from "@/components/WidgeCard.tsx";
import {useEffect, useState} from "react";
import {Input} from "@/components/ui/input"


export default function Results() {
    const [displayWidgets, setDisplayWidgets] = useState<Widget[] | null>(null)
    const {widgets, fetchAllWidgets} = useWidgets();

    useEffect(() => {
        fetchAllWidgets();

    }, []);

    useEffect(() => {
        setDisplayWidgets(widgets)
    }, [widgets]);


    const handleSearch = (event: { target: { value: string }; }) => {
        const value = event.target.value;
        const filtered = widgets.filter(widget => widget.name.toLowerCase().includes(value.toLowerCase()));
        if(filtered) setDisplayWidgets(filtered);
    }


    return (
        <div className={"grid-col-1"}>
            <div className={"w-1/3 justify-center py-8"}>
                <Input type={"search"} onChange={handleSearch} className={"bg-orange-800"} placeholder={"Search"}/>
            </div>
            <div className={"grid grid-cols-4 gap-4"}>
                {displayWidgets?.map((widget) => (
                    <WidgetCard widget={widget}/>
                ))}
            </div>
        </div>


    );




}