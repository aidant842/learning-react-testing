import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
    test("renders posts is request succeeds", async () => {
        // Arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: "p1", title: "First Post" }],
        });
        render(<Async />);

        // Act

        // Assert
        const liElements = await screen.findAllByRole("listitem");
        expect(liElements).not.toHaveLength(0);
    });
});
