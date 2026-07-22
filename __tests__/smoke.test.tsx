import { render, screen } from "@testing-library/react";

test("test infra renders JSX", () => {
  render(<h1>hello</h1>);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
