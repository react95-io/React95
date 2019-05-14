import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import PropTypes from "prop-types";
import { assertPropTypes } from "check-prop-types";

import Button from "./Button";
import themes from "../common/themes";
import { fontSizes, blockSizes } from "../common/system";
import * as common from "../common";


describe("Component: Button", () => {

  const testProps = {
    type: "button",
    onClick: null,
    style: { color: "red" },
    disabled: false,
    fullWidth: false,
    size: "md",
    square: false,
    active: false,
    flat: false,
    className: "my-class",
    children: "foo",
  }

  it("warns if props are missing or the wrong type", () => {
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, type: 123 }, "prop", Button.type); }).toThrow();
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, onClick: "myFunc" }, "prop", Button.onClick); }).toThrow();
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, style: "red" }, "prop", Button.style); }).toThrow();
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, disabled: 1 }, "prop", Button.disabled); }).toThrow();
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, fullWidth: 1 }, "prop", Button.fullWidth); }).toThrow();
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, size: "x-lg" }, "prop", Button.size); }).toThrow();
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, square: 1 }, "prop", Button.square); }).toThrow();
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, active: 1 }, "prop", Button.active); }).toThrow();
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, flat: 1 }, "prop", Button.flat); }).toThrow();
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, className: 1 }, "prop", Button.className); }).toThrow();
    expect(() => { assertPropTypes(Button.propTypes, { ...testProps, children: undefined}, "prop", Button.children); }).toThrow();
  });

  it("renders", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.length).toBe(1);
  });

  it("renders children", () => {
    const wrapper = shallow(<Button>text</Button>);
    expect(wrapper.text()).toBe("text");
  });

  it("renders className", () => {
    const wrapper = shallow(<Button className="my-class">text</Button>);
    expect(wrapper.props().className).toBe("my-class");
  });

  it("renders style object", () => {
    const wrapper = shallow(
      <Button
        href="#"
        className="my-class"
        style={{ color: "blue" }}
      >
        text
      </Button>
    );
    expect(wrapper.props().style.color).toBe("blue");
  });

  it("renders other props passed", () => {
    const wrapper = shallow(
      <Button
        href="#"
        className="my-class"
        style={{ color: "blue" }}
        a={1}
        b={2}
        c={3}
      >
        text
      </Button>
    );
    expect(wrapper.props().a).toBe(1);
    expect(wrapper.props().b).toBe(2);
    expect(wrapper.props().c).toBe(3);
  });

  it("renders default component styles", () => {
    const tree = renderer.create(<Button theme={themes.default}>text</Button>).toJSON();
    expect(tree).toHaveStyleRule("position", "relative");
    expect(tree).toHaveStyleRule("display", "inline-flex");
    expect(tree).toHaveStyleRule("align-items", "center");
    expect(tree).toHaveStyleRule("justify-content", "center");
    expect(tree).toHaveStyleRule("height", blockSizes["md"]);
    expect(tree).toHaveStyleRule("width", "auto");
    expect(tree).toHaveStyleRule("font-size", fontSizes["md"]);
    expect(tree).toHaveStyleRule("padding-top", "2px", { modifier: ":active" });
  });

  it("renders no border styles for flat variant", () => {
    const tree = renderer.create(<Button flat>text</Button>).toJSON();
    expect(tree).toHaveStyleRule("border", "none");
  })

  it("renders active border styles", () => {
    common.createBorderStyles = jest.fn()
    const tree = renderer.create(<Button active>text</Button>).toJSON();
    expect(common.createBorderStyles.mock.calls[0][0]).toBe(true);
  })

  it("renders inactive border styles", () => {
    common.createBorderStyles = jest.fn()
    const tree = renderer.create(<Button>text</Button>).toJSON();
    expect(common.createBorderStyles.mock.calls[0][0]).toBe(false);
  })

  it("renders fullWidth variant", () => {
    const tree = renderer.create(<Button fullWidth>text</Button>).toJSON();
    expect(tree).toHaveStyleRule("width", "100%");
  })

  it("renders square variant", () => {
    const tree = renderer.create(<Button square>text</Button>).toJSON();
    expect(tree).toHaveStyleRule("width", blockSizes["md"]);
    expect(tree).toHaveStyleRule("padding", "0");
  })

  it("renders disabled text styles", () => {
    common.createDisabledTextStyles = jest.fn();
    const tree = renderer.create(<Button disabled>text</Button>).toJSON();
    expect(common.createDisabledTextStyles).toHaveBeenCalled();
  })

  it("renders click handler inactive", () => {
    const handler = jest.fn();
    const wrapper = shallow(<Button disabled onClick={handler}>text</Button>);
    expect(wrapper.props().onClick).toBe(undefined);
  })

  it("renders matching snapshot", () => {
    const component = renderer.create(
      <Button theme={themes.default}>
        text
      </Button>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
