

import {
    FieldLabel,
    FieldSet,
} from "@/components/ui/field"
import React, {useState} from "react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useWidgets} from "@/context/WidgetContext";


export default function AddWidget() {
    const {addWidget} = useWidgets();
    const [name, setName] = useState("");
    const [cost, setCost] = useState<number>(0);
    const [description, setDescription] = useState("");
    const [specs, setSpecs] = useState("");

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        addWidget(name, cost, description, specs);
    }

    return (
        <div>
            <FieldSet>
                <FieldLabel htmlFor={"name"}>Name: </FieldLabel>
                <Input id={"name"} onChange={(e) => setName(e.target.value)} required></Input>
                <FieldLabel htmlFor={"cost"}>Cost: </FieldLabel>
                <Input id={"cost"} onChange={(e) => setCost(Number(e.target.value))} ></Input>
                <FieldLabel htmlFor={"cost"}>Description: </FieldLabel>
                <Input id={"cost"} onChange={(e) => setDescription(e.target.value)} ></Input>
                <FieldLabel htmlFor={"cost"}>Specs: </FieldLabel>
                <Input id={"cost"} onChange={(e) => setSpecs(e.target.value)} ></Input>
            </FieldSet>
            <Button onClick={(e) => {handleSubmit(e)}}></Button>
        </div>

    )

}