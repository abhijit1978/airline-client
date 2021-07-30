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
    </>
  );
};

export default SampleComponent;
