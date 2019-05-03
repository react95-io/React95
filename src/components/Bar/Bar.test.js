import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import PropTypes from "prop-types";
import checkPropTypes, { assertPropTypes } from "check-prop-types";

import Bar from "./Bar";
import themes from "../common/themes";
import { blockSizes } from "../common/system";

describe("Component: Bar", () => {

  const testProps = {
    className: "my-class",
    style: { color: "red" },
    size: "sm"
  }

  it("warns if props are missing or the wrong type", () => {
    expect(() => { assertPropTypes(Bar.propTypes, { ...testProps, className: 123 }, "prop", Bar.className) }).toThrow();
    expect(() => { assertPropTypes(Bar.propTypes, { ...testProps, style: "red" }, "prop", Bar.style) }).toThrow();
    expect(() => { assertPropTypes(Bar.propTypes, { ...testProps, size: true }, 'prop', Bar.size) }).toThrow();
  });

  it("renders", () => {
    const wrapper = shallow(<Bar />);
    expect(wrapper.length).toBe(1);
  });

  it("renders className", () => {
    const wrapper = shallow(<Bar className="my-class" />);
    expect(wrapper.props().className).toBe("my-class");
  });

  it("renders style object", () => {
    const wrapper = shallow(<Bar style={{ color: "blue" }} />);
    expect(wrapper.props().style.color).toBe("blue");
  });

  it("renders other props passed", () => {
    const wrapper = shallow(<Bar a={1} b={2} c={3} />);
    expect(wrapper.props().a).toBe(1);
    expect(wrapper.props().b).toBe(2);
    expect(wrapper.props().c).toBe(3);
  });

  it("renders default props", () => {
    const wrapper = shallow(<Bar />);
    expect(wrapper.props().size).toBe("md");
  });

  it("renders with prop.size passed", () => {
    const wrapper = shallow(<Bar size="lg" />);
    expect(wrapper.props().size).toBe("lg");
  });

  it("renders default component styles", () => {
    const tree = renderer.create(<Bar theme={themes.default} />).toJSON();
    expect(tree).toHaveStyleRule("display", "inline-block");
    expect(tree).toHaveStyleRule("box-sizing", "border-box");
    expect(tree).toHaveStyleRule("height", blockSizes["md"]);
    expect(tree).toHaveStyleRule("width", "5px");
    expect(tree).toHaveStyleRule("border-top", `2px solid ${themes.default.borderLightest}`);
    expect(tree).toHaveStyleRule("border-left", `2px solid ${themes.default.borderLightest}`);
    expect(tree).toHaveStyleRule("border-bottom", `2px solid ${themes.default.borderDark}`);
    expect(tree).toHaveStyleRule("border-right", `2px solid ${themes.default.borderDark}`);
    expect(tree).toHaveStyleRule("background", themes.default.material);
  });

  it("render a matching snapshot", () => {
    const component = renderer.create(
      <Bar
        size="sm"
        className="sm-gd-12"
        style={{ color: "red" }}
      />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  })
})
