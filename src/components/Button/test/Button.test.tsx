import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

test("should render Button", () => {
    render(<Button label="any label"  />);

    const btnElm = screen.getByRole("button");
    expect(btnElm).toBeInTheDocument();
    expect(btnElm).toHaveTextContent("any label");
})