/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form/Form";

describe("Given a Form component", () => {
  describe("When it is called", () => {
    test("Then it should render", () => {
      render(<Form></Form>);
    });
  });
  describe("When it is rendered", () => {
    test("Then it should render one textarea and one button", () => {
      render(<Form></Form>);

      const textarea = screen.getByRole("textbox");
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(textarea).toBeInTheDocument();
    });
  });
  describe("When the user types in the textarea input", () => {
    test("Then the textarea should display the text the user typed in", () => {
      const typedWord = "figui";

      render(<Form></Form>);

      const textarea = screen.getByRole("textbox");
      userEvent.type(textarea, typedWord);

      expect(textarea).toHaveValue(typedWord);
    });
  });
});
