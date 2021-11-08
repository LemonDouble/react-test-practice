import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("matches snapshot", () => {
    // swallow : 컴포넌트 내부에 또 컴포넌트 있다면, 해당 컴포넌트는 렌더링하지 않는다!
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
  it("has initial number", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state().number).toBe(0);
  });
  it("increases", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });
  it("decreases", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(-1);
  });
  it("calls handleIncrease", () => {
    // 클릭이벤트를 시뮬레이트하고, state 를 확인
    const wrapper = shallow(<Counter />);
    const plusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    expect(wrapper.state().number).toBe(1);
  });
  it("calls handleDecrease", () => {
    // 클릭 이벤트를 시뮬레이트하고, h2 태그의 텍스트 확인
    const wrapper = shallow(<Counter />);
    const minusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "-1"
    );
    minusButton.simulate("click");
    const number = wrapper.find("h2");
    expect(number.text()).toBe("-1");
  });
});
