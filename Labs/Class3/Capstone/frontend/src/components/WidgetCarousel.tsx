import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import type { Widget } from "@/context/WidgetContext";
import {Link} from "react-router-dom";

interface WidgetCarouselProps {
    widgets: Widget[];
}

export function WidgetCarousel({ widgets }: WidgetCarouselProps) {
    return (
        <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="h-150">
                {widgets.map((widget) => (
                    <CarouselItem key={widget.id} className="w-full h-full flex justify-center items-center">
                        <div className="w-100 h-140 p-4 bg-white shadow-md rounded-lg flex flex-col justify-between items-center">
                            <Link to={`/widget/${widget.id}`} className="flex-1 flex justify-center items-center">
                                <img
                                    src={`/images/${widget.image}`}
                                    alt={widget.name}
                                    className="max-w-full max-h-full object-contain rounded-md"
                                />
                            </Link>
                            <h3 className="font-semibold text-center mt-2">{widget.name}</h3>
                            <p className="text-sm text-center text-gray-500">${widget.cost.toFixed(2)}</p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
