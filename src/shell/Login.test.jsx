import React from "react";
import renderer from "react-test-renderer";
import TestWrapper from "testing";
import Login from "./Login";

describe("Login", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <Login />
        </TestWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
