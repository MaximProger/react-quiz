import React from "react";
import "./AnswerItem.css";

const AnswerItem = (props) => {
  let cls = "";

  if (props.state) {
    cls = props.state;
  }

  return (
    <li
      className={"AnswerItem" + " " + cls}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
