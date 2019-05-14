import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import { assertPropTypes } from "check-prop-types";

import Checkbox, { StyledCheckmark } from "./Checkbox";
import { padding, fontSizes } from "../common/system";
import * as common from "../common"

describe("Component: Checkbox", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  })

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  })

  const testProps = {
    onChange: () => ({}),
    name: "",
    value: "",
    label: "",
    checked: false,
    disabled: false,
    shadow: false,
    style: { color: "red" }
  };

  it("warns if props are missing or the wrong type", () => {
    expect(() => { assertPropTypes(Checkbox.propTypes, { ...testProps, onChange: "myFunc" }, "prop", Checkbox.onChange); }).toThrow()
    expect(() => { assertPropTypes(Checkbox.propTypes, { ...testProps, name: undefined }, "prop", Checkbox.name); }).toThrow()
    expect(() => { assertPropTypes(Checkbox.propTypes, { ...testProps, value: undefined }, "prop", Checkbox.value); }).toThrow()
    expect(() => { assertPropTypes(Checkbox.propTypes, { ...testProps, label: true }, "prop", Checkbox.label); }).toThrow()
    expect(() => { assertPropTypes(Checkbox.propTypes, { ...testProps, checked: "true" }, "prop", Checkbox.checked); }).toThrow()
    expect(() => { assertPropTypes(Checkbox.propTypes, { ...testProps, disabled: "true" }, "prop", Checkbox.disabled); }).toThrow()
    expect(() => { assertPropTypes(Checkbox.propTypes, { ...testProps, shadow: "true" }, "prop", Checkbox.shadow); }).toThrow()
    expect(() => { assertPropTypes(Checkbox.propTypes, { ...testProps, shadow: "red" }, "prop", Checkbox.shadow); }).toThrow()
  })

  it("renders", () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.length).toBe(1);
  })

  it("renders className", () => {
    const wrapper = shallow(<Checkbox className="my-class" />);
    expect(wrapper.props().className).toBe("my-class");
  });

  it("renders style object", () => {
    const wrapper = shallow(<Checkbox style={{ color: "blue" }} />);
    expect(wrapper.props().style.color).toBe("blue");
  });

  it("renders other props passed", () => {
    const wrapper = shallow(<Checkbox a={1} b={2} c={3} />);
    const input = wrapper.childAt(0);
    expect(input.props().a).toBe(1);
    expect(input.props().b).toBe(2);
    expect(input.props().c).toBe(3);
  });

  it("renders default component styles", () => {
    common.createDisabledTextStyles = jest.fn();
    const tree = renderer.create(<Checkbox />).toJSON();
    expect(common.createDisabledTextStyles.mock.calls.length).toBe(0);
  });

  it("renders disabled component styles", () => {
    common.createDisabledTextStyles = jest.fn();
    const tree = renderer.create(<Checkbox disabled />).toJSON();
    expect(common.createDisabledTextStyles.mock.calls.length).not.toBe(0);
  });

  it("renders uncontrolled checkbox updates", () => {
    act(() => {
      ReactDOM.render(<Checkbox />, container);
    })

    const input = container.querySelector("input");
    expect(input.checked).toBe(false);

    act(() => {
      input.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    })

    expect(input.checked).toBe(true);
  })

  it("renders styledCheckmark with no shadow", () => {
    const tree = renderer.create(<StyledCheckmark />).toJSON();
    expect(tree).toHaveStyleRule("box-shadow", "none");
  })

  it("renders calls to onChange from uncontrolled checkboxes", () => {
    const onChange = jest.fn();
    const mockEvent = { target: { checked: true } }
    const wrapper = shallow(<Checkbox onChange={onChange} />);
    wrapper.find("[type='checkbox']").simulate("change", mockEvent);
    expect(onChange.mock.calls[0][0]).toEqual(mockEvent);
  })

  it("renders controlled checkbox updates", () => {
    let input;

    act(() => {
      ReactDOM.render(<Checkbox checked={false} />, container);
    })

    input = container.querySelector("input");
    expect(input.checked).toBe(false);

    act(() => {
      ReactDOM.render(<Checkbox checked={true} />, container);
    })

    input = container.querySelector("input");
    expect(input.checked).toBe(true);
  })

  it("renders inactive when disabled from a controlled component", () => {
    const wrapper = shallow(<Checkbox checked={true} disabled />);
    expect(wrapper.find("[type='checkbox']").props().onChange).toBeUndefined();
  })

  it("renders a matching snapshot", () => {
    const tree = renderer.create(<Checkbox value="foo" label="bar" />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
