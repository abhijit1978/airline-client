import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sampleAction } from "../../appStore";

const SampleComponent = () => {
  const dispatch = useDispatch();
  const sampleData = useSelector((state) => state.sample.sampleState);

  return (
    <>
      <p onClick={() => dispatch(sampleAction(5))}>Hello redux: {sampleData}</p>
      <h1>Hello world!!!</h1>
      <button className="primary">Hello Button</button>
      <div className="popup-center">
        <header>
          Popup Heading
          <div className="close-button">X</div>
        </header>
        <div className="content-area">
          With this tool you can filter text lines. You can do two ways of
          filtering – the first way allows you to find and display all text
          lines that match contain the given search pattern. This pattern is
          simply a subtext of original text, which can be one or more
          characters, numbers, words or phrases. The second way is to use a
          regular expression. You can also select the reverse mode that will
          display all lines that weren't matched. Textabulous!
          <br />
          <br />
          With this tool you can filter text lines. You can do two ways of
          filtering – the first way allows you to find and display all text
          lines that match contain the given search pattern. This pattern is
          simply a subtext of original text, which can be one or more
          characters, numbers, words or phrases. The second way is to use a
          regular expression. You can also select the reverse mode that will
          display all lines that weren't matched. Textabulous!
          <br />
          <br />
          With this tool you can filter text lines. You can do two ways of
          filtering – the first way allows you to find and display all text
          lines that match contain the given search pattern. This pattern is
          simply a subtext of original text, which can be one or more
          characters, numbers, words or phrases. The second way is to use a
          regular expression. You can also select the reverse mode that will
          display all lines that weren't matched. Textabulous!
        </div>
      </div>
    </>
  );
};

export default SampleComponent;
