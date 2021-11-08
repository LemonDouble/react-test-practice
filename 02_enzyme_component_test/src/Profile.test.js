import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapShot", () => {
    const wrapper = mount(<Profile username="lemonDouble" name="가나다" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders username and name", () => {
    const wrapper = mount(<Profile username="lemonDouble" name="가나다" />);
    expect(wrapper.props().username).toBe("lemonDouble");
    expect(wrapper.props().name).toBe("가나다");

    const boldElement = wrapper.find("b");
    expect(boldElement.contains("lemonDouble")).toBe(true);

    const spanElement = wrapper.find("span");
    expect(spanElement.contains("가나다")).toBe(true);
  });
});
