import {useWidgets, type Widget} from "@/context/WidgetContext.tsx";
import {
    Dialog,
    DialogContent, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";


export default function Cart() {
    const {cart} = useWidgets();
    const {removeFromCart} = useWidgets();
    const [cartItems, setCartItems] = useState<Widget[]>([])
    useEffect(() => {
        setCartItems(Array.from(cart.keys()))
    }, [cart]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} className={"text-black"}>Cart</Button>
            </DialogTrigger>
            <DialogContent className={"sm:max-w-[425px]"}>
                <DialogHeader>
                    <DialogTitle>Shopping Cart</DialogTitle>
                </DialogHeader>
                <ul>
                    {cartItems.map((widget) => (
                        <li className={"border-b border-black"}>
                            <div className={"flex gap-12 justify-center"}>
                                <img src={`/images/${widget.image}`} height="50" width={"50"} alt={widget.name}/>
                                {widget.name}
                                <div>
                                    Qty: {cart.get(widget)}
                                </div>
                                <Button onClick={() => {
                                    removeFromCart(widget, 1)
                                }} className={"bg-white text-black"}>Remove</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </DialogContent>
            <DialogFooter>

            </DialogFooter>
        </Dialog>
    )
}