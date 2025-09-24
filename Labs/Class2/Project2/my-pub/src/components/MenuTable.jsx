import {
    Table,
    Container,
} from "reactstrap";
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
    {
        name: "The one with catfish",
        description: "Chunks of catfish, medium rare",
        price: 55.25,
        image: chickenImg,
    },
    {
        name: "The one with corn",
        description: "Vegan option for those so inclined",
        price: 55.25,
        image: chickenImg,
    }

];

export default function MenuTable({ menuItems }) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <Container className="my-4">
            <h2 className="text-center mb-4">Our Menu</h2>
            <Table bordered hover responsive>
                <thead className="table-dark">
                <tr>
                    <th>Image</th>
                    <th>Dish</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {menuItems.map((item, idx) => (
                    <tr key={idx}>
                        <td className="text-center">
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{ width: "100px", borderRadius: "8px" }}
                            />
                        </td>
                        <td className="fw-bold">{item.name}</td>
                        <td>{item.description}</td>
                        <td>{formatter.format(item.price)}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}