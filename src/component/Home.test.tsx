import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { addMe } from "../function";

describe("Home test check", () => {
  test("Check for name props", () => {
    render(<Home name="kiran" />);
    let txt = screen.getByText(/kiran/);
    expect(txt).toBeInTheDocument();
  });

  test("addition function", () => {
    let out = addMe(10, 20);
    expect(out).toBe(30);
  });
});
