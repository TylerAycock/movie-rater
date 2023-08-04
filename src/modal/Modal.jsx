import { useState } from "react";
import "./Modal.css";
import { Fragment } from "react";
import { createPortal } from "react-dom";



const Backdrop = (props) => {
  return <div className="overlay" onClick={()=>toggleModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {


  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
