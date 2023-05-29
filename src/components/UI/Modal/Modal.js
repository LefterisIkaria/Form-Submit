import React from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";

import styles from "./Modal.module.css";

function Backdrop({ onClick }) {
  return <div className={styles.backdrop} onClick={onClick} />;
}

function ModalOverlay({ title, message, onOk }) {
  return (
    <Card styleClass={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <main className={styles.content}>
        <p>{message}</p>
      </main>
      <footer className={styles.actions}>
        <Button onClick={onOk}>OK</Button>
      </footer>
    </Card>
  );
}

function Modal({ title, message, onOk }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onOk} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onOk={onOk} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Modal;
