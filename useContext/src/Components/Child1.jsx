/* eslint-disable react/prop-types */
import Child2 from "./Child2";

export function Child1(props) {
  console.log("props -->", props);
  return (
    <div>
      <h3>This is child. </h3>
      <p>
        <Child2 value={props.value} />
      </p>
    </div>
  );
}
