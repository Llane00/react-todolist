import React, { useRef } from "react";
import "./index.scss"

export const AddInput = (props) => {
  const { inputVisible, addItem } = props;

  const inputRef = useRef()

  const submitNewTodoItem = () => {
    const inputValue = inputRef.current.value.trim();

    if (inputValue.length === 0) {
      return;
    }

    addItem(inputValue)

    inputRef.current.value = "";
  }

  return (
    <>
      {
        inputVisible && (
          <div className="input-wrapper">
            <input
              ref={inputRef}
              type="text"
              placeholder="请输入待办事项"
            />
            <button
              className="btn btn-primary"
              onClick={ submitNewTodoItem }
            >
              增加
            </button>
          </div>
        )
      }
    </>
  )

}