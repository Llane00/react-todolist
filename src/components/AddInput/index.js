import React from "react";
import "./index.scss"

export const AddInput = (props) => {
  const { inputVisible } = props;

  return (
    <>
      {
        inputVisible && (
          <div className="input-wrapper">
            <input
              placeholder="请输入待办事项"
            />
            <button
              className="btn btn-primary"
            >
              增加
            </button>
          </div>
        )
      }
    </>
  )

}