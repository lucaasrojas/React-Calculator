import React from "react";
import { Button, Display } from "../index";
import { operators, rotateLeft } from "../../Utils";
import "./styles.css";

export default (props) => {
  const [calculation, setCalculation] = React.useState("");
  const symbols = ["+", "-", "*", "/", "."];

  const handleKey = ({ target: { value } }) => {
    if (
      (symbols.includes(value) &&
        (calculation === "" || symbols.includes(calculation.slice(-1)))) ||
      calculation.length > 32
    ) {
      return;
    }

    setCalculation((prev) => `${prev}${value}`);
  };

  const handleResultOperator = () => {
    setCalculation(eval(calculation).toString());
  };

  const handleCleanAll = () => {
    setCalculation("");
  };

  const handleRotateNumber = () => {
    const number = calculation;
    const arr = number.split("");

    const rotatedNumber = rotateLeft(arr, 1);
    setCalculation(rotatedNumber.join(""));
  };

  const handleDel = () => {
    if (calculation === "") {
      return;
    }

    setCalculation(calculation.slice(0, -1));
  };

  return (
    <div className="wrapper">
      <Display value={calculation || "0"} />
      <div className="operators">
        <Button
          id={operators.addition.name}
          value={operators.addition.symbol}
          onClick={handleKey}
          variant="operator"
        />
        <Button
          id={operators.substraction.name}
          value={operators.substraction.symbol}
          onClick={handleKey}
          variant="operator"
        />
        <Button
          id={operators.multiplication.name}
          value={operators.multiplication.symbol}
          onClick={handleKey}
          variant="operator"
        />
        <Button
          id={operators.division.name}
          value={operators.division.symbol}
          onClick={handleKey}
          variant="operator"
        />
        <Button
          id={operators.del.name}
          value={operators.del.symbol}
          onClick={handleDel}
          variant="operator"
        />

        <Button
          id={operators.rotate.name}
          value={operators.rotate.symbol}
          onClick={handleRotateNumber}
          variant="operator"
        />
      </div>
      <div className="keypad">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((number) => (
          <Button
            id={`button-${number}`}
            value={number}
            key={number}
            onClick={handleKey}
            variant="number"
          />
        ))}

        <Button
          id={operators.cleanAll.name}
          value={operators.cleanAll.symbol}
          onClick={handleCleanAll}
          variant="operator"
        />

        <Button value={0} onClick={handleKey} variant="number" />
        <Button value={"."} onClick={handleKey} variant="number" />
        <Button
          id={operators.equal.name}
          value={operators.equal.symbol}
          onClick={handleResultOperator}
          variant="operator"
        />
      </div>
    </div>
  );
};
