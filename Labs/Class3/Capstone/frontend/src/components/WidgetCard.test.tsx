import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WidgetCard from "./WidgeCard.tsx";
import type { Widget } from "@/context/WidgetContext";

describe("WidgetCard", () => {
    const mockWidget: Widget = {
        id: 1,
        name: "Dice",
        slug: "dice",
        purchases: 100,
        inventory: 50,
        cost: 9.99,
        image: "dice.jpg",
        createdBy: 1,
        description: "",
        specs: "",
    };

    it("renders widget name", () => {
        render(<WidgetCard widget={mockWidget} />);
        expect(screen.getByText("Dice")).toBeInTheDocument();
    });

    it("renders widget image with correct src and alt", () => {
        render(<WidgetCard widget={mockWidget} />);
        const img = screen.getByAltText("widget") as HTMLImageElement;
        expect(img).toBeInTheDocument();
        expect(img.src).toContain("/images/dice.jpg");
    });

    it("renders Add to cart button", () => {
        render(<WidgetCard widget={mockWidget} />);
        const button = screen.getByRole("button", { name: /add to cart/i });
        expect(button).toBeInTheDocument();
    });
});
