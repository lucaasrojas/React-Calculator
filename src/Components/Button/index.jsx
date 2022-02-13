import React from "react";
import "./styles.css";

export default (props) => {
  return (
    <button
      {...props}
      className={`button ${props.variant}`}
      id={props.id}
      onClick={props.onClick}
      value={props.value}
      aria-label={`button ${props.variant} ${props.id}`}
    >
      {props.operator?.symbol || props.value}
    </button>
  );
};
