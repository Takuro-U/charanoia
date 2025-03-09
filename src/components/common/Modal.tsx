import React from "react";

// costum-hooks
import { useModalContext } from "../../hooks/ModalProvider";

// style
import styles from "../styles/Modal.module.scss";

// mui-icon
import ClearIcon from "@mui/icons-material/Clear";

// etc.
import classNames from "classnames";

const Modal: React.FC = () => {
  const { modalStatus, closeModal } = useModalContext();
  const { Component, componentProps } = modalStatus;

  const blockClickEvent = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.veil} onClick={closeModal}>
      <div
        className={classNames(styles.modalCard, "relative")}
        onClick={blockClickEvent}
      >
        {Component ? (
          <>
            <button className="absolute top-2 right-2" onClick={closeModal}>
              <ClearIcon />
            </button>
            <Component {...componentProps} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Modal;
