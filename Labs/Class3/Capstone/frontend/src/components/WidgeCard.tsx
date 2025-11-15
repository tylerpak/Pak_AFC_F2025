import {useWidgets, type Widget} from "@/context/WidgetContext.tsx"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {useAuth} from "@/context/AuthContext.tsx";
import Edit from "@/components/Edit.tsx";


interface WidgetCardProps {
    widget: Widget;
}


const WidgetCard =  ({widget}: WidgetCardProps) => {
    const {handleAddToCart, deleteWidget} = useWidgets();
    const {user} = useAuth();
    return (
        <Card className={"w-full max-w-sm relative top-0 left-0 bg-orange-800"}>
            <CardHeader>
                <CardTitle>
                    {widget.name}
                </CardTitle>
                <CardDescription></CardDescription>
                <CardContent>
                    <Link to={`/widget/${widget.id}`} className="flex-1 flex justify-center items-center">
                        <img
                            src={`${widget?.image}`}
                            alt={widget.name}
                            className="max-w-full max-h-full object-contain rounded-md"
                        />
                    </Link>
                </CardContent>
                <Button onClick={() => {handleAddToCart(widget, 1); console.log("clicked")}} className={"bg-ring text-white font-bold"}>Add to cart</Button>
                {user &&<Button onClick={() => {if(widget.id) deleteWidget(widget.id)}} className={"bg-red-500 text-white font-bold"}>Delete</Button>}
                {user &&<Edit widget={widget}/>}
            </CardHeader>

        </Card>
    )
}

export default WidgetCard;