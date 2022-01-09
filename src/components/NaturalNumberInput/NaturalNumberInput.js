/* global BigInt */
import React from "react";
import { stringIsNaturalNumber } from "../../utils/string-utils";
import "./NaturalNumberInput.css";

export default function IntegerInput(props) {
  function processInput(event) {
    const value = event.target.value;

    if (value === "") {
      props.setValue(value);
      props.setResult(undefined);
      return;
    }
    if (!stringIsNaturalNumber(value)) return;
    const integer = BigInt(value);
    props.setValue(integer);
    props.setResult(undefined);
  }

  return (
    <input
      className="natural-integer-input"
      value={props.value.toLocaleString("fullwide", { useGrouping: false })}
      onChange={processInput}
      aria-label="integer-input"
      placeholder="Specify a natural number"
    ></input>
  );
}
