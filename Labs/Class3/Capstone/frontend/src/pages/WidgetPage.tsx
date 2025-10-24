import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useWidgets, type Widget} from "@/context/WidgetContext.tsx";
import WidgetCard from "@/components/WidgeCard.tsx"
import WidgetDetails from "@/components/WidgetDetails.tsx";


const WidgetPage = () => {
    const {id} = useParams<{id: string}>();
    const {getWidgetById} = useWidgets();
    const [widget, setWidget] = useState<Widget | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!id) return;
        setLoading(true);
        getWidgetById(Number(id))
            .then((w) => setWidget(w))
            .finally(() => setLoading(false));
    }, [id])

    if(loading) return <p>Loading...</p>

    if(!widget) return <p>No widget found</p>

    return (
        <div className={"grid grid-cols-2"}>
            <div className={"p-4"}>
                    <WidgetCard widget={widget} />
            </div>
            <div className={"p-4 w-2/3"}>
                <WidgetDetails widget={widget}/>
            </div>
        </div>
    )
}

export default WidgetPage;