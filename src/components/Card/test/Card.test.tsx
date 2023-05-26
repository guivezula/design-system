import { render, screen } from "@testing-library/react";
import { Card } from "../Card";
import { Default } from "../../../stories/Card.stories";

test("should render Card", () => {
    render(<Card {...Default.args}  />);

    const card = screen.getByTestId("shape-component");
    expect(card).toBeInTheDocument();


    expect(card).toHaveTextContent(Default.args.heading);
    expect(card).toHaveTextContent(Default.args.subtitle);
    expect(card).toHaveTextContent(Default.args.paragraph);
    expect(card).toHaveTextContent(Default.args.buttonLabel);
})