import { type Widget} from "@/context/WidgetContext.tsx"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button.tsx";


interface WidgetCardProps {
    widget: Widget;
}


const WidgetCard =  ({widget}: WidgetCardProps) => {

    return (
        <Card className={"w-full max-w-sm relative top-0 left-0"}>
            <CardHeader>
                <CardTitle>
                    {widget.name}
                </CardTitle>
                <CardDescription></CardDescription>
                <CardContent>
                    <img src={`/images/${widget.image}`} alt={"widget"}/>
                </CardContent>
                <Button className={"bg-ring text-white font-bold"}>Add to cart</Button>
            </CardHeader>

        </Card>
    )
}

export default WidgetCard;