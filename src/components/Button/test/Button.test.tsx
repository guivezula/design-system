import { render, screen } from "@testing-library/react";
import { Button } from "../Button";
import { Default } from "../../../stories/Button.stories";

test("should render Button", () => {
    render(<Button {...Default.args}  />);

    const btnElm = screen.getByRole("button");
    expect(btnElm).toBeInTheDocument();
    expect(btnElm).toHaveTextContent(Default.args.label);
})