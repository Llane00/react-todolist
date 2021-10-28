import React from "react";
import "./index.scss"

export const Header = (props) => {
  const { switchInputVisible } = props;

  return (
    <div className="header">
      <h1>待办事项</h1>
      <span 
        className="icon"
        onClick={switchInputVisible}
      >&#43;</span>
    </div>
  )
}