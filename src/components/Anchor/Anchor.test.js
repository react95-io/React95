import React from "react";
import { ThemeProvider } from "styled-components";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import PropTypes from "prop-types";
import { assertPropTypes } from "check-prop-types";

import Anchor from "./Anchor";
import themes from "../common/themes";
import { fontSizes } from "../common/system";

describe("Component: Anchor", () => {

  const testProps = {
    className: "my-class",
    href: "#",
    style: { color: "red" },
    children: "foo",
  }

  it("warns if props are missing or the wrong type", () => {
    expect(() => { assertPropTypes(Anchor.propTypes, { ...testProps, children: undefined}, 'prop', Anchor.children); }).toThrow();
    expect(() => { assertPropTypes(Anchor.propTypes, { ...testProps, href: undefined }, 'prop', Anchor.href); }).toThrow();
    expect(() => { assertPropTypes(Anchor.propTypes, { ...testProps, className: 123 }, 'prop', Anchor.className); }).toThrow();
    expect(() => { assertPropTypes(Anchor.propTypes, { ...testProps, style: "red" }, 'prop', Anchor.style); }).toThrow();
  });

  it("renders", () => {
    const wrapper = shallow(<Anchor />);
    expect(wrapper.find("Anchor__StyledAnchor").length).toBe(1);
  });

  it("renders children", () => {
    const wrapper = shallow(<Anchor>text</Anchor>);
    expect(wrapper.text()).toBe("text");
  });

  it("renders href", () => {
    const wrapper = shallow(<Anchor href="#">text</Anchor>);
    expect(wrapper.props().href).toBe("#");
  });

  it("renders className", () => {
    const wrapper = shallow(<Anchor href="#" className="my-class">text</Anchor>);
    expect(wrapper.props().className).toBe("my-class");
  });

  it("renders style object", () => {
    const wrapper = shallow(
      <Anchor
        href="#"
        className="my-class"
        style={{ color: "blue" }}
      >
        text
      </Anchor>
    );
    expect(wrapper.props().style.color).toBe("blue");
  });

  it("renders other props passed", () => {
    const wrapper = shallow(
      <Anchor
        href="#"
        className="my-class"
        style={{ color: "blue" }}
        a={1}
        b={2}
        c={3}
      >
        text
      </Anchor>
    );
    expect(wrapper.props().a).toBe(1);
    expect(wrapper.props().b).toBe(2);
    expect(wrapper.props().c).toBe(3);
  });

  it("renders default component styles", () => {
    const tree = renderer.create(<Anchor theme={themes.default} href="#">text</Anchor>).toJSON();
    expect(tree).toHaveStyleRule("color", themes.default.anchor);
    expect(tree).toHaveStyleRule("font-size", "inherit");
    expect(tree).toHaveStyleRule("text-decoration", "underline");
    expect(tree).toHaveStyleRule("color", themes.default.anchorVisited, { modifier: ":visited" });
  });

  it("renders correct font size", () => {
    const tree = renderer.create(<Anchor size="sm" />).toJSON();
    expect(tree).toHaveStyleRule("font-size", "15px");
  });

  it("renders matching snapshot", () => {
    const component = renderer.create(
      <Anchor theme={themes.default} href="#">
        text
      </Anchor>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
