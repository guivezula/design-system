import { render, screen } from "@testing-library/react"
import { Paragraph } from "../Paragraph";
import { Default } from "../../../stories/Paragraph.stories";

test("should render Paragraph", () => {
    render(<Paragraph {...Default.args} />);

    const paragraph = screen.getByTestId("paragraph-component");
    expect(paragraph).toBeInTheDocument();
})