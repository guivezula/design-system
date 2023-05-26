import { render, screen } from "@testing-library/react"
import { Subtitle } from "../Subtitle";
import { Default } from "../../../stories/Subtitle.stories";

test("should render Subtitle", () => {
    render(<Subtitle {...Default.args} />);

    const subtitle = screen.getByTestId("subtitle-component");
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent(Default.args.content);
})