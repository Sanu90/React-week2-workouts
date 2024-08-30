import { Child2 } from "./Child2";

function Child1(props) {
  let b = 100;
  return (
    <>
      {props.a}

      <p>This is child 1 paragraph</p>
      <Child2 b={b} hello={153} obj={{name:'sanup',age:22,job:'SDE'}}/>
    </>
  );
}

export default Child1;
