/* eslint-disable react/prop-types */
export function Child2(props) {
  console.log("child2 props is:", props);

  return (
    <>
      <h2>
      <code>Welcome to {props.obj.org}</code><br/>
        You are logged in as: {props.obj.name}, with role {props.obj.job}.{" "}
      </h2>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>{props.hello}</li>
        <li>{props.b}</li>
      </ul>
    </>
  );
}
