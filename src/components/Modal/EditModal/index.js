import React, { useRef } from 'react';

import { Modal } from '../';
import "./index.scss"

export const EditModal = (props) => {
  const { editModalVisible, data, submitData } = props;
  const inputRef = useRef();
  const checkRef = useRef();

  const formatNewData = () => {
    const val = inputRef.current.value.trim();
    const valLen = val.len

    if (valLen === 0) {
      inputRef.current.value = data.content;
      return;
    }

    const newData = {
      id: new Date().getTime(),
      content: val,
      completed: checkRef.current.checked
    }

    submitData(newData, data.id);
  }

  return (
    <Modal
      modalVisible={editModalVisible}
      modalTitle="编辑事件"
    >
      <p className="topic">时间：{data.id}</p>
      <textarea
        ref={inputRef}
        defaultValue={data.content}
        className="text-area"
      ></textarea>
      <p className="topic">
        状态：
        <input
          ref={checkRef}
          type="checkbox"
          defaultChecked={data.completed? true : false}
        />
      </p>
      <button
        className="btn btn-primary confirm-btn"
        onClick={ formatNewData } 
      >提交</button>
    </Modal>
  )
}