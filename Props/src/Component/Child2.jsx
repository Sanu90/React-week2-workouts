/* eslint-disable react/prop-types */
export function Child2(props) {
  console.log("child2 props is:", props);

  return (
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>{props.hello}</li>
      <li>{props.b}</li>
      <li>Name is: {props.obj.name}</li>
    
    </ul>
  );
}
