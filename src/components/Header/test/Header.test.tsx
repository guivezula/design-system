import { render, screen } from "@testing-library/react"
import { Header } from "../Header";
import { Default } from "../../../stories/Header.stories";

test("should render Header", () => {
    render(<Header {...Default.args} />);

    const headerElm = screen.getByTestId("header-component");
    expect(headerElm).toBeInTheDocument();
    expect(headerElm).toHaveTextContent("Heading SM");
})