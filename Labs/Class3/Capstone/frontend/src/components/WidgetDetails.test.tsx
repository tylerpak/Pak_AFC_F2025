import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WidgetDetail from "./WidgetDetails.tsx";
import type { Widget } from "@/context/WidgetContext";

describe("WidgetDetail component", () => {
    const mockWidget: Widget = {
        id: 1,
        name: "Dice",
        slug: "dice",
        purchases: 100,
        inventory: 50,
        cost: 9.99,
        image: "dice.jpg",
        createdBy: 1,
        description: "jakfljalksdfjka;df",
        specs: "kajdsfklajsdklfjalksdfjla",
    };

    it("renders widget title, description, and specs", () => {
        render(<WidgetDetail widget={mockWidget} />);

        expect(screen.getByText(mockWidget.name)).toBeInTheDocument();

        expect(screen.getByText(mockWidget.description)).toBeInTheDocument();

        expect(screen.getByText(mockWidget.specs)).toBeInTheDocument();
    });

    it("renders widget cost and inventory", () => {
        render(<WidgetDetail widget={mockWidget} />);

        expect(screen.getByText(`$${mockWidget.cost.toFixed(2)}`)).toBeInTheDocument();

        expect(screen.getByText(`${mockWidget.inventory} in stock`)).toBeInTheDocument();
    });
});
