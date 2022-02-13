import React from "react";
import "./styles.css";

export default (props) => {
  return (
    <div tabIndex={0} className="display">
      {props.value}
    </div>
  );
};
