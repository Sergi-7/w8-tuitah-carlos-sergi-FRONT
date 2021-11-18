/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Nav from "../components/Nav/Nav";

describe("Given a Nav component", () => {
  describe("When it is called", () => {
    test("Then it should render", () => {
      render(<Nav></Nav>);
    });
  });
  describe("When it called", () => {
    test("Then it should render three links", () => {
      render(<Nav></Nav>);

      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(3);
    });
  });
});
