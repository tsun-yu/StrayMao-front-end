import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "./A";

function forumArticleBtnControl() {
  const [modalVisible, setModalVisible] = useState(false);
  const modalConfig = {
    visible: modalVisible,
    closeModal: () => {
      setModalVisible(false);
    }
  };

  const modalChildren = (
    <div className="dialog">
      <span onClick={() => setModalVisible(false)} className="closeBtn">
        X
      </span>
      <div>救命TT</div>
    </div>
  );

  return (
    <div className="socialEditButtom paragraph2">
      <button onClick={()=>setModalVisible(true)} className="openBtn">
        open
      </button>
      <Modal {...modalConfig}>{modalChildren}</Modal>
      <div className="forumMyEdit">
        <span>建立話題</span>
        <img
          className="pinkarrow"
          src="./icomoon/SVG/_103-plus-white.svg"
          alt=""
        />
      </div>
      <div className="forumMyEdit">
        <span>我的話題</span>
        <img
          className="pinkarrow"
          src="./icomoon/SVG/_104-pencil-white.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default forumArticleBtnControl;
