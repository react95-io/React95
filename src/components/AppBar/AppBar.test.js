import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import PropTypes from "prop-types";
import { assertPropTypes } from "check-prop-types";

import AppBar from "./AppBar";
import themes from "../common/themes";
import { shadow } from "../common";

describe("Component: AppBar", () => {

  const testProps = {
    fixed: true,
    className: "my-class",
    style: { color: "red" },
    children: "foo",
    shadow: true,
  }

  it("warns if props are missing or the wrong type", () => {
    expect(() => { assertPropTypes(AppBar.propTypes, { ...testProps, fixed: 123 }, 'prop', AppBar.fixed); }).toThrow();
    expect(() => { assertPropTypes(AppBar.propTypes, { ...testProps, shadow: 123 }, 'prop', AppBar.fixed); }).toThrow();
    expect(() => { assertPropTypes(AppBar.propTypes, { ...testProps, children: undefined }, 'prop', AppBar.children); }).toThrow();
    expect(() => { assertPropTypes(AppBar.propTypes, { ...testProps, className: 123 }, 'prop', AppBar.className); }).toThrow();
    expect(() => { assertPropTypes(AppBar.propTypes, { ...testProps, style: "red" }, 'prop', AppBar.style); }).toThrow();
  })


  it("renders", () => {
    const wrapper = shallow(<AppBar />);
    expect(wrapper.find("AppBar__StyledAppBar").length).toBe(1);
  });

  it("renders children", () => {
    const wrapper = shallow(<AppBar>text</AppBar>);
    expect(wrapper.text()).toBe("text");
  });

  it("renders className", () => {
    const wrapper = shallow(<AppBar className="my-class">text</AppBar>);
    expect(wrapper.props().className).toBe("my-class");
  });

  it("renders style object", () => {
    const wrapper = shallow(
      <AppBar
        href="#"
        className="my-class"
        style={{ color: "blue" }}
      >
        text
      </AppBar>
    );
    expect(wrapper.props().style.color).toBe("blue");
  })

  it("renders other props passed", () => {
    const wrapper = shallow(
      <AppBar
        href="#"
        className="my-class"
        style={{ color: "blue" }}
        a={1}
        b={2}
        c={3}
      >
        text
      </AppBar>
    );
    expect(wrapper.props().a).toBe(1);
    expect(wrapper.props().b).toBe(2);
    expect(wrapper.props().c).toBe(3);
  });

  it("renders default props", () => {
    const wrapper = shallow(<AppBar />);
    expect(wrapper.props().shadow).toBe(true);
    expect(wrapper.props().fixed).toBe(true);
  });

  it("renders default component styles", () => {
    const tree = renderer.create(<AppBar theme={themes.default} />).toJSON();
    expect(tree).toHaveStyleRule("box-sizing", "border-box");
    expect(tree).toHaveStyleRule("position", "fixed");
    expect(tree).toHaveStyleRule("background-color", themes.default.material);
    expect(tree).toHaveStyleRule("color", themes.default.text);
    expect(tree).toHaveStyleRule("border-style", "solid");
    expect(tree).toHaveStyleRule("border-width", "2px");
    expect(tree).toHaveStyleRule("border-left-color", themes.default.borderLightest);
    expect(tree).toHaveStyleRule("border-top-color", themes.default.borderLightest);
    expect(tree).toHaveStyleRule("border-right-color", themes.default.borderDarkest);
    expect(tree).toHaveStyleRule("border-bottom-color", themes.default.borderDarkest);
    expect(tree).toHaveStyleRule("box-shadow", `${shadow},inset 1px 1px 0px 1px ${themes.default.borderLight},inset -1px -1px 0 1px ${themes.default.borderDark}`);
    expect(tree).toHaveStyleRule("top", "0");
    expect(tree).toHaveStyleRule("right", "0");
    expect(tree).toHaveStyleRule("left", "auto");
    expect(tree).toHaveStyleRule("display", "flex");
    expect(tree).toHaveStyleRule("flex-direction", "column");
    expect(tree).toHaveStyleRule("width", "100%");
  });

  it("renders position absolute", () => {
    const tree = renderer.create(<AppBar fixed={false} />).toJSON();
    expect(tree).toHaveStyleRule("position", "absolute");
  });

  it("render matching snapshot", () => {
    const component = renderer.create(
      <AppBar>
        test
      </AppBar>
    )

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
