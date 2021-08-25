import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// Grouping tests together into suites
describe("Greeting Component", () => {
    test("Renders 'Hello World!' as a text", () => {
        // Arrange
        render(<Greeting />);

        // Act
        // .. nothing

        // Assert
        const helloWorldElement = screen.getByText("Hello World!");
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("Renders 'It's good to see you!' if button isn't pressed", () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ...nothing

        // Assert
        const testElement = screen.getByText("It's good to see you!");
        expect(testElement).toBeInTheDocument();
    });

    test("Renders 'Changed!' if button is pressed", () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);

        // Assert
        const testElement = screen.getByText("Changed!");
        expect(testElement).toBeInTheDocument();
    });

    test("Doesn't render 'It's good to see you!' if button is pressed", () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);

        //Assert
        const testElement = screen.queryByText("good to see you", {
            exact: false,
        });
        expect(testElement).toBeNull();
    });
});
