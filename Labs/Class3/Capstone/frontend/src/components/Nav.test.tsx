
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Nav from "./Nav";

describe("Nav component", () => {
    it("renders the logo with correct link", () => {
        render(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        );

        const logo = screen.getByAltText("home");
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", "/images/logo.png");

        const link = screen.getByRole("link", { name: /home/i });
        expect(link).toHaveAttribute("href", "/");
    });

    it("renders the nav container with correct classes", () => {
        render(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        );

        const nav = screen.getByRole("navigation");
        expect(nav).toBeInTheDocument();
        expect(nav).toHaveClass("fixed top-0 left-0 w-full");
    });
});
