/* eslint-disable react/prop-types */
const Child2 = (props) => {
  return (
    <>
      <code>
        This is grand child. Displaying a value passed from grand-parent:{" "}
        {props.value}
      </code>
    </>
  );
};

export default Child2;
