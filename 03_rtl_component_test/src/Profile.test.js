import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="lemonDouble" name="가나다" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    // render 함수 호출하면 여러 TLR은 여러 Query Function 리턴해준다.
    // getByText도 Query Function!
    const utils = render(<Profile username="lemonDouble" name="가나다" />);
    utils.getByText("lemonDouble"); // lemonDouble 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText("(가나다)"); // (가나다) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/가/); // 정규식 /김/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
