import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import "chai/register-should";
import { expect, test } from "vitest";
import App from "../src/App";

test("render title", () => {
  render(<App />);
  const title = screen.getByText("Fast Calc");
  expect(title).toBeTruthy();
});

test("Start is not disabled at the begining", () => {
  render(<App />);
  const startButton = screen.getByText("Start");
  expect(startButton).not.toBeDisabled();
});

test("Show Result is disabled at the begining", () => {
  render(<App />);
  const startButton = screen.getByText("Show Result");
  expect(startButton).toBeDisabled();
});

test("Countdown starts after start button is clicked", async () => {
  render(<App />);
  const startButton = screen.getByText("Start");
  startButton.click();

  await waitFor(() => {
    const countdown = screen.getByText("3");
    expect(countdown).toBeInTheDocument();
  });
});

test("Countdown disappears after 3 seconds", async () => {
  render(<App />);
  const startButton = screen.getByText("Start");
  startButton.click();

  await waitFor(
    () => {
      const countdown = screen.queryByTestId("countdown");
      expect(countdown).toBeInTheDocument();
    },
    { timeout: 2900 }
  );

  await waitFor(
    () => {
      const countdown = screen.queryByTestId("countdown");
      expect(countdown).not.toBeInTheDocument();
    },
    { timeout: 3000 }
  );
});

test("First number appears after countdown", async () => {
  render(<App />);
  const startButton = screen.getByText("Start");
  startButton.click();

  await waitFor(
    () => {
      const number = screen.getByTestId("number");
      expect(number).toBeInTheDocument();

      // texto dentro del elemento
      const numberText = number.textContent;
      // Verifica que el texto sea un número (puede ser positivo o negativo)
      expect(numberText).toMatch(/^-?\+?\d+$/);
      expect(number).toHaveClass("opacity-100");
    },
    { timeout: 3040 }
  );
});
