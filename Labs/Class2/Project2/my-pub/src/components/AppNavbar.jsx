import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
} from "reactstrap";
import logo from "../assets/images/logo.png";

export default function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="lg" className="mb-3">
            <NavbarBrand tag={Link} to="/">
                <img src={logo} alt="logo" height="40" />
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/menu">Menu</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/hiring">Hiring</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}