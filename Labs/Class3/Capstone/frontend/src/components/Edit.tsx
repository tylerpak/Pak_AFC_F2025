import {
    Dialog,
    DialogContent, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button.tsx";
import {FieldLabel, FieldSet} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useWidgets, type Widget} from "@/context/WidgetContext.tsx";
import React, {useState} from "react";


type EditProp = {
    widget: Widget;
}

export default function Edit({widget} : EditProp) {
    const {updateWidget, updateWidgetImage} = useWidgets();
    const [name, setName] = useState(widget.name);
    const [cost, setCost] = useState<number>(widget.cost);
    const [description, setDescription] = useState(widget.description);
    const [specs, setSpecs] = useState(widget.specs);
    const [file, setFile] = useState<File | null>(null);

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const edit = widget;
        edit.name = name;
        edit.cost = cost;
        edit.description = description;
        edit.specs = specs;
        updateWidget(edit);
        if(file) {
            if(edit.id)updateWidgetImage(edit.id, file);
        }
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
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} className={"text-white bg-green-500"}>Edit</Button>
            </DialogTrigger>
            <DialogContent className={"sm:max-w-[425px]"}>
                <DialogHeader>
                    <DialogTitle>Edit Widget</DialogTitle>
                </DialogHeader>
                <FieldSet>
                    <FieldLabel htmlFor={"name"}>Name: </FieldLabel>
                    <Input id={"name"} value={name} onChange={(e) => setName(e.target.value)} required></Input>
                    <FieldLabel htmlFor={"cost"}>Cost: </FieldLabel>
                    <Input id={"cost"} value={cost} onChange={(e) => setCost(Number(e.target.value))}></Input>
                    <FieldLabel htmlFor={"description"}>Description: </FieldLabel>
                    <Input id={"description"} value={description} onChange={(e) => setDescription(e.target.value)}></Input>
                    <FieldLabel htmlFor={"specs"}>Specs: </FieldLabel>
                    <Input id={"specs"} value={specs} onChange={(e) => setSpecs(e.target.value)}></Input>
                    <FieldLabel htmlFor={"image"}>Upload New Image: </FieldLabel>
                    <Input id={"picture"} type={"file"} onChange={handleFileChange}/>
                    <Button className={"bg-white text-black"} onClick={(e) => {
                        handleSubmit(e)
                    }}>Submit</Button>
                </FieldSet>
            </DialogContent>
            <DialogFooter>

            </DialogFooter>
        </Dialog>
    )
}