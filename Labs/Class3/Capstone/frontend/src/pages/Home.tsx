import { useWidgets } from "@/context/WidgetContext"
import { WidgetCarousel} from "@/components/WidgetCarousel.tsx";




export default function Home() {
    const { topWidgets } = useWidgets();

    return (
        <div className="py-10">
            <h1 className="text-2xl font-bold mb-6 text-center text-white">Top 5 Bestselling Widgets</h1>
            <WidgetCarousel widgets={topWidgets} />
        </div>
    );
}