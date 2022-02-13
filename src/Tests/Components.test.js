import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button, Display, Calculator } from "../Components";

describe("Button component", () => {
  test("Render Button = Number", () => {
    const mockedFn = jest.fn();
    const { container } = render(
      <Button value={"addition"} variant="number" onClick={mockedFn} />
    );
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(mockedFn.mock.calls.length).toBe(1);
    expect(button.value).toBe("addition");
    expect(button.className.includes("number")).toBeTruthy();
  });

  test("Render Button = Operator", () => {
    const mockedFn = jest.fn();
    const { container } = render(
      <Button value={"substraction"} variant="operator" onClick={mockedFn} />
    );
    const button = container.querySelector("button");
    fireEvent.click(button);

    expect(mockedFn.mock.calls.length).toBe(1);
    expect(button.value).toBe("substraction");
    expect(button.className.includes("operator")).toBeTruthy();
  });
});

describe("Display component", () => {
  test("Render Display", () => {
    render(<Display value={"123890"} />);
    const text = screen.getByText(/123890/i);
    expect(text).not.toBeNull();
  });
});

describe("Calculator component", () => {
  test("First render should have a 0", () => {
    const { container } = render(<Calculator />);
    const display = container.querySelector(".display");
    expect(display.innerHTML).toBe("0");
  });

  test("When a button is clicked should change the display value", () => {
    const { container } = render(<Calculator />);
    const displayBefore = container.querySelector(".display").innerHTML;
    const button = container.querySelector("#button-4");

    fireEvent.click(button);

    const displayAfter = container.querySelector(".display").innerHTML;

    expect(displayBefore).toBe("0");
    expect(displayAfter).toBe("4");
  });

  test("Perform a calculation", () => {
    const { container } = render(<Calculator />);
    const displayBefore = container.querySelector(".display").innerHTML;
    const buttonFour = container.querySelector("#button-4");
    const buttonMultiplication = container.querySelector("#multiplication");
    const buttonFive = container.querySelector("#button-5");
    const buttonEqual = container.querySelector("#equal");

    fireEvent.click(buttonFour);
    fireEvent.click(buttonMultiplication);
    fireEvent.click(buttonFive);
    fireEvent.click(buttonEqual);

    const displayAfter = container.querySelector(".display").innerHTML;
    expect(displayBefore).toBe("0");
    expect(displayAfter).toBe("20");
  });

  test("Clean display", () => {
    const { container } = render(<Calculator />);
    const buttonFour = container.querySelector("#button-4");
    const buttonMultiplication = container.querySelector("#multiplication");
    const buttonFive = container.querySelector("#button-5");
    const buttonEqual = container.querySelector("#equal");
    const buttonClean = container.querySelector("#cleanAll");

    fireEvent.click(buttonFour);
    fireEvent.click(buttonMultiplication);
    fireEvent.click(buttonFive);
    fireEvent.click(buttonEqual);

    const displayBefore = container.querySelector(".display").innerHTML;
    fireEvent.click(buttonClean);

    const displayAfter = container.querySelector(".display").innerHTML;

    expect(displayBefore).toBe("20");
    expect(displayAfter).toBe("0");
  });

  test("Click on DEL button should remove the last digit or symbol", () => {
    const { container } = render(<Calculator />);
    const buttonFour = container.querySelector("#button-4");
    const buttonMultiplication = container.querySelector("#multiplication");
    const buttonFive = container.querySelector("#button-5");
    const buttonDel = container.querySelector("#del");

    fireEvent.click(buttonFour);
    fireEvent.click(buttonMultiplication);
    fireEvent.click(buttonFive);

    const displayBefore = container.querySelector(".display").innerHTML;

    fireEvent.click(buttonDel);

    const displayAfter = container.querySelector(".display").innerHTML;

    expect(displayBefore).toBe("4*5");
    expect(displayAfter).toBe("4*");
  });

  test("Click on rotate symbol should rotate one digit to the left", () => {
    const { container } = render(<Calculator />);
    const buttonFour = container.querySelector("#button-4");
    const buttonMultiplication = container.querySelector("#multiplication");
    const buttonFive = container.querySelector("#button-5");
    const buttonRotate = container.querySelector("#rotate");

    fireEvent.click(buttonFour);
    fireEvent.click(buttonMultiplication);
    fireEvent.click(buttonFive);

    const displayBefore = container.querySelector(".display").innerHTML;

    fireEvent.click(buttonRotate);

    const displayAfter = container.querySelector(".display").innerHTML;

    expect(displayBefore).toBe("4*5");
    expect(displayAfter).toBe("*54");
  });
});
