import React from "react";
import "./MenuToggle.css";

const MenuToggle = (props) => {
  const cls = ["fa"];

  if (props.isOpen) {
    cls.push("fa-times");
    cls.push("open");
  } else {
    cls.push("fa-bars");
  }

  return (
    <i
      onClick={props.onToggle}
      className={"MenuToggle" + " " + cls.join(" ")}
    />
  );
};

export default MenuToggle;
