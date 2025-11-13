import {useWidgets, type Widget} from "@/context/WidgetContext.tsx"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";


interface WidgetCardProps {
    widget: Widget;
}


const WidgetCard =  ({widget}: WidgetCardProps) => {
    const {handleAddToCart} = useWidgets();
    return (
        <Card className={"w-full max-w-sm relative top-0 left-0"}>
            <CardHeader>
                <CardTitle>
                    {widget.name}
                </CardTitle>
                <CardDescription></CardDescription>
                <CardContent>
                    <Link to={`/widget/${widget.id}`} className="flex-1 flex justify-center items-center">
                        <img
                            src={`/images/${widget.image}`}
                            alt={widget.name}
                            className="max-w-full max-h-full object-contain rounded-md"
                        />
                    </Link>
                </CardContent>
                <Button onClick={() => {handleAddToCart(widget, 1); console.log("clicked")}} className={"bg-ring text-white font-bold"}>Add to cart</Button>
            </CardHeader>

        </Card>
    )
}

export default WidgetCard;