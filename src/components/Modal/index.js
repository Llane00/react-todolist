import React from 'react'
import "./index.scss"

export const Modal = (props) => {
  const { modalVisible, modalTitle, children } = props;

  return (
    <>
      {
        modalVisible?
        (<div className="modal">
          <div className="inner">
            <div className="m-header">{modalTitle}</div>
            <div className="content-wrap">
              {children}
            </div>
          </div>
          </div>)
        : ''
      }
    </>
  )
}