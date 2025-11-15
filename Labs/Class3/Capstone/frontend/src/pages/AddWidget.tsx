

import {
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"
import React, {useState} from "react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useWidgets} from "@/context/WidgetContext";
import {toast} from "sonner";


export default function AddWidget() {
    const {addWidget} = useWidgets();
    const [name, setName] = useState("");
    const [cost, setCost] = useState<number>(0);
    const [description, setDescription] = useState("");
    const [specs, setSpecs] = useState("");
    const [file, setFile] = useState<File | null>(null);

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if(!file) {
            toast.error("You must upload an image");
            return;
        }
        addWidget(name, cost, description, specs, file);
    }

    async function handleFileChange(e: React.ChangeEvent <HTMLInputElement>) {
        const image = e.target.files?.[0];
        if(!image) return;

        const png = await convertToPng(image);

        const maxSizeInMB = 1;
        if (png.size > maxSizeInMB * 1024 * 1024) {
            alert(`File is too large. Max size is ${maxSizeInMB} MB.`);
            setFile(null)
            return;
        }


        setFile(png);

    }

    async function convertToPng(file: File): Promise<File> {
        const bitmap = await createImageBitmap(file);

        const canvas = document.createElement("canvas");
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(bitmap, 0, 0);

        const pngBlob = await new Promise<Blob>((resolve) =>
            canvas.toBlob((blob) => resolve(blob!), "image/png")
        );

        return new File([pngBlob], file.name.replace(/\.[^.]+$/, "") + ".png", {
            type: "image/png",
        });
    }

    return (
        <div className={"w-full flex justify-center"}>
            <div className={"w-2/3 mt-16 border-black rounded-2xl border-2 px-3 py-3"}>
                <h1>Add Widget</h1>
                <FieldSet>
                    <FieldLabel htmlFor={"name"}>Name: </FieldLabel>
                    <Input id={"name"} onChange={(e) => setName(e.target.value)} required></Input>
                    <FieldLabel htmlFor={"cost"}>Cost: </FieldLabel>
                    <Input id={"cost"} onChange={(e) => setCost(Number(e.target.value))}></Input>
                    <FieldLabel htmlFor={"cost"}>Description: </FieldLabel>
                    <Input id={"cost"} onChange={(e) => setDescription(e.target.value)}></Input>
                    <FieldLabel htmlFor={"cost"}>Specs: </FieldLabel>
                    <Input id={"cost"} onChange={(e) => setSpecs(e.target.value)}></Input>
                    <FieldLabel htmlFor={"cost"}>Upload Image: </FieldLabel>
                    <Input id={"picture"} type={"file"} onChange={handleFileChange}/>
                    <Button className={"bg-white text-black"} onClick={(e) => {
                        handleSubmit(e)
                    }}>Add</Button>
                </FieldSet>
            </div>
        </div>

    )

}