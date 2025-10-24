
import {type Widget} from "@/context/WidgetContext";


interface WidgetDetailsProps {
    widget: Widget
}

const WidgetDetail = ({widget}: WidgetDetailsProps) => {
    console.log(widget)

    return (
        <main className="flex justify-center items-start px-6 py-12 ">
            <div className="w-full max-w-2xl flex flex-col space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">
                    {widget.name}
                </h1>


                <p className="text-blacktext-base">
                    {widget.description}
                </p>

                <section>
                    <h2 className="font-semibold text-lg mb-2 text-foreground">Specifications</h2>
                    <p className="list-disc list-inside text-sm text-black space-y-1">
                        {widget.specs}
                    </p>
                </section>

                <section className="space-y-2">
                    <div className=" gap-2 text-xl font-medium text-green-800">
                        <span>${widget.cost.toFixed(2)}</span>
                    </div>
                    <div className="gap-2 text-sm text-red-500">
                        <span>{widget.inventory} in stock</span>
                    </div>
                </section>
            </div>
        </main>

    );
};

export default WidgetDetail;
