import React from "react";
import ReactDOM from "react-dom";
import Shell from "./Shell";
import renderer from "react-test-renderer";
import TestWrapper from "testing";

describe("Shell", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <TestWrapper>
        <Shell />
      </TestWrapper>,
      div
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <Shell />
        </TestWrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
