import { useState } from "react";
import straightImg from "../assets/images/straightMenu.png";
import beefImg from "../assets/images/beefMenu.png";
import chickenImg from "../assets/images/chickenMenu.png";

const menuItems = [
    {
        name: "Straight",
        description: "Classic creamy succulent gruel made how your mom used to",
        price: 36.99,
        image: straightImg,
    },
    {
        name: "The one with beef",
        description: "Chunks of beef charred black will get your mouth watering",
        price: 42.5,
        image: beefImg,
    },
    {
        name: "The one with chicken",
        description: "Chunks of chicken cooked rare for flavor",
        price: 42.5,
        image: chickenImg,
    },
];

export default function MenuTable() {
    const [index, setIndex] = useState(0);
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const next = () => setIndex((i) => (i + 1) % menuItems.length);
    const prev = () => setIndex((i) => (i - 1 + menuItems.length) % menuItems.length);

    const item = menuItems[index];

    return (
        <div className="menu-carousel d-flex align-items-center justify-content-center">
            <button className="btn btn-dark m-2" onClick={prev}>PREV</button>
            <div className="d-flex align-items-center flex-column flex-lg-row text-center text-md-start mx-3">
                <img src={item.image} alt={item.name} className="img-fluid mb-2 mb-md-0" />
                <div className="ms-md-3">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="fw-bold">{formatter.format(item.price)}</p>
                </div>
            </div>
            <button className="btn btn-dark m-2" onClick={next}>NEXT</button>
        </div>
    );
}