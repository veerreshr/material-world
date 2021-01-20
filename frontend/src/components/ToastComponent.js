import React from "react";
import Toast from "react-bootstrap/Toast";

const ToastComponent = ({ title, message, show, setShow }) => {
  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        margin: "1rem",
        zIndex: 1000,
      }}
    >
      <Toast.Header>
        <strong className="mr-auto">{title}</strong>
        <small>Just Now</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastComponent;
