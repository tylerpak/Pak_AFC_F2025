import {
    Table,
    Container,
} from "reactstrap";


export default function MenuTable({ menuItems }) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <Container className="my-4">
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