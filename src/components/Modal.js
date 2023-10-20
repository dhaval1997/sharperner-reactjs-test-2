import React from "react";
import { createPortal } from "react-dom";

const ModalOverlay = (props) => {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

const Backdrop = (props) => {
  return <div onClick={props.onClose}></div>;
};

const Modal = (props) => {
  const overlayroot = document.getElementById("overlay");

  return (
    <>
      {createPortal(<Backdrop onClose = {props.onClose} />, overlayroot)}
      {createPortal(<ModalOverlay />, overlayroot)}
    </>
  );
};

export default Modal;
