import { render, screen } from "@testing-library/react";
import MainAppBar from "../MainAppBar";

describe("<MainAppBar />", () => {
  it("should default to the News page", () => {
    render(<MainAppBar />);
    expect(screen.getByText("News")).toBeInTheDocument();
  });
});
