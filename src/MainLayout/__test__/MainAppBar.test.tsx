import { render } from "@testing-library/react";
import MainAppBar from "../MainAppBar";

describe("<MainAppBar />", () => {
  it("should default to the News page", () => {
    const { getByText } = render(<MainAppBar />);
    expect(getByText("News")).toBeInTheDocument();
  });
});
