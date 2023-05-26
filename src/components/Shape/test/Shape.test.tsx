import { render, screen } from "@testing-library/react"
import { Shape } from "../Shape";
import { Default } from "../../../stories/Shape.stories";

test("should render Shape", () => {
    render(<Shape {...Default.args} />);

    const shape = screen.getByTestId("shape-component");
    expect(shape).toBeInTheDocument();
})