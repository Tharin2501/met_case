import { render, screen } from "@testing-library/react";
import Temperature from "./Temperature";

test("renders no temperature data found when data is undefined", () => {
  render(<Temperature data={undefined} />);
  const noDataElement = screen.getByText("No temperature data found");
  expect(noDataElement).toBeInTheDocument();
});

test("renders no time data found when data is undefined", () => {
  render(<Temperature data={undefined} />);
  const noDataElement = screen.getByText("No temperature data found");
  expect(noDataElement).toBeInTheDocument();
});
