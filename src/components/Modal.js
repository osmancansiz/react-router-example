import React from "react";
import ReactDOM from "react-dom";

export default function Modal(props) {
  return ReactDOM.createPortal(
    <div className="ui dimmer show modals visible active">
      <div className="ui raised very padded text container segment">
        <h1>Hello, this is a modal!</h1>
      </div>
    </div>,
    document.querySelector("#modal")
  );
}
