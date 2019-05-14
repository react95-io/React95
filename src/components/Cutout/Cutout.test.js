import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import { assertPropTypes } from "check-prop-types";

import Cutout from "./Cutout";
import themes from "../common/themes";
import { insetShadow } from "../common";

describe("Component: Cutout", () => {
  const testProps = {
    className: "",
    shadow: false,
    children: "text",
    style: { color: "red" }
  };

  it("warns if prop are missing or the wrong type", () => {
    expect(() => { assertPropTypes(Cutout.propTypes, { ...testProps, className: 123 }, "prop", Cutout.className); }).toThrow()
    expect(() => { assertPropTypes(Cutout.propTypes, { ...testProps, shadow: "true" }, "prop", Cutout.shadow); }).toThrow()
    expect(() => { assertPropTypes(Cutout.propTypes, { ...testProps, children: () => null }, "prop", Cutout.children); }).toThrow()
    expect(() => { assertPropTypes(Cutout.propTypes, { ...testProps, style: "red" }, "prop", Cutout.style); }).toThrow()
  })

  it("renders", () => {
    const wrapper = shallow(<Cutout />);
    expect(wrapper.length).toBe(1);
  })

  it("renders children", () => {
    const wrapper = shallow(<Cutout>text</Cutout>);
    expect(wrapper.text()).toBe("text");
  })

  it("renders className", () => {
    const wrapper = shallow(<Cutout className="my-class" />);
    expect(wrapper.props().className).toBe("my-class");
  })

  it("renders style object", () => {
    const wrapper = shallow(<Cutout style={{ color: "red" }} />);
    expect(wrapper.props().style).toEqual({ color: "red" });
  })

  it("renders other props passed", () => {
    const wrapper = shallow(<Cutout a={1} b={2} c={3} />);
    expect(wrapper.props().a).toBe(1);
    expect(wrapper.props().b).toBe(2);
    expect(wrapper.props().c).toBe(3);
  })

  it("renders default styles", () => {
    const tree = renderer.create(<Cutout theme={themes.default} />).toJSON();
    expect(tree).toHaveStyleRule("border-left-color", themes.default.borderDark);
    expect(tree).toHaveStyleRule("border-top-color", themes.default.borderDark);
    expect(tree).toHaveStyleRule("border-right-color", themes.default.borderLightest);
    expect(tree).toHaveStyleRule("border-bottom-color", themes.default.borderLightest);
    expect(tree).toHaveStyleRule("border-left-color", themes.default.borderDarkest, { modifier: ":before" });
    expect(tree).toHaveStyleRule("border-top-color", themes.default.borderDarkest, { modifier: ":before" });
    expect(tree).toHaveStyleRule("border-right-color", themes.default.borderLight, { modifier: ":before" });
    expect(tree).toHaveStyleRule("border-bottom-color", themes.default.borderLight, { modifier: ":before" });
  })

  it("renders a matching snapshot", () => {
    const tree = renderer.create(<Cutout>text</Cutout>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
