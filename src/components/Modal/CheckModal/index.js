import React from 'react'

import { Modal } from "../"
import "./index.scss"

export const CheckModal = (props) => {
  const { checkModalVisible, data, closeCheckModal } = props;
  
  return (
    <Modal
      modalVisible={checkModalVisible}
      modalTitle="查看事件"
    >
      <p className="topic">时间：{data.id}</p>
      <p className="topic">内容：{data.content}</p>
      <p className="topic">状态：{data.complete ? "完成" : "未完成"}</p>
      <button
        className="btn btn-primary confirm-btn"
        onClick={closeCheckModal} 
      >确定</button>
    </Modal>
  )
}