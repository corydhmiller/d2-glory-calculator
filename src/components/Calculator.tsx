import React from "react";

const trimNumberToFour = (num: number) => {
  return parseInt(Math.max(0, num).toString().slice(0, 4));
};

const Calculator = ({ ...props }) => {
  const handleValueChange = (e: any) => {
    const val = parseInt(e.target.value);
    props.setPoints(isNaN(val) ? 0 : trimNumberToFour(val));
  };
  return (
    <>
      <h2>Points:</h2>
      <input value={props.points} onChange={handleValueChange} type={"text"} />
    </>
  );
};

export default Calculator;
