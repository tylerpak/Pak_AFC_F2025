// WidgetCarousel.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import type { Widget } from "@/context/WidgetContext";


vi.mock("@/components/ui/carousel", () => ({
    Carousel: ({ children }: any) => <div>{children}</div>,
    CarouselContent: ({ children }: any) => <div>{children}</div>,
    CarouselItem: ({ children }: any) => <div>{children}</div>,
    CarouselNext: () => <button>Next</button>,
    CarouselPrevious: () => <button>Prev</button>,
}));

import { WidgetCarousel } from "./WidgetCarousel";

describe("WidgetCarousel", () => {
    const mockWidgets: Widget[] = [
        {
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
        },
        {
            id: 2,
            name: "Spinner",
            slug: "spinner",
            purchases: 80,
            inventory: 30,
            cost: 14.99,
            image: "spinner.jpg",
            createdBy: 2,
            description: "",
            specs: "",
        },
    ];

    it("renders all widgets in the carousel", () => {
        render(
            <MemoryRouter>
                <WidgetCarousel widgets={mockWidgets} />
            </MemoryRouter>
        );

        mockWidgets.forEach((widget) => {
            expect(screen.getByText(widget.name)).toBeInTheDocument();

            const img = screen.getByAltText(widget.name) as HTMLImageElement;
            expect(img).toBeInTheDocument();
            expect(img.src).toContain(`/images/${widget.image}`);
        });
    });

    it("renders the price for each widget", () => {
        render(
            <MemoryRouter>
                <WidgetCarousel widgets={mockWidgets} />
            </MemoryRouter>
        );

        mockWidgets.forEach((widget) => {
            expect(screen.getByText(`$${widget.cost.toFixed(2)}`)).toBeInTheDocument();
        });
    });
});
